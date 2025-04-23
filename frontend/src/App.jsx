import DetailsCard from "./components/details-card.jsx";
import { Header } from "./components/header.jsx";
import MapCard from "./components/map-card.jsx";

function App() {
  return (
    <>
      <Header></Header>

      {/* main content */}
      <div className="container mx-auto md:h-[calc(100vh-4.5rem)] overflow-y-auto p-4">
        <div className="grid grid-rows-[100vh_90vh] md:grid-rows-none grid-cols-5 gap-5 h-full">
          <MapCard className="col-span-5 md:col-span-3 h-full" />
          <DetailsCard className="col-span-5 md:col-span-2 h-full" />
        </div>
      </div>
    </>
  );
}

export default App;