import type { Metadata } from 'next'
import { Lora, Alfa_Slab_One, Atma } from 'next/font/google'
import './globals.css'

const lora = Lora({ subsets: ['latin'] })
const blocky = Atma({
  subsets: ['latin'],
  weight: '600'
})

import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'HAPPY BIRTHDAY - tanxin',
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

      <body className={blocky.className}>{children}</body>

      <Analytics />
    </html>
  )
}
