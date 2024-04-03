import { Loader } from "@react-three/drei";
import CanvasContainer from "./CanvasContainer";
import { SectionFour } from "./Sections/SectionFour";
import { SectionOne } from "./Sections/SectionOne";
import { SectionThree } from "./Sections/SectionThree";
import { SectionTwo } from "./Sections/SectionTwo";
import Lenis from "@studio-freight/lenis";

import { useProgress } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { SectionFive } from "./Sections/SectionFive";
import { SectionSix } from "./Sections/SectionSix";
import { SectionSeven } from "./Sections/SectionSeven";
import { SectionEight } from "./Sections/SectionEight";
import { SectionNine } from "./Sections/SectionNine";

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">EXAMPLE</h1>
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

  const lenis = new Lenis({
    duration: 1, // speed
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: "vertical", // vertical, horizontal
    gestureDirection: "vertical", // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 0.5, // sensibility
    smoothTouch: false, // Mobile
    touchMultiplier: 2, // sensibility on mobile
    infinite: false // Infinite scrolling
  });
  
  //get scroll value
  // Here we can do a throttle like
  // in other projects to reduce the callbacks.
  // lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
  //   console.log(direction);
  // });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  
  requestAnimationFrame(raf);

    return (
      <>
            <LoadingScreen />
            <div  className="experience">
                <CanvasContainer />
            </div>

            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            
      </>
    )
}

export default App;