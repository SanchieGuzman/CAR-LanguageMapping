import { Input } from "./ui/input"

function SearchBar() {
  return (
    <Input 
      type="text" 
      placeholder="Search a municipality here" 
      className="max-w-md"
    />
  );
}

export default SearchBar;