import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs"
import Header from '@/components/shared/Header'
import LeftSide from '@/components/shared/LeftSide'
import RightSide from '@/components/shared/RightSide'
import Footer from '@/components/shared/Footer'
import BottomMobile from '@/components/shared/BottomMobile'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LIO',
  description: 'An app to vent',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={inter.className}>
        <Header />

        <main>
          <LeftSide />
            <section className='flex min-h-screen flex-1 flex-col items-center bg-dark-1 px-6 pb-10 pt-28 max-md:pb-32 sm:px-10'>
              <div className='w-full max-w-4xl'>
                {children}
              </div>
            </section>
          <RightSide />
        </main>

        <BottomMobile />
      </body>
    </html>
    </ClerkProvider>
  )
}
