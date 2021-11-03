import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

// import HeroComp from "./components/HeroComp";
// import PortfolioTypeComp from "./components/PortfolioTypeComp";
// import ProjectShowcaseComp from "./components/ProjectShowcaseComp";
// import FooterComp from "./components/FooterComp";

function App() {
  return (
    <Router>
      <body>
        <div className="App">
          <NavbarComp />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </body>
    </Router>
  );
}

export default App;
