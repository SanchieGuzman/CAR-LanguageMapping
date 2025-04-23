"use client"

import { useState, useEffect } from "react"
import { Card, CardDescription, CardHeader, CardContent, CardTitle } from "./ui/card"
import { useDataStore } from "../store/data-store"
import { Badge } from "./ui/badge"
import { Table, TableBody, TableRow, TableCell, TableHeader, TableHead } from "./ui/table"
import { MapPin, Map, ArrowRight, Info, Languages, BarChart } from "lucide-react"
import { Separator } from "./ui/separator"

export default function DetailsCard({ className }) {
  const placeData = useDataStore((state) => state.data)
  const selectedLevel = useDataStore((state) => state.selectedLevel)

  const colors = ["#FF5050", "#88ff79", "#FFC923", "#80C6FF", "#CEB4FB", "#FBB4EC"]

  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    if (placeData?.place_image?.data) {
      const byteArray = new Uint8Array(placeData.place_image.data)
      const blob = new Blob([byteArray], { type: "image/*" })
      const url = URL.createObjectURL(blob)
      setImageUrl(url)
      return () => URL.revokeObjectURL(url)
    } else {
      setImageUrl(null)
    }
  }, [placeData])

  if (!placeData) {
    return (
      <Card
        className={`${className} relative py-10 flex flex-col items-center justify-center h-fit border-dashed border-2 bg-muted/30`}
      >
        <div className="flex flex-col items-center gap-3 p-6 text-center max-w-md">
          {selectedLevel === 0 ? (
            <>
              <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                <MapPin className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium">No Municipality Selected</h3>
              <p className="text-muted-foreground">
                Please select a municipality on the map or use the search bar above to view detailed information.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <span>Click on map</span>
                <ArrowRight className="h-3 w-3" />
                <span>View municipality data</span>
              </div>
            </>
          ) : (
            <>
              <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                <Map className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium">No Province Selected</h3>
              <p className="text-muted-foreground">
                Please select a province on the map to view aggregated provincial data and statistics.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <span>Click on map</span>
                <ArrowRight className="h-3 w-3" />
                <span>View province data</span>
              </div>
            </>
          )}
        </div>
      </Card>
    )
  }

  return (
    <Card className={`${className} h-full overflow-hidden flex flex-col pt-0 gap-0`}>
      <div className="relative">
        {imageUrl && (
          <div className="w-full h-[30vh] overflow-hidden">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={`Image of ${placeData.place_name}`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h2 className="text-xl font-bold drop-shadow-md">{placeData.place_name}</h2>
              <p className="text-sm text-white/90">{selectedLevel === 0 ? "Municipality" : "Province"}</p>
            </div>
          </div>
        )}
      </div>

      <div className="w-full overflow-y-auto">
        <CardHeader className="pb-2 pt-4">
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="text-base">About</CardTitle>
          </div>
          <CardDescription className="text-sm mt-2 leading-6">{placeData.place_description}</CardDescription>
        </CardHeader>

        <Separator />

        <CardContent className="pt-4">
          <div className="flex items-center gap-2 mb-3">
            <Languages className="h-4 w-4 text-muted-foreground" />
            <h3 className="text-base font-medium">Leading Languages/Dialects</h3>
          </div>

          <p className="text-sm text-muted-foreground mb-3">
            Five leading languages/dialects generally spoken at home in {placeData.place_name}:
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Color</TableHead>
                <TableHead>Language</TableHead>
                <TableHead className="text-right">Percentage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {placeData.languages.map((lang, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div
                      className="w-4 h-4 rounded-sm border"
                      style={{ backgroundColor: `${colors[index]}90`, borderColor: `${colors[index]}` }}
                    ></div>
                  </TableCell>
                  <TableCell className="font-medium">{lang.language_name}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${lang.percent}%`,
                            backgroundColor: colors[index],
                          }}
                        ></div>
                      </div>
                      <span>{lang.percent}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {placeData.other_langauges && placeData.other_langauges.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <BarChart className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-base font-medium">Other Languages/Dialects</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {placeData.other_langauges.map((language, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="py-1 px-3 border-2 whitespace-normal"
                    style={{
                      borderColor: colors[index % colors.length],
                      backgroundColor: `${colors[index % colors.length]}20`,
                    }}
                  >
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  )
}
