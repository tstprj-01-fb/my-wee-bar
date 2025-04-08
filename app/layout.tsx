import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AuthProvider } from "@/contexts/auth-context"
import { DataProvider } from "@/contexts/data-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Wee Bar",
  description: "A personal garden bar and man cave hobby project",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <DataProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
              <Footer />
            </div>
          </DataProvider>
        </AuthProvider>
      </body>
    </html>
  )
}


import './globals.css'