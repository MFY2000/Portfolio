import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio (MFY)',
  description: 'Muhammad Fahad portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex min-h-screen flex-row items-center justify-between p-10 pt-0'>
          <div className='flex-none w-14 h-14 '>
            <p className='.horizontal-line'></p>
            <p>G</p>
            <p>G</p>
            <p>G</p>
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
