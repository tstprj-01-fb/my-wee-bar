"use client"

import type React from "react"

import { useState } from "react"
import { useData, type Event } from "@/contexts/data-context"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Pencil, Trash, Plus, Calendar, Trophy, Film, Music, Users } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

export default function EventsManagement() {
  const { events, addEvent, updateEvent, deleteEvent } = useData()
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    icon: "trophy",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, icon: value }))
  }

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addEvent(formData as Omit<Event, "id">)
    setFormData({ title: "", date: "", time: "", description: "", icon: "trophy" })
    setIsAddDialogOpen(false)
  }

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentEvent) {
      updateEvent(currentEvent.id, formData)
      setIsEditDialogOpen(false)
    }
  }

  const handleDeleteConfirm = () => {
    if (currentEvent) {
      deleteEvent(currentEvent.id)
      setIsDeleteDialogOpen(false)
    }
  }

  const openEditDialog = (event: Event) => {
    setCurrentEvent(event)
    setFormData({
      title: event.title,
      date: event.date,
      time: event.time,
      description: event.description,
      icon: event.icon,
    })
    setIsEditDialogOpen(true)
  }

  const openDeleteDialog = (event: Event) => {
    setCurrentEvent(event)
    setIsDeleteDialogOpen(true)
  }

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "trophy":
        return <Trophy className="h-6 w-6 text-amber-600" />
      case "film":
        return <Film className="h-6 w-6 text-amber-600" />
      case "music":
        return <Music className="h-6 w-6 text-amber-600" />
      case "users":
        return <Users className="h-6 w-6 text-amber-600" />
      default:
        return <Trophy className="h-6 w-6 text-amber-600" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Events Management</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Event
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Event</DialogTitle>
              <DialogDescription>Add a new event to your calendar.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Event title"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    placeholder="April 15, 2025"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    placeholder="7:00 PM"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Event description"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="icon">Icon</Label>
                  <Select value={formData.icon} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select icon" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="trophy">Trophy</SelectItem>
                      <SelectItem value="film">Film</SelectItem>
                      <SelectItem value="music">Music</SelectItem>
                      <SelectItem value="users">Users</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Add Event</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {events.length === 0 ? (
        <div className="text-center py-10 text-muted-foreground">
          No events scheduled. Click "Add Event" to create one.
        </div>
      ) : (
        <div className="grid gap-4">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                <div className="bg-amber-100 p-2 rounded-lg">{getIconComponent(event.icon)}</div>
                <div className="space-y-1">
                  <CardTitle>{event.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>
                      {event.date} at {event.time}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline" size="sm" onClick={() => openEditDialog(event)}>
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button variant="destructive" size="sm" onClick={() => openDeleteDialog(event)}>
                  <Trash className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Event</DialogTitle>
            <DialogDescription>Make changes to the event details.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEditSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-title">Title</Label>
                <Input
                  id="edit-title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Event title"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-date">Date</Label>
                <Input
                  id="edit-date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  placeholder="April 15, 2025"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-time">Time</Label>
                <Input
                  id="edit-time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  placeholder="7:00 PM"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Event description"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-icon">Icon</Label>
                <Select value={formData.icon} onValueChange={handleSelectChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select icon" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trophy">Trophy</SelectItem>
                    <SelectItem value="film">Film</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="users">Users</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Event</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this event? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
