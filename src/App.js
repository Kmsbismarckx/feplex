import "./App.css";
import { globalContext } from "./context";
import React, { useState } from "react";
import { useMatchMedia } from "./hooks/useMatchMedia";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import General from "./pages/General";
import DonationPC from "./components/DonationPC/DonationPC";
import Start from "./pages/Start";

function App() {
  const { isMobile } = useMatchMedia();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <Router>
        <globalContext.Provider value={{ isMobile, isVisible, setIsVisible }}>
          {isVisible && <div className="blur" />}
          <Routes>
            <Route path="/" element={<General />} />
            <Route path="/general" element={<General />} />
            <Route path="/general/:nick" element={<General />}></Route>
            <Route path="/start" element={<Start />} />
          </Routes>
        </globalContext.Provider>
      </Router>
    </div>
  );
}

export default App;
