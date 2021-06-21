import RecompenseIcon from "../../assets/icons/recompense.png";
import ChevronIcon from "../../assets/icons/chevron.png";
import "./styles.css";

export default function RecompenseCard() {
  return (
    <div className="recompense-card">
      <img src={RecompenseIcon} alt="recompense" />
      <div>
        <h4>Achievement</h4>
        <p>12 / 20</p>
        <div className="progress">
          <div className="progression"></div>
        </div>
        <img src={ChevronIcon} alt="chevron" />
      </div>
    </div>
  );
}
