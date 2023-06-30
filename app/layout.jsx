import Provider from '@/components/Provider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Orders Management',
  description: 'Web Application for managing your Orders',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}
