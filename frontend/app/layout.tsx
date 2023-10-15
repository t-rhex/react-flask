import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './component/header'


const inter = Inter({ subsets: ['latin'] })

// Define metadata for the website
export const metadata: Metadata = {
  title: 'Andrew Portfolio v2',
  description: 'Created using NextJS',
}

// Define the RootLayout component, which will be used to wrap pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
