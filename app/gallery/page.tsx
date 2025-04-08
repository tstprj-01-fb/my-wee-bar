import { Card, CardContent } from "@/components/ui/card"

export default function GalleryPage() {
  const galleryItems = [
    { title: "Bar Counter", description: "Custom-built wooden bar counter" },
    { title: "Pool Table", description: "Full-size pool table with accessories" },
    { title: "Darts Area", description: "Professional dartboard setup" },
    { title: "Outdoor Seating", description: "Comfortable garden seating area" },
    { title: "Drink Selection", description: "Our selection of premium drinks" },
    { title: "Night Ambiance", description: "The bar lit up at night" },
    { title: "TV Corner", description: "Big screen TV for sports and movies" },
    { title: "Garden View", description: "View of the bar from the garden" },
    { title: "Interior Details", description: "Custom decorations and memorabilia" },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Gallery</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Take a visual tour of My Wee Bar and see what makes it special.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <p className="text-gray-500">Image Placeholder</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
