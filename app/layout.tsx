import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'

const lora = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HAPPY NEW YEAR 2024 - tanxin',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lora.className}>{children}</body>
    </html>
  )
}
