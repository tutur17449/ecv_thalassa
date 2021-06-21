import "./styles.css";

export default function TabProfil({ current, updateCurrent }) {
  return (
    <div id="tab-profil">
      <p onClick={() => updateCurrent(0)} className={current === 0 && "active"}>
        Récompense
      </p>
      <p onClick={() => updateCurrent(1)} className={current === 1 && "active"}>
        Randos
      </p>
    </div>
  );
}
