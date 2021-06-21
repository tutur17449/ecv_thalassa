import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Home from "./pages/Home";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import Randos from "./pages/Randos";
import Rando from "./pages/Rando";
import Profil from "./pages/Profil";

export default function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 512px)" });

  return isMobile ? (
    <Router>
      <div id="wrapper">
        <Header />
        <div id="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/randos" component={Randos} />
            <Route path="/rando/:id" component={Rando} />
            <Route path="/profil" component={Profil} />
          </Switch>
        </div>
        <BottomNav />
      </div>
    </Router>
  ) : (
    <div className="not-mobile">
      <p>Application accessible uniquement sur smartphone.</p>
    </div>
  );
}
