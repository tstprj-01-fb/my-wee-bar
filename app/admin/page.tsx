"use client"

import { useData } from "@/contexts/data-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Beer, Calendar, ImageIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  const { menuItems, events, galleryItems } = useData()

  const stats = [
    {
      title: "Menu Items",
      value: menuItems.length,
      description: "Total drinks and snacks",
      icon: Beer,
      link: "/admin/menu",
    },
    {
      title: "Events",
      value: events.length,
      description: "Upcoming events",
      icon: Calendar,
      link: "/admin/events",
    },
    {
      title: "Gallery Items",
      value: galleryItems.length,
      description: "Photos in gallery",
      icon: ImageIcon,
      link: "/admin/gallery",
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Welcome to the Admin Dashboard</h2>
      <p className="text-muted-foreground">
        Manage your bar's content from this central dashboard. Use the tabs above to navigate to different sections.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
                <Button asChild variant="outline" className="mt-4 w-full">
                  <Link href={stat.link}>Manage {stat.title}</Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="bg-amber-50 p-4 rounded-lg mt-6">
        <h3 className="font-semibold mb-2">Quick Tips</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Use the Menu section to add, edit, or remove drinks and snacks</li>
          <li>Manage upcoming events in the Events section</li>
          <li>Upload and organize photos in the Gallery section</li>
          <li>All changes are saved automatically and will be visible on the public site</li>
        </ul>
      </div>
    </div>
  )
}
