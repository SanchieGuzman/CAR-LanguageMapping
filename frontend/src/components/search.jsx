"use client"

import { Input } from "./ui/input"
import { getIdByMunicipalityName, municipalityIdMapping } from "../lib/getIdByMunicipalityName"
import { Search, MapPin } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useDataStore } from "../store/data-store"
import debounce from "lodash.debounce"
const municipalities = Array.from(municipalityIdMapping.keys()) //  municipality province names

function SearchBar() {
  const [searchResults, setSearchResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const fetchPlaceDataById = useDataStore((state) => state.fetchPlaceDataById)
  const setSelectedLevel = useDataStore((state) => state.setSelectedLevel)

  const wrapperRef = useRef(null)
  const searchRef = useRef(null)

  // search bar onchange
  const debouncedOnChange = debounce((e) => {
    const searchKey = e.target.value.trim().replaceAll("-", "").toLowerCase();

    if (searchKey.length > 0) {
      setIsOpen(true)
      //filter based on input
      const results = municipalities.filter((name) => {
        return name.toLowerCase().includes(searchKey)
      })
      setSearchResults(results)
    } else {
      setIsOpen(false)
    }
  }, 250)

  // clicking a place in search results
  const handleOnClick = (chosenMunicipality) => {
    setSelectedLevel(0) // automatic municipal level when searching
    setIsOpen(false) // close search results
    searchRef.current.value = "" //reset search bar
    setSearchResults([])
    const id = getIdByMunicipalityName(chosenMunicipality)
    fetchPlaceDataById(id, 0)
    setTimeout(() => {
      highlightMunicipality(id)
    })
  }

  function highlightMunicipality(id) {
    //remove the highlight of the current active path
    document.querySelectorAll("svg path.selected").forEach((p) => p.classList.remove("selected"))

    const svgPath = document.getElementById(id)

    svgPath.classList.add("selected")
  }

  // closes the search results div when it loses focus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    // main container
    <div className="w-full relative">
      {/* search bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 z-10" />
        <Input
          ref={searchRef}
          type="search"
          placeholder="Search for municipalities..."
          className="pl-10 pr-4 py-2 bg-white/90 backdrop-blur-sm border-0 ring-1 ring-white/30 focus-visible:ring-2 focus-visible:ring-white/50 shadow-sm"
          onChange={debouncedOnChange}
          onFocus={() => searchResults.length > 0 && setIsOpen(true)}
        />
      </div>

      {/* search results container*/}
      {isOpen && (
        <div
          ref={wrapperRef}
          className="absolute z-10 h-fit max-h-80 w-full bg-white shadow-lg rounded-md border mt-1 overflow-y-auto transition-all duration-200 ease-in-out"
        >
          <ul className="py-1">
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <li
                  key={index}
                  className="px-3 py-2 hover:bg-emerald-50 cursor-pointer flex items-center gap-2 capitalize transition-colors duration-150"
                  onClick={() => handleOnClick(result)}
                >
                  <MapPin className="h-4 w-4 text-emerald-600" />
                  <span>{result.replace(/-(?=[^-]*$)/, ", ")}</span>
                </li>
              ))
            ) : (
              <li className="p-3 text-muted-foreground text-center">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchBar
