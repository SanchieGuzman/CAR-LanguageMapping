import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div className="w-full h-[4.5rem] bg-[#69FF8A] absolute top-[0] left-[0] flex items-center justify-between px-[2rem]">
      <h1 className="  left-[0] font-bold text-[1.5rem]">Cordillingo</h1>
      <SearchBar></SearchBar>
    </div>
  );
}

export default NavBar;
