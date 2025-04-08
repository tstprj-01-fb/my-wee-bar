"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/admin/login")
    }
  }, [user, isLoading, router])

  const handleLogout = () => {
    logout()
    document.cookie = "my-wee-bar-auth=; path=/; max-age=0"
    router.push("/admin/login")
  }

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-[60vh]">Loading...</div>
  }

  if (!user) {
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard" asChild>
            <Link href="/admin">Dashboard</Link>
          </TabsTrigger>
          <TabsTrigger value="menu" asChild>
            <Link href="/admin/menu">Menu</Link>
          </TabsTrigger>
          <TabsTrigger value="events" asChild>
            <Link href="/admin/events">Events</Link>
          </TabsTrigger>
          <TabsTrigger value="gallery" asChild>
            <Link href="/admin/gallery">Gallery</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="bg-white p-6 rounded-lg shadow">{children}</div>
    </div>
  )
}
