import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data.json')

interface ServiceStatus {
  id: number
  name: string
  status: 'operational' | 'degraded' | 'outage' | 'maintenance'
}

interface Data {
  serviceStatuses: ServiceStatus[]
}

const defaultServiceStatuses: ServiceStatus[] = [
  { id: 1, name: "Bot Core", status: "operational" },
  { id: 2, name: "Web Dashboard", status: "operational" },
  { id: 3, name: "Database", status: "operational" },
  { id: 4, name: "API", status: "operational" },
]

function getData(): Data {
  console.log('Attempting to read data from:', DATA_FILE)
  if (!fs.existsSync(DATA_FILE)) {
    console.log('data.json does not exist, returning default data')
    return { serviceStatuses: defaultServiceStatuses }
  }
  try {
    const rawData = fs.readFileSync(DATA_FILE, 'utf8')
    console.log('Raw data read from file:', rawData)
    const parsedData = JSON.parse(rawData)
    console.log('Successfully parsed data:', parsedData)
    return { 
      serviceStatuses: Array.isArray(parsedData.serviceStatuses) && parsedData.serviceStatuses.length > 0
        ? parsedData.serviceStatuses
        : defaultServiceStatuses
    }
  } catch (error) {
    console.error('Error reading or parsing data.json:', error)
    return { serviceStatuses: defaultServiceStatuses }
  }
}

function saveData(data: Data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2))
    console.log('Successfully saved data to:', DATA_FILE)
  } catch (error) {
    console.error('Error writing to data.json:', error)
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`Received ${req.method} request to /api/status`)
  
  if (req.method === 'GET') {
    try {
      const data = getData()
      console.log('Sending response:', data)
      res.status(200).json(data)
    } catch (error) {
      console.error('Error handling GET request:', error)
      res.status(500).json({ error: 'Internal Server Error', details: error instanceof Error ? error.message : 'Unknown error' })
    }
  } else if (req.method === 'POST') {
    try {
      const { id, status } = req.body
      console.log(`Updating status for id ${id} to ${status}`)
      const data = getData()
      const updatedStatuses = data.serviceStatuses.map(service => 
        service.id === id ? { ...service, status } : service
      )
      saveData({ serviceStatuses: updatedStatuses })
      console.log('Status updated successfully')
      res.status(200).json({ success: true, message: 'Status updated successfully' })
    } catch (error) {
      console.error('Error handling POST request:', error)
      res.status(500).json({ success: false, error: 'Internal Server Error', details: error instanceof Error ? error.message : 'Unknown error' })
    }
  } else {
    console.log(`Method ${req.method} not allowed`)
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

