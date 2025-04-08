import { Header } from "./components/header.jsx";
import MapCard from "./components/map-card.jsx";
import MunicipalityCard from "./components/municipality-card.jsx";

function App() {
  return (
    <>
      <Header></Header>

      {/* main content */}
      <div className="container mx-auto grid grid-cols-5 gap-5 p-5">
        <MapCard className={'col-span-5 md:col-span-3 h-fit'}></MapCard>
        <MunicipalityCard className={'col-span-5 md:col-span-2 h-fit'}></MunicipalityCard>
      </div>
    </>
  );
}

export default App;
