import type { Metadata } from 'next'
import { Black_Ops_One } from 'next/font/google'
import './globals.css'

const backOpsOne = Black_Ops_One({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brostrology',
  description: 'Created by Jenny Sok - Built by Mateus Batista',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${backOpsOne.className} bg-black`}>{children}</body>
    </html>
  )
}
