import { useState } from "react";
import NavBar from "./components/Navbar.jsx";
import ChosenPlaceHandler from "./components/ChosenPlaceHandler.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <ChosenPlaceHandler></ChosenPlaceHandler>
    </>
  );
}

export default App;
