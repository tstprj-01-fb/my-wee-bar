export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} My Wee Bar. All rights reserved.</p>
        <p className="text-sm mt-2">A personal hobby project showcasing my garden bar and man cave.</p>
      </div>
    </footer>
  )
}
