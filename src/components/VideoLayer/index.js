import { Link } from "react-router-dom";
import VideoIcon from "../../assets/icons/video.png";
import "./styles.css";

export default function VideoLayer() {
  const onClick = () => {
    window.open(
      "https://www.france.tv/france-3/thalassa/1289621-de-moorea-aux-iles-marquises-aventures-en-polynesie.html"
    );
  };

  return (
    <div className="video-layer" onClick={onClick}>
      <img src={VideoIcon} alt="video" />
      <div>
        <span>Vidéo reportage - 5mn</span>
        <p>C'est un trésor méconnu, caché au fond de la mer</p>
      </div>
    </div>
  );
}
