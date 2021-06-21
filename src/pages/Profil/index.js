import { useState } from "react";
import RandoList from "../../components/RandoList";
import TabProfil from "../../components/TabProfile";
import PP from "../../assets/icons/pp.png";
import "./styles.css";
import RecompenseCard from "../../components/RecompenseCard";

export default function Profil() {
  const [current, setCurrent] = useState(0);

  const updateCurrent = (crt) => {
    setCurrent(crt);
  };

  return (
    <div className="profil">
      <div className="profil-header">Profile</div>
      <div className="profil-content">
        <img src={PP} alt="profil" />
        <p>Nom Prénom</p>
        <TabProfil current={current} updateCurrent={updateCurrent} />
        {current === 0 ? (
          <>
            <RecompenseCard />
            <RecompenseCard />
            <RecompenseCard />
            <RecompenseCard />
          </>
        ) : (
          <RandoList />
        )}
      </div>
    </div>
  );
}
