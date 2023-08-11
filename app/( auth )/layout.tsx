import { ClerkProvider } from "@clerk/nextjs"
import  { Inter } from 'next/font/google'

export const metadata = {
    title: "LIO",
    description: "A next.js 13 app"
}

const inter = Inter({subsets: ["latin"]})

export default function RootLayout(
    {children} : {
    children: React.ReactNode
}){
    return (
        <ClerkProvider>
            <html lang="en">
        <body className={`${inter.className}`}>
            {children}
        </body>
            </html>
        </ClerkProvider>
    )
}