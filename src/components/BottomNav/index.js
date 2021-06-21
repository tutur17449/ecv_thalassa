import { Link } from "react-router-dom";
import SearchIcon from "../../assets/icons/search.png";
import HistoIcon from "../../assets/icons/historique.png";
import FavIcon from "../../assets/icons/fav.png";
import NavigationIcon from "../../assets/icons/direction.png";
import NavIcon from "../../assets/icons/nav.png";
import ProfilIcon from "../../assets/icons/profil.png";
import "./styles.css";

export default function BottomNav() {
  return (
    <div id="bottom-nav">
      <Link to="/search">
        <img src={SearchIcon} alt="search" />
        <span>Explorer</span>
      </Link>
      <Link to="/favoris">
        <img src={FavIcon} alt="favoris" />
        <span>Planifier</span>
      </Link>
      <Link to="/">
        <img src={HistoIcon} alt="navigation" />
        <span>Historique</span>
      </Link>
      <Link to="/profil">
        <img src={ProfilIcon} alt="profil" />
        <span>Profil</span>
      </Link>
      <div className="float-btn">
        <Link to="/">
          <img src={NavIcon} alt="home" />
        </Link>
      </div>
    </div>
  );
}
