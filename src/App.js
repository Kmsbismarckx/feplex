import "./App.css";
import { globalContext } from "./context";
import React, { useState } from "react";
import { useMatchMedia } from "./hooks/useMatchMedia";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import General from "./pages/General";
import Start from "./pages/Start";
import Ban from "./pages/Ban";

function App() {
  const { isMobile, isFooter, isIphoneSE, isHD } = useMatchMedia();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <Router>
        <globalContext.Provider
          value={{
            isMobile,
            isVisible,
            setIsVisible,
            isFooter,
            isIphoneSE,
            isHD,
          }}
        >
          {isVisible && <div className="blur" />}
          <Routes>
            <Route path="/" element={<General />} />
            <Route path="/general" element={<General />} />
            <Route path="/general/:nick" element={<General />}></Route>
            <Route path="/start" element={<Start />} />
            <Route path="/ban" element={<Ban />} />
          </Routes>
        </globalContext.Provider>
      </Router>
    </div>
  );
}

export default App;
