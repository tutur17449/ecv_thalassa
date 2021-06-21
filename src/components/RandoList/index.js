import markerData from "../../data/informations_points.json";
import RandoCard from "../RandoCard";

export default function RandoList() {
  return (
    <div>
      {markerData && markerData.map((i) => <RandoCard key={i.id} data={i} />)}
    </div>
  );
}
