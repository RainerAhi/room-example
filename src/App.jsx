import { Loader } from "@react-three/drei";
import CanvasContainer from "./CanvasContainer";

import { useProgress } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">ROOM</h1>
        <div className="progress__container">
          <div
            className="progress__bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

function App() {

    return (
      <>
        <LoadingScreen />
        
        <div  className="experience">
              <CanvasContainer />
        </div>    
      </>
    )
}

export default App;