import Link from "next/link"
import { Beer } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-amber-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Beer className="h-8 w-8 mr-2" />
            <Link href="/" className="text-2xl font-bold">
              My Wee Bar
            </Link>
          </div>
          <nav className="flex space-x-6">
            <Link href="/" className="hover:text-amber-200 transition-colors">
              Home
            </Link>
            <Link href="/menu" className="hover:text-amber-200 transition-colors">
              Menu
            </Link>
            <Link href="/events" className="hover:text-amber-200 transition-colors">
              Events
            </Link>
            <Link href="/gallery" className="hover:text-amber-200 transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-amber-200 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
