import { Weather } from "./components";
import { useGeoLocation } from "hooks/useGeoLocation";

import "./App.scss";

function App() {
  const location = useGeoLocation()

  return (
    <div className="App">
      {location !== null && <Weather lat={location.lat} lon={location.lon}/>}
    </div>
  );
}

export default App;
