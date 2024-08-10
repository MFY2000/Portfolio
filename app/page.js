import Image from 'next/image'
import heroImage from '../public/assets/icon/image1@2x.png'
export default function Home() {
  return (
    <main className="flex min-w-screen flex-col w-full p-10">
      <section className='flex flex-row justify-between bg-re'>
        <div><Image src={`./assets/icon/logo_white.svg`} alt={"logo"} width={25} height={25}  /></div>
        <div className='flex flex-row items-center w-1/3 justify-between px-5' >
          <a>#Home</a>
          <a>#Work</a>
          <a>#About-us</a>
          <a>#Contact</a>
          {/* dropdown */}
        </div>
      </section>

      <section className='flex h-full flex-row items-center justify-between'>
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl'>We are a creative agency</h1>
          <p className='text-lg'>We are a team of talented designers making websites with Bootstrap</p>
          <button>Get Started</button>
        </div>
        <div><Image src={heroImage} alt={"image"} className='h-full'  /></div>
      </section>

    </main>
  )
}
