import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'

const lora = Lora({ subsets: ['latin'] })

import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'HAPPY NEW YEAR 2024 - tanxin',
  description: 'Created, Designed...everything by Tanxin or tan(x)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.jpg" />
      </head>

      <body className={lora.className}>{children}</body>

      <Analytics />
    </html>
  )
}
