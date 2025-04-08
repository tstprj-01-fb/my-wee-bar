import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function MenuPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Our Menu</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Check out our selection of drinks and snacks available at My Wee Bar.
        </p>
      </div>

      <Tabs defaultValue="beers" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="beers">Beers</TabsTrigger>
          <TabsTrigger value="spirits">Spirits</TabsTrigger>
          <TabsTrigger value="soft-drinks">Soft Drinks</TabsTrigger>
          <TabsTrigger value="snacks">Snacks</TabsTrigger>
        </TabsList>

        <TabsContent value="beers" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Craft IPA", description: "Hoppy and refreshing local IPA", price: "£4.50" },
              { name: "Lager", description: "Crisp and light premium lager", price: "£4.00" },
              { name: "Stout", description: "Rich and creamy Irish stout", price: "£4.50" },
              { name: "Pale Ale", description: "Balanced and flavorful pale ale", price: "£4.25" },
              { name: "Wheat Beer", description: "Smooth German-style wheat beer", price: "£4.75" },
              { name: "Amber Ale", description: "Malty and caramel notes", price: "£4.50" },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="bg-gray-200 rounded-md h-40 mb-4 flex items-center justify-center">
                    <p className="text-gray-500">Beer Image</p>
                  </div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="font-bold">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="spirits" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Whiskey", description: "Smooth single malt whiskey", price: "£5.50" },
              { name: "Gin", description: "Botanical craft gin", price: "£5.00" },
              { name: "Vodka", description: "Premium triple-distilled vodka", price: "£4.75" },
              { name: "Rum", description: "Dark spiced Caribbean rum", price: "£5.25" },
              { name: "Bourbon", description: "Kentucky straight bourbon", price: "£5.50" },
              { name: "Tequila", description: "100% blue agave tequila", price: "£5.00" },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="bg-gray-200 rounded-md h-40 mb-4 flex items-center justify-center">
                    <p className="text-gray-500">Spirit Image</p>
                  </div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="font-bold">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="soft-drinks" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Cola", description: "Classic cola with ice", price: "£2.00" },
              { name: "Lemonade", description: "Refreshing sparkling lemonade", price: "£2.00" },
              { name: "Ginger Ale", description: "Spicy ginger ale", price: "£2.25" },
              { name: "Tonic Water", description: "Premium tonic water", price: "£2.25" },
              { name: "Fruit Juice", description: "Selection of fruit juices", price: "£2.50" },
              { name: "Sparkling Water", description: "Chilled sparkling water", price: "£1.75" },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="bg-gray-200 rounded-md h-40 mb-4 flex items-center justify-center">
                    <p className="text-gray-500">Drink Image</p>
                  </div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="font-bold">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="snacks" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Crisps", description: "Variety of flavored potato crisps", price: "£1.50" },
              { name: "Nuts", description: "Mixed salted nuts", price: "£2.00" },
              { name: "Nachos", description: "Tortilla chips with dips", price: "£4.50" },
              { name: "Olives", description: "Marinated mixed olives", price: "£3.00" },
              { name: "Pretzels", description: "Salted pretzels", price: "£2.00" },
              { name: "Popcorn", description: "Sweet and salty popcorn", price: "£2.50" },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="bg-gray-200 rounded-md h-40 mb-4 flex items-center justify-center">
                    <p className="text-gray-500">Snack Image</p>
                  </div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="font-bold">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
