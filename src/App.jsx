import { useState } from "react";
import { Loader } from "@react-three/drei";
import CanvasContainer from "./CanvasContainer";

import { useProgress } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { CSSTransition } from 'react-transition-group';

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">ROOM</h1>
        <div className="progress__container">
          <div className="progress__bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [showFullOverlay, setShowFullOverlay] = useState(false);
  const [showOverlayContent, setShowOverlayContent] = useState(false);

  const handleNavigationClick = () => {
    setShowFullOverlay(true); // Show the full overlay
  };

  const handleCloseOverlay = () => {
    setShowFullOverlay(false); // Close the full overlay
  };

  useEffect(() => {
    if (showFullOverlay) {
      // Show the overlay content after a delay of 1000ms (1 second)
      const timeout = setTimeout(() => {
        setShowOverlayContent(true);
      }, 500);

      return () => clearTimeout(timeout);
    } else {
      // Reset the overlay content visibility when hiding the full overlay
      setShowOverlayContent(false);
    }
  }, [showFullOverlay]);

  return (
    <>
      <LoadingScreen />

      {/* Main experience container */}
      <div className="experience">
        <CanvasContainer />
      </div>

      <div className="overlay">
        <div className="overlay-navigation">
          <button className="navigation-text" onClick={handleNavigationClick}>ARCHIVE</button>
          <i className="fa-solid fa-grip-lines"></i>
        </div>
      </div>

      {/* Full overlay with CSS transition */}
      <CSSTransition
        in={showFullOverlay}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <div className="full-overlay">
          {/* Conditionally render overlay content */}
          {showOverlayContent && (
            <div className="overlay-content">
              <div className="overlay-visible" >
                <div className="overlay-navigation-visible">
                  <button className="navigation-text-back" onClick={handleCloseOverlay}>SHOWROOM</button>
                  <i className="fa-solid fa-grip-lines lines-two"></i>
                </div>
              </div>
              <p>This is the full overlay content.</p>
            </div>
          )}
        </div>
      </CSSTransition>
    </>
  );
};

export default App;


