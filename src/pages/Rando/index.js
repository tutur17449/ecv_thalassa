import { useParams } from "react-router";
import Rando from "../../components/RandoPage";
import markerData from "../../data/informations_points.json";

export default function RandoPage() {
  const { id } = useParams();
  const data = markerData.find((i) => i.id === parseInt(id));
  return (
    <div>
      <Rando data={data} />
    </div>
  );
}
