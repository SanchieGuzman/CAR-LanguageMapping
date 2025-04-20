import SearchBar from "./search";

export function Header() {
  return (
    <div className="w-full bg-green-300">
      <div className="flex flex-col md:flex-row md:justify-between gap-2 items-center px-2 sm:px-5 md:px-20 py-2">
        <h1 className="font-bold text-3xl">Cordillingo</h1>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
}
