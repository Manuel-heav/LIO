import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='m-5 flex items-center'>
      <Image 
        width={40}
        height={40}
        alt='logo' src="/logo.png"/>
     <h1 className='text-xl'>LIO</h1>
      </div>    
    </main>
  )
}
