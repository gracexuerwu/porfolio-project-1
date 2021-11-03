import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import PortfolioTypeComp from "./components/PortfolioTypeComp";
import ProjectShowcaseComp from "./components/ProjectShowcaseComp";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <HeroComp />
      <PortfolioTypeComp />
      <ProjectShowcaseComp />
      <FooterComp />
    </div>
  );
}

export default App;
