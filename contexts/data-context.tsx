"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Define types for our data
export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  category: "beers" | "spirits" | "soft-drinks" | "snacks"
  image?: string
}

export type Event = {
  id: string
  title: string
  date: string
  time: string
  description: string
  icon: string
}

export type GalleryItem = {
  id: string
  title: string
  description: string
  image: string
}

type DataContextType = {
  menuItems: MenuItem[]
  events: Event[]
  galleryItems: GalleryItem[]
  addMenuItem: (item: Omit<MenuItem, "id">) => void
  updateMenuItem: (id: string, item: Partial<MenuItem>) => void
  deleteMenuItem: (id: string) => void
  addEvent: (event: Omit<Event, "id">) => void
  updateEvent: (id: string, event: Partial<Event>) => void
  deleteEvent: (id: string) => void
  addGalleryItem: (item: Omit<GalleryItem, "id">) => void
  updateGalleryItem: (id: string, item: Partial<GalleryItem>) => void
  deleteGalleryItem: (id: string) => void
}

// Initial data
const initialMenuItems: MenuItem[] = [
  { id: "1", name: "Craft IPA", description: "Hoppy and refreshing local IPA", price: "£4.50", category: "beers" },
  { id: "2", name: "Lager", description: "Crisp and light premium lager", price: "£4.00", category: "beers" },
  { id: "3", name: "Whiskey", description: "Smooth single malt whiskey", price: "£5.50", category: "spirits" },
  { id: "4", name: "Gin", description: "Botanical craft gin", price: "£5.00", category: "spirits" },
  { id: "5", name: "Cola", description: "Classic cola with ice", price: "£2.00", category: "soft-drinks" },
  { id: "6", name: "Lemonade", description: "Refreshing sparkling lemonade", price: "£2.00", category: "soft-drinks" },
  { id: "7", name: "Crisps", description: "Variety of flavored potato crisps", price: "£1.50", category: "snacks" },
  { id: "8", name: "Nuts", description: "Mixed salted nuts", price: "£2.00", category: "snacks" },
]

const initialEvents: Event[] = [
  {
    id: "1",
    title: "Pool Tournament",
    date: "April 15, 2025",
    time: "7:00 PM",
    description: "Join us for a friendly pool tournament. Prizes for the winner and runner-up!",
    icon: "trophy",
  },
  {
    id: "2",
    title: "Darts Competition",
    date: "April 22, 2025",
    time: "7:30 PM",
    description: "Test your skills in our monthly darts competition. All skill levels welcome!",
    icon: "trophy",
  },
  {
    id: "3",
    title: "Movie Night",
    date: "April 29, 2025",
    time: "8:00 PM",
    description: "Outdoor movie night featuring classic films on our garden projector. Bring a blanket!",
    icon: "film",
  },
]

const initialGalleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Bar Counter",
    description: "Custom-built wooden bar counter",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "2",
    title: "Pool Table",
    description: "Full-size pool table with accessories",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "3",
    title: "Darts Area",
    description: "Professional dartboard setup",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "4",
    title: "Outdoor Seating",
    description: "Comfortable garden seating area",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const DataContext = createContext<DataContextType | undefined>(undefined)

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems)
  const [events, setEvents] = useState<Event[]>(initialEvents)
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(initialGalleryItems)

  // Load data from localStorage on mount
  useEffect(() => {
    const storedMenuItems = localStorage.getItem("my-wee-bar-menu-items")
    const storedEvents = localStorage.getItem("my-wee-bar-events")
    const storedGalleryItems = localStorage.getItem("my-wee-bar-gallery-items")

    if (storedMenuItems) setMenuItems(JSON.parse(storedMenuItems))
    if (storedEvents) setEvents(JSON.parse(storedEvents))
    if (storedGalleryItems) setGalleryItems(JSON.parse(storedGalleryItems))
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("my-wee-bar-menu-items", JSON.stringify(menuItems))
  }, [menuItems])

  useEffect(() => {
    localStorage.setItem("my-wee-bar-events", JSON.stringify(events))
  }, [events])

  useEffect(() => {
    localStorage.setItem("my-wee-bar-gallery-items", JSON.stringify(galleryItems))
  }, [galleryItems])

  // Menu item functions
  const addMenuItem = (item: Omit<MenuItem, "id">) => {
    const newItem = { ...item, id: Date.now().toString() }
    setMenuItems([...menuItems, newItem])
  }

  const updateMenuItem = (id: string, item: Partial<MenuItem>) => {
    setMenuItems(menuItems.map((menuItem) => (menuItem.id === id ? { ...menuItem, ...item } : menuItem)))
  }

  const deleteMenuItem = (id: string) => {
    setMenuItems(menuItems.filter((item) => item.id !== id))
  }

  // Event functions
  const addEvent = (event: Omit<Event, "id">) => {
    const newEvent = { ...event, id: Date.now().toString() }
    setEvents([...events, newEvent])
  }

  const updateEvent = (id: string, event: Partial<Event>) => {
    setEvents(events.map((e) => (e.id === id ? { ...e, ...event } : e)))
  }

  const deleteEvent = (id: string) => {
    setEvents(events.filter((event) => event.id !== id))
  }

  // Gallery item functions
  const addGalleryItem = (item: Omit<GalleryItem, "id">) => {
    const newItem = { ...item, id: Date.now().toString() }
    setGalleryItems([...galleryItems, newItem])
  }

  const updateGalleryItem = (id: string, item: Partial<GalleryItem>) => {
    setGalleryItems(
      galleryItems.map((galleryItem) => (galleryItem.id === id ? { ...galleryItem, ...item } : galleryItem)),
    )
  }

  const deleteGalleryItem = (id: string) => {
    setGalleryItems(galleryItems.filter((item) => item.id !== id))
  }

  return (
    <DataContext.Provider
      value={{
        menuItems,
        events,
        galleryItems,
        addMenuItem,
        updateMenuItem,
        deleteMenuItem,
        addEvent,
        updateEvent,
        deleteEvent,
        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider")
  }
  return context
}
