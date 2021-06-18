import MapsIcon from "../../assets/icons/maps.png";
import SearchIcon from "../../assets/icons/search.png";
import SettingsIcon from "../../assets/icons/settings.png";
import "./styles.css";

export default function Header() {
  return (
    <div id="navbar">
      <h1>Bonjour Mathilde,</h1>
      <div className="nav-actions">
        <div className="nav-search">
          <input placeholder="Métiers, animal, ville ..." />
        </div>
        <a href="/">
          <img src={SettingsIcon} alt="settings" />
        </a>
        <a href="/">
          <img src={MapsIcon} alt="map" />
        </a>
      </div>
    </div>
  );
}
