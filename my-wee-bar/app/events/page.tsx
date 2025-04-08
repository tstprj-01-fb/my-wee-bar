import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Trophy, Film, Music, Users } from "lucide-react"

export default function EventsPage() {
  const events = [
    {
      title: "Pool Tournament",
      date: "April 15, 2025",
      time: "7:00 PM",
      description: "Join us for a friendly pool tournament. Prizes for the winner and runner-up!",
      icon: Trophy,
    },
    {
      title: "Darts Competition",
      date: "April 22, 2025",
      time: "7:30 PM",
      description: "Test your skills in our monthly darts competition. All skill levels welcome!",
      icon: Trophy,
    },
    {
      title: "Movie Night",
      date: "April 29, 2025",
      time: "8:00 PM",
      description: "Outdoor movie night featuring classic films on our garden projector. Bring a blanket!",
      icon: Film,
    },
    {
      title: "Live Music Evening",
      date: "May 6, 2025",
      time: "7:00 PM",
      description: "Local acoustic performer playing relaxing tunes for a chilled evening.",
      icon: Music,
    },
    {
      title: "Games Night",
      date: "May 13, 2025",
      time: "7:00 PM",
      description: "Board games, card games, and more. A fun night of friendly competition!",
      icon: Users,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Upcoming Events</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Check out our calendar of fun events at My Wee Bar. All events are casual and friends are always welcome!
        </p>
      </div>

      <div className="grid gap-6">
        {events.map((event, index) => {
          const Icon = event.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <Icon className="h-6 w-6 text-amber-600" />
                </div>
                <div className="space-y-1">
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {event.date} at {event.time}
                      </span>
                    </div>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
