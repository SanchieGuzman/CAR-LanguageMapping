import { useState } from "react";

export default function ButtonClickExample() {
  const [clickedButtonId, setClickedButtonId] = useState("");

  const handleClick = (id) => {
    setClickedButtonId(id);
  };

  return (
    <div className="absolute flex flex-col items-center gap-4 p-4 right-[0]">
      <button
        id="btn-1"
        onClick={() => handleClick("btn-1")}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Button 1
      </button>
      <button
        id="btn-2"
        onClick={() => handleClick("btn-2")}
        className="px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Button 2
      </button>
      <p className="text-lg font-semibold">
        {clickedButtonId && `Clicked Button ID: ${clickedButtonId}`}
      </p>
    </div>
  );
}
