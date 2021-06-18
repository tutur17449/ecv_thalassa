import SearchIcon from "../../assets/icons/search.png";
import FavorisIcon from "../../assets/icons/favoris.png";
import NavigationIcon from "../../assets/icons/direction.png";
import ProfilIcon from "../../assets/icons/profil.png";
import "./styles.css";

export default function BottomNav() {
  return (
    <div id="bottom-nav">
      <a href="/">
        <img src={SearchIcon} alt="search" />
      </a>
      <a href="/">
        <img src={FavorisIcon} alt="favoris" />
      </a>
      <a href="/">
        <img src={NavigationIcon} alt="navigation" />
      </a>
      <a href="/">
        <img src={ProfilIcon} alt="profil" />
      </a>
    </div>
  );
}
