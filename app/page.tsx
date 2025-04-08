import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Beer, Calendar, ImageIcon, MessageSquare } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-amber-50 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Wee Bar</h1>
        <p className="text-xl max-w-2xl mx-auto">
          A personal hobby project showcasing my garden bar and man cave where I enjoy playing pool, darts, and relaxing
          with friends.
        </p>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">About My Wee Bar</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              My Wee Bar started as a small project in my garden and has grown into a fully-featured personal space
              where I can unwind and entertain friends and family.
            </p>
            <p className="mb-4">
              The bar features a custom-built counter, a selection of my favorite drinks, a pool table, dart board, and
              comfortable seating for everyone to enjoy.
            </p>
            <p>
              Whether it's hosting pool tournaments, watching sports, or just having a casual drink with friends, My Wee
              Bar is my perfect escape right in my own backyard.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg flex items-center justify-center h-64">
            <p className="text-gray-500">Bar Image Placeholder</p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Explore My Wee Bar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Beer className="h-12 w-12 mx-auto mb-4 text-amber-600" />
                <h3 className="text-lg font-medium mb-2">Our Menu</h3>
                <p className="mb-4 text-gray-600">Check out our selection of drinks and snacks.</p>
                <Button asChild variant="outline">
                  <Link href="/menu">View Menu</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-amber-600" />
                <h3 className="text-lg font-medium mb-2">Events</h3>
                <p className="mb-4 text-gray-600">See upcoming pool nights, dart tournaments and more.</p>
                <Button asChild variant="outline">
                  <Link href="/events">View Events</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <ImageIcon className="h-12 w-12 mx-auto mb-4 text-amber-600" />
                <h3 className="text-lg font-medium mb-2">Gallery</h3>
                <p className="mb-4 text-gray-600">Take a visual tour of My Wee Bar.</p>
                <Button asChild variant="outline">
                  <Link href="/gallery">View Gallery</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-amber-600" />
                <h3 className="text-lg font-medium mb-2">Contact</h3>
                <p className="mb-4 text-gray-600">Get in touch with any questions.</p>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
