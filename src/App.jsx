import "./App.scss";
import Certificates from "./Components/Certificates/Certificates";
import Communication from "./Components/Communication/Communication";
import Intro from "./Components/Intro/Intro";
import Menu from "./Components/Menu/Menu";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import { useState } from "react";
function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Certificates />
        <Communication />
      </div>
    </div>
  );
}

export default App;
