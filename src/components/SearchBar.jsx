import { MdSearch } from "react-icons/md";

function SearchBar() {
  return (
    <p className="mt-4 text-lg font-semibold w-[20%] border-black border-[1.5px] bg-[#E9E9E9] rounded-[2rem] flex px-[1rem] py-[.5rem] justify-between items-center">
      <MdSearch className="w-[10%]" />
    </p>
  );
}

export default SearchBar;
