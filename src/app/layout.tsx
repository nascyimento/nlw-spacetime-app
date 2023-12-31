import './globals.css'
import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as Roboto,
} from 'next/font/google'
import React from 'react'
import Profile from '@/components/Profile'
import SignIn from '@/components/SignIn'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description: 'A time vault built with React, Next, Fastify and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-sans ${baiJamjuree.variable} scroll- bg-gray-900 text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          <div className='relative flex flex-col items-start justify-between overflow-x-hidden border-r border-white/10 bg-[url("../assets/bg-stars.svg")] bg-cover px-28 py-16'>
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>
            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Footer />
          </div>
          <div className='flex h-screen flex-col overflow-auto bg-[url("../assets/bg-stars.svg")] bg-cover'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
