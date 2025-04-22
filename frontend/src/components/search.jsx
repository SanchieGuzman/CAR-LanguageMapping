"use client";

import { Input } from "./ui/input";
import {
  getIdByMunicipalityName,
  municipalityIdMapping,
} from "../lib/getIdByMunicipalityName";
import { Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useDataStore } from "../store/data-store";
import debounce from "lodash.debounce";
const municipalities = Array.from(municipalityIdMapping.keys()); // municipality province names

function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchPlaceDataById = useDataStore((state) => state.fetchPlaceDataById);
  const setSelectedLevel = useDataStore((state) => state.setSelectedLevel);

  const wrapperRef = useRef(null);
  const searchRef = useRef(null);

  // search bar onchange
  const debouncedOnChange = debounce((e) => {
    const searchKey = e.target.value.trim().replaceAll("-", "");

    if (searchKey.length > 0) {
      setIsOpen(true);
      //filter based on input
      const results = municipalities.filter((name) => {
        return name.toLowerCase().includes(searchKey);
      });
      setSearchResults(results);
    } else {
      setIsOpen(false);
    }
  }, 250);

  // clicking a place in search results
  const handleOnClick = (chosenMunicipality) => {
    setSelectedLevel(0); // automatic municipal level when searching
    setIsOpen(false); // close search results
    searchRef.current.value = ""; //reset search bar
    setSearchResults([]);
    const id = getIdByMunicipalityName(chosenMunicipality);
    fetchPlaceDataById(id, 0);
    setTimeout(() => {
      highlightMunicipality(id);
    });
  };

  function highlightMunicipality(id) {
    //remove the highlight of the current active path
    document
      .querySelectorAll("svg path.selected")
      .forEach((p) => p.classList.remove("selected"));

    const svgPath = document.getElementById(id);

    svgPath.classList.add("selected");
  }

  // closes the search results div when it loses focus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    // main container
    <div className="max-w-xl w-full md:w-[50%] relative">
      {/* search bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          ref={searchRef}
          type="search"
          placeholder="Search here..."
          className="pl-10 pr-4 py-2"
          onChange={debouncedOnChange}
          onFocus={() => searchResults.length > 0 && setIsOpen(true)}
        />
      </div>

      {/* search results container*/}
      {isOpen && (
        <div
          ref={wrapperRef}
          className="absolute z-10 h-fit max-h-82 w-full bg-primary-foreground shadow-lg rounded-b-lg border-2 mt-1 overflow-y-auto"
        >
          <ul>
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <li
                  key={index}
                  className="min-h-8 max-h-8 px-2 py-2 hover:bg-muted cursor-pointer flex items-center gap-2 capitalize"
                  onClick={() => handleOnClick(result)}
                >
                  <Search className="h-4"></Search>
                  {result.replace(/-(?=[^-]*$)/, ", ")}
                </li>
              ))
            ) : (
              <li className="p-2 text-muted-foreground">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
