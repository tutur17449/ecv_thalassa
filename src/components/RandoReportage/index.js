import "./styles.css";

export default function RandoReportage() {
  return (
    <div className="reportage">
      <div className="reportage-header">
        <span>1</span>
        <h3>Le métier des algues</h3>
      </div>
      <div className="reportage-illustrations">
        <div className="full-width"></div>
        <div className="vignettes">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="reportage-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="reportage-video"></div>
    </div>
  );
}
