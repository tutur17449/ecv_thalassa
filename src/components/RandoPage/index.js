import FavorisIcon from "../../assets/icons/favoris.png";
import RandoPodcast from "../RandoPodcast";
import RandoReportage from "../RandoReportage";
import "./styles.css";

export default function Rando({ data }) {
  return (
    <div id="rando">
      <div className="header">
        <img src={`/assets/images/${data.img}`} alt={data.title} />
      </div>
      <div className="content">
        <h2>{data.title}</h2>
        <div className="content-informations">
          <p className={`difficulty ${data.difficulty}`}>{data.difficulty}</p>
          <span>{data.location}</span>
          <span>{data.type}</span>
          <span>{data.duration}</span>
        </div>
        <img src={FavorisIcon} alt="favoris" />
        <p>{data.content}</p>
        <div className="separator"></div>
        <RandoReportage />
        <div className="separator"></div>
        <RandoPodcast />
      </div>
    </div>
  );
}
