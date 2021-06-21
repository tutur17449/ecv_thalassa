import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import markerData from "../../data/informations_points.json";
import markerIcon from "../../assets/marker.png";
import "leaflet/dist/leaflet.css";
import "./mapWrapper.styles.css";
import RandoCard from "../RandoCard";

// custom icon
const myIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  popupAnchor: [-0, -0],
  iconSize: [32, 32],
});

// test draw line
var pointA = new L.LatLng(47.5333, -2.7667);
var pointB = new L.LatLng(47.658236, -2.760847);
var pointList = [pointA, pointB];

var firstpolyline = new L.Polyline(pointList, {
  color: "blue",
  weight: 3,
  opacity: 0.5,
  smoothFactor: 1,
});

export default function MapWrapper({ position }) {
  const [map, setmap] = useState(null);

  useEffect(() => {
    if (map && position) {
      firstpolyline.addTo(map);
      map.flyTo([position?.lat, position?.lon]);
    }
  }, [map, position]);

  return (
    <>
      <MapContainer
        center={[47.5333, -2.7667]}
        zoom={13}
        scrollWheelZoom={false}
        whenCreated={setmap}
        style={{ width: "100%", height: "100%", zIndex: 1 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
        {markerData &&
          markerData.map((i, id) => (
            <Marker position={i.coords} icon={myIcon} key={id}>
              <Popup>
                <RandoCard data={i} />
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </>
  );
}
