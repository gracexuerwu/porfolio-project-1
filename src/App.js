import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import PortfolioTypeComp from "./components/PortfolioTypeComp";
import ProjectShowcaseComp from "./components/ProjectShowcaseComp";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <HeroComp />
      <PortfolioTypeComp />
      <ProjectShowcaseComp />
    </div>
  );
}

export default App;
