import DetailsCard from "./components/details-card.jsx";
import { Header } from "./components/header.jsx";
import MapCard from "./components/map-card.jsx";

function App() {
  return (
    <>
      <Header></Header>

      {/* main content */}
      <div className="max-h-[calc(100vh-4.5rem)] h-[calc(100vh-4.5rem)] overflow-y-auto box-border p-5">
        <div className="grid grid-rows-[80vh_60vh] grid-cols-5 gap-5 h-full">
          <MapCard className="col-span-5 md:col-span-3 h-full" />
          <DetailsCard className="col-span-5 md:col-span-2 h-full" />
        </div>
      </div>
    </>
  );
}

export default App;