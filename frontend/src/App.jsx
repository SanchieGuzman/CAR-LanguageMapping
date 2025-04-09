import { Header } from "./components/header.jsx";
import MapCard from "./components/map-card.jsx";
import MunicipalityCard from "./components/municipality-card.jsx";

function App() {
  return (
    <>
      <Header></Header>

      {/* main content */}
      <div className="h-[calc(100vh-4.5rem)] box-border p-5">
        <div className="grid grid-cols-5 gap-5 h-full">
          <MapCard className="col-span-5 md:col-span-3 h-full" />
          <MunicipalityCard className="col-span-5 md:col-span-2 h-fit" />
        </div>
      </div>
    </>
  );
}

export default App;
