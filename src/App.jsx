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
  const { progress, active } = useProgress();
  const [showFullOverlay, setShowFullOverlay] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleNavigationClick = () => {
    setShowFullOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowFullOverlay(false);
    setSelectedProject(null); // Reset selected project
  };

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName);
  };

  const handleCloseProjectOverlay = () => {
    setSelectedProject(null); // Reset selected project
  };

  const projectDetails = {
    "project-one": {
      title: "DPARTMENT IN-HOUSE BRAND",
      description: "In progress",
      additionalInfo: "This project involves developing an in-house brand for Dpartment, currently in progress.",
    },
    "project-two": {
      title: "NEUENDORF HOUSE SOCIAL MEDIA ADVERTISEMENT",
      description: "On-going partnership",
      additionalInfo: "Ongoing partnership with Neuendorf House for social media advertising.",
    },
    "project-three": {
      title: "SUSU SOCIAL MEDIA ADVERTISEMENT",
      description: "On-going partnership",
      additionalInfo: "Collaborative work with SUSU on social media advertising campaigns.",
    },
    "project-four": {
      title: "HIGHSNOBIETY PRODUCT DESIGN",
      description: "In progress",
      additionalInfo: "Design project with Highsnobiety, currently in progress.",
    },
    "project-five": {
      title: "RESIDENTIAL RENOVATION",
      description: "In progress",
      additionalInfo: "Renovation project for a residential property, currently underway.",
    },
    "project-six": {
      title: "KINK BAR COMMERCIAL RENOVATION",
      description: "In progress",
      additionalInfo: "Commercial renovation project for Kink Bar, currently in progress.",
    },
    "project-seven": {
      title: "MIAMI ART BASEL EXHIBITION",
      description: "In progress",
      additionalInfo: "Preparation for an exhibition at Miami Art Basel, work in progress.",
    },
    "project-eight": {
      title: "BERLINIONAIRE PATTERN MAKING",
      description: "In progress",
      additionalInfo: "Pattern-making project in collaboration with Berlinionaire, ongoing.",
    },
  };

  const projectKeys = Object.keys(projectDetails);
  const topProjects = projectKeys.slice(0, 4); // First four projects
  const bottomProjects = projectKeys.slice(4, 8); // Last four projects

  return (
    <>
      <LoadingScreen />

      {/* Main experience container */}
      <div className="experience">
        <CanvasContainer />
      </div>

      {/* Overlay button to trigger full overlay */}
      <div className="overlay">
        <div className="overlay-navigation">
          <button className="navigation-text" onClick={handleNavigationClick}>
            ARCHIVE
          </button>
          <div className="navigation-icon">
            <div className="icon-top" />
            <div className="icon-bottom" />
          </div>
        </div>
      </div>

      {/* Full overlay with CSS transition */}
      <CSSTransition
        in={showFullOverlay}
        timeout={1000}
        classNames="fade"
        unmountOnExit
      >
        <div className={`full-overlay ${showFullOverlay ? "active" : ""}`}>
          {/* Content of the full-overlay */}
          <div className={`overlay-content ${showFullOverlay ? "active" : ""}`}>
            <div className="overlay-navigation-visible">
              <button className="navigation-text-back" onClick={handleCloseOverlay}>
                SHOWROOM
              </button>
              <div className="navigation-icon">
                <div className="icon-top black" />
                <div className="icon-bottom black" />
              </div>
            </div>
            <div className="containers">
              {/* Render top projects */}
              <div className="row">
                {topProjects.map((projectName) => (
                  <div
                    key={projectName}
                    className={`container ${projectName}`}
                    onClick={() => handleProjectClick(projectName)}
                  >
                    <div className="container-one-image" />
                    <h1 className="container-heading">{projectDetails[projectName].title}</h1>
                    <p className="container-description">{projectDetails[projectName].description}</p>
                  </div>
                ))}
              </div>

              {/* Render bottom projects */}
              <div className="row">
                {bottomProjects.map((projectName) => (
                  <div
                    key={projectName}
                    className={`container ${projectName}`}
                    onClick={() => handleProjectClick(projectName)}
                  >
                    <div className="container-one-image" />
                    <h1 className="container-heading">{projectDetails[projectName].title}</h1>
                    <p className="container-description">{projectDetails[projectName].description}</p>
                  </div>
                ))}
              </div>

            {/* Render selected project overlay if a project is clicked */}
            {selectedProject && (
              <div className={`${selectedProject}-overlay`}>
                <button className="close-button" onClick={handleCloseProjectOverlay}>
                  <i class="fa-solid fa-xmark"></i>
                </button>
                <h2>{projectDetails[selectedProject].title}</h2>
                <p>{projectDetails[selectedProject].additionalInfo}</p>
              </div>
            )}

            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default App;



