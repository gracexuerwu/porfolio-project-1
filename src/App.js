import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <HeroComp />
    </div>
  );
}

export default App;
