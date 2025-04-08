import SearchBar from "./search";

export function Header() {
  return (
    <div className="w-full bg-green-300">
      <div className="flex flex-col md:flex-row items-center justify-between px-2 sm:px-5 md:px-20 py-4">
        <h1 className="font-bold">Cordillingo</h1>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
}
