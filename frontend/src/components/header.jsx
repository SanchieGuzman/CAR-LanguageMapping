import SearchBar from "./search"
import { MapPin } from "lucide-react"

export function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-emerald-500 to-green-400 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center gap-4 px-4 sm:px-6 py-4">
        <div className="flex items-center gap-2">
          <MapPin className="h-7 w-7 text-white" />
          <h1 className="font-bold text-3xl text-white">Cordillingo</h1>
        </div>
        <div className="w-full md:max-w-sm">
          <SearchBar />
        </div>
      </div>
    </header>
  )
}
