import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className='flex flex-row items-center justify-between '>
        <div></div>
        <div className='flex flex-row items-center justify-between' >
          <a>#Home</a>
          <a>#Work</a>
          <a>#About-us</a>
          <a>#Contact</a>
        </div>
      </div>
    </main>
  )
}
