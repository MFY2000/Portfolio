import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio (MFY)',
  description: 'Muhammad Fahad portfolio',
}

export default function RootLayout({ children }) {
  const icons = ["bitcoin", "calendar", "card", "discord"]
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex min-h-screen flex-row p-5 pt-0'>
          <div className='flex-none w-14 h-14 '>
            <p className='.horizontal-line'></p>
            {icons.map((icon) => <Image src={`./assets/icon/${icon}.svg`} alt={icon} width={25} height={25}  />)}            
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
