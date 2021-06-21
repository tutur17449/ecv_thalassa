import { useEffect, useState } from "react";
import MapWrapper from "../../components/Map/MapWrapper";
import "./styles.css";

export default function Home() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          lat: position?.coords.latitude,
          lon: position?.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <>
      <MapWrapper position={position} />
    </>
  );
}
