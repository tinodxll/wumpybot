import Image from 'next/image'

export function WumpyLogo() {
  return (
    <div className="relative w-10 h-10">
      <Image
        src="https://i.imgur.com/5TuTFVa.png"
        alt="Wumpy Logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  )
}

