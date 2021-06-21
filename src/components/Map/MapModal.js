import PlaceHolder from "../../assets/placeholder.jpg";
import "./mapModal.styles.css";

export default function MapModal() {
  return (
    <div id="map-modal">
      <div className="modal-content">
        <div className="modal-content-left">
          <img src={PlaceHolder} alt="landscape" className="img-ph" />
        </div>
        <div className="modal-content-right">
          <h3>Le florissant business des alges</h3>
          <span className="difficulty">Facile</span>
          <div className="modal-content-right-infos">
            <span>Honfleur</span>
            <span>Boucle</span>
            <span>1h40</span>
          </div>
        </div>
      </div>
    </div>
  );
}
