import { Link } from "react-router-dom";
import SearchIcon from "../../assets/icons/search.png";
import FavorisIcon from "../../assets/icons/favoris.png";
import NavigationIcon from "../../assets/icons/direction.png";
import ProfilIcon from "../../assets/icons/profil.png";
import "./styles.css";

export default function BottomNav() {
  return (
    <div id="bottom-nav">
      <Link to="/search">
        <img src={SearchIcon} alt="search" />
      </Link>
      <Link to="/favoris">
        <img src={FavorisIcon} alt="favoris" />
      </Link>
      <Link to="/">
        <img src={NavigationIcon} alt="navigation" />
      </Link>
      <Link to="/profil">
        <img src={ProfilIcon} alt="profil" />
      </Link>
    </div>
  );
}
