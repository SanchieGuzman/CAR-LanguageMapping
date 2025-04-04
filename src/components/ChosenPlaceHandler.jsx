import { useState, useEffect } from "react";

export default function Chosen() {
  const [clickedId, setClickedId] = useState("");

  useEffect(() => {
    const handleSvgClick = (event) => {
      setClickedId(event.detail);
    };

    window.addEventListener("svgClick", handleSvgClick);

    return () => {
      window.removeEventListener("svgClick", handleSvgClick);
    };
  }, []);

  return (
    <div className="absolute right-[6rem] top-[6rem] bg-green-200 w-[15rem] border-[1px] border-[black] rounded-[.5rem] text-[2rem] text-[black] p-[1rem] ">
      <p>{clickedId ? ` ${clickedId}` : "Choose a place"}</p>
    </div>
  );
}
