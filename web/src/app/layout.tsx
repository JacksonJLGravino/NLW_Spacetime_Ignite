import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamhuree } from 'next/font/google'
import { Hero } from '@/components/Hero'
import { Profie } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamhuree({ subsets: ['latin'], weight: '700', variable: '--font-baiJamjuree' })

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construída com React, Next.js, TailWindCSS e TypeSCript',
}

export default function RootLayout({ children, }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        <main className="grid grid-cols-2 min-h-screen">

          <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

            {isAuthenticated ? <Profie /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>


          <div className="flex flex-col max-h-screen overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>

      </body>
    </html>
  )
}
