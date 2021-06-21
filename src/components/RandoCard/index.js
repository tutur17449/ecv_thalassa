import { Link, useHistory } from "react-router-dom";
import FavorisIcon from "../../assets/icons/favoris.png";
import "./styles.css";

export default function RandoCard({ data }) {
  const history = useHistory();

  const goTo = () => {
    history.push(`/rando/${data.id}`);
  };

  return (
    <div className="rando-card" onClick={goTo}>
      <div className="rando-card-img">
        <img src={`./assets/images/${data.img}`} alt={data.title} />
      </div>
      <div className="rando-card-content">
        <h2>{data.title}</h2>
        <div>
          <p className={`difficulty ${data.difficulty}`}>{data.difficulty}</p>
        </div>
        <div>
          <span>{data.location}</span>
          <span>{data.type}</span>
          <span>{data.duration}</span>
        </div>
        <img src={FavorisIcon} alt="favoris" />
      </div>
    </div>
  );
}
