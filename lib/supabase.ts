import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Supabase client will not be initialized.')
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabase_url, supabaseAnonKey)
  : null

export function getSupabase() {
  if (!supabase) {
    throw new Error('Supabase client is not initialized. Please check your environment variables.')
  }
  return supabase
}

