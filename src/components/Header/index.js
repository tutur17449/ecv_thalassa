import MapsIcon from "../../assets/icons/maps.png";
import ListIcon from "../../assets/icons/list.png";
import SettingsIcon from "../../assets/icons/settings.png";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";

export default function Header({ switchView, isMap }) {
  const location = useLocation();

  return (
    <div id="navbar">
      <h1>Bonjour Mathilde,</h1>
      <div className="nav-actions">
        <div className="nav-search">
          <input placeholder="Métiers, animal, ville ..." />
        </div>
        <Link to="/">
          <img src={SettingsIcon} alt="settings" />
        </Link>
        {location.pathname === "/randos" ? (
          <Link to="/">
            <img src={MapsIcon} alt="map" />
          </Link>
        ) : (
          <Link to="/randos">
            <img src={ListIcon} alt="list" />
          </Link>
        )}
      </div>
    </div>
  );
}
