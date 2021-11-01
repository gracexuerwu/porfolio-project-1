import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import PortfolioTypeComp from "./components/PortfolioTypeComp";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <HeroComp />
      <PortfolioTypeComp />
    </div>
  );
}

export default App;
