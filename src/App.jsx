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
        <h1 className="loading-screen__title">siemensstr.30 is a creative agency with a focus on gen-z design</h1>
        <div className="progress__container">
          <div className="progress__bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

function App() {

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
      images: ["/projectimage.png", "/projectimagetwo.png", "/projectimage.png"],
      projectsDescription: " in progressDiassim expliti orerfer erchil et ad utas modia volo con es verunti ditiis modipsus consequ isciis ape non rem nobisitas arum quos magnate ium rehenietus essit, nectur? Fugia qui custrum quos ex ese nus, sam eum utemporit, ut faccus, odit moluptaspic te pra comni doluptatur as quat fuga. As ea num aut latur, cum autati ipitiasped mintus dipsant esequi od mil est pro temo inient moloribearum hil ipsusam quidelit, volectem imeture mporeni enimos quid eium quossum ipiendi im estius, nis saperro volenim inctat quo es dolescia des rem doluptin rehent est, odi volorectis aut quia dolesci piendebis eum etur re consero moditatus aborestium faccum fugita int, corae. Nem facerum quibus si odi aligenia dustrum endi dolupic aborepr erchit et modit, conecupit, aperitat.",
      projectsDescriptionTwo: "Ficid evere nim ent ressequati odis nos di de nim quatatus dis ne nim evelesequi que pa nes dolupicit officienis doluptaquunt hariatemos as quae pratenihil maiorrumqui dolo quatis eatur?Pis am et ommod quia nobitatempos autempe runtur, simi, volupta testrum et volorempos estisitatur antet alis eaquat.Evenis consequ iscide nimi, quossit quisi que optaquamus diorrov idipieni optibus.Id mossim voluptatum iundebitatur ad utenihi liquasp edictur?Osa plant. Idesciliqui dis doloreictur? Quisciist doloris imoluptaecto molorum reic torepera non remquos dolore atet aut il impos audi conecepro quis evelenis con coreic tem. Ut"
    },
    "project-two": {
      title: "NEUENDORF HOUSE SOCIAL MEDIA ADVERTISEMENT",
      description: "On-going partnership",
      additionalInfo: "Ongoing partnership with Neuendorf House for social media advertising.",
      images: ["/projectimage.png", "/projectimagetwo.png", "/projectimage.png"],
      projectsDescription: " in progressDiassim expliti orerfer erchil et ad utas modia volo con es verunti ditiis modipsus consequ isciis ape non rem nobisitas arum quos magnate ium rehenietus essit, nectur? Fugia qui custrum quos ex ese nus, sam eum utemporit, ut faccus, odit moluptaspic te pra comni doluptatur as quat fuga. As ea num aut latur, cum autati ipitiasped mintus dipsant esequi od mil est pro temo inient moloribearum hil ipsusam quidelit, volectem imeture mporeni enimos quid eium quossum ipiendi im estius, nis saperro volenim inctat quo es dolescia des rem doluptin rehent est, odi volorectis aut quia dolesci piendebis eum etur re consero moditatus aborestium faccum fugita int, corae. Nem facerum quibus si odi aligenia dustrum endi dolupic aborepr erchit et modit, conecupit, aperitat.",
      projectsDescriptionTwo: "Ficid evere nim ent ressequati odis nos di de nim quatatus dis ne nim evelesequi que pa nes dolupicit officienis doluptaquunt hariatemos as quae pratenihil maiorrumqui dolo quatis eatur?Pis am et ommod quia nobitatempos autempe runtur, simi, volupta testrum et volorempos estisitatur antet alis eaquat.Evenis consequ iscide nimi, quossit quisi que optaquamus diorrov idipieni optibus.Id mossim voluptatum iundebitatur ad utenihi liquasp edictur?Osa plant. Idesciliqui dis doloreictur? Quisciist doloris imoluptaecto molorum reic torepera non remquos dolore atet aut il impos audi conecepro quis evelenis con coreic tem. Ut"
    },
    "project-three": {
      title: "SUSU SOCIAL MEDIA ADVERTISEMENT",
      description: "On-going partnership",
      additionalInfo: "Collaborative work with SUSU on social media advertising campaigns.",
      images: ["/projectimage.png", "/projectimagetwo.png", "/projectimage.png"],
      projectsDescription: " in progressDiassim expliti orerfer erchil et ad utas modia volo con es verunti ditiis modipsus consequ isciis ape non rem nobisitas arum quos magnate ium rehenietus essit, nectur? Fugia qui custrum quos ex ese nus, sam eum utemporit, ut faccus, odit moluptaspic te pra comni doluptatur as quat fuga. As ea num aut latur, cum autati ipitiasped mintus dipsant esequi od mil est pro temo inient moloribearum hil ipsusam quidelit, volectem imeture mporeni enimos quid eium quossum ipiendi im estius, nis saperro volenim inctat quo es dolescia des rem doluptin rehent est, odi volorectis aut quia dolesci piendebis eum etur re consero moditatus aborestium faccum fugita int, corae. Nem facerum quibus si odi aligenia dustrum endi dolupic aborepr erchit et modit, conecupit, aperitat.",
      projectsDescriptionTwo: "Ficid evere nim ent ressequati odis nos di de nim quatatus dis ne nim evelesequi que pa nes dolupicit officienis doluptaquunt hariatemos as quae pratenihil maiorrumqui dolo quatis eatur?Pis am et ommod quia nobitatempos autempe runtur, simi, volupta testrum et volorempos estisitatur antet alis eaquat.Evenis consequ iscide nimi, quossit quisi que optaquamus diorrov idipieni optibus.Id mossim voluptatum iundebitatur ad utenihi liquasp edictur?Osa plant. Idesciliqui dis doloreictur? Quisciist doloris imoluptaecto molorum reic torepera non remquos dolore atet aut il impos audi conecepro quis evelenis con coreic tem. Ut"
    },
    "project-four": {
      title: "HIGHSNOBIETY PRODUCT DESIGN",
      description: "In progress",
      additionalInfo: "Design project with Highsnobiety, currently in progress.",
      images: ["/projectimage.png", "/projectimagetwo.png", "/projectimage.png"],
      projectsDescription: " in progressDiassim expliti orerfer erchil et ad utas modia volo con es verunti ditiis modipsus consequ isciis ape non rem nobisitas arum quos magnate ium rehenietus essit, nectur? Fugia qui custrum quos ex ese nus, sam eum utemporit, ut faccus, odit moluptaspic te pra comni doluptatur as quat fuga. As ea num aut latur, cum autati ipitiasped mintus dipsant esequi od mil est pro temo inient moloribearum hil ipsusam quidelit, volectem imeture mporeni enimos quid eium quossum ipiendi im estius, nis saperro volenim inctat quo es dolescia des rem doluptin rehent est, odi volorectis aut quia dolesci piendebis eum etur re consero moditatus aborestium faccum fugita int, corae. Nem facerum quibus si odi aligenia dustrum endi dolupic aborepr erchit et modit, conecupit, aperitat.",
      projectsDescriptionTwo: "Ficid evere nim ent ressequati odis nos di de nim quatatus dis ne nim evelesequi que pa nes dolupicit officienis doluptaquunt hariatemos as quae pratenihil maiorrumqui dolo quatis eatur?Pis am et ommod quia nobitatempos autempe runtur, simi, volupta testrum et volorempos estisitatur antet alis eaquat.Evenis consequ iscide nimi, quossit quisi que optaquamus diorrov idipieni optibus.Id mossim voluptatum iundebitatur ad utenihi liquasp edictur?Osa plant. Idesciliqui dis doloreictur? Quisciist doloris imoluptaecto molorum reic torepera non remquos dolore atet aut il impos audi conecepro quis evelenis con coreic tem. Ut"
    },
    "project-five": {
      title: "RESIDENTIAL RENOVATION",
      description: "In progress",
      additionalInfo: "Renovation project for a residential property, currently underway.",
      images: ["/projectimage.png", "/projectimagetwo.png", "/projectimage.png"],
      projectsDescription: " in progressDiassim expliti orerfer erchil et ad utas modia volo con es verunti ditiis modipsus consequ isciis ape non rem nobisitas arum quos magnate ium rehenietus essit, nectur? Fugia qui custrum quos ex ese nus, sam eum utemporit, ut faccus, odit moluptaspic te pra comni doluptatur as quat fuga. As ea num aut latur, cum autati ipitiasped mintus dipsant esequi od mil est pro temo inient moloribearum hil ipsusam quidelit, volectem imeture mporeni enimos quid eium quossum ipiendi im estius, nis saperro volenim inctat quo es dolescia des rem doluptin rehent est, odi volorectis aut quia dolesci piendebis eum etur re consero moditatus aborestium faccum fugita int, corae. Nem facerum quibus si odi aligenia dustrum endi dolupic aborepr erchit et modit, conecupit, aperitat.",
      projectsDescriptionTwo: "Ficid evere nim ent ressequati odis nos di de nim quatatus dis ne nim evelesequi que pa nes dolupicit officienis doluptaquunt hariatemos as quae pratenihil maiorrumqui dolo quatis eatur?Pis am et ommod quia nobitatempos autempe runtur, simi, volupta testrum et volorempos estisitatur antet alis eaquat.Evenis consequ iscide nimi, quossit quisi que optaquamus diorrov idipieni optibus.Id mossim voluptatum iundebitatur ad utenihi liquasp edictur?Osa plant. Idesciliqui dis doloreictur? Quisciist doloris imoluptaecto molorum reic torepera non remquos dolore atet aut il impos audi conecepro quis evelenis con coreic tem. Ut"
    },
    "project-six": {
      title: "KINK BAR COMMERCIAL RENOVATION",
      description: "In progress",
      additionalInfo: "Commercial renovation project for Kink Bar, currently in progress.",
      images: ["/projectimage.png", "/projectimagetwo.png", "/projectimage.png"],
      projectsDescription: " in progressDiassim expliti orerfer erchil et ad utas modia volo con es verunti ditiis modipsus consequ isciis ape non rem nobisitas arum quos magnate ium rehenietus essit, nectur? Fugia qui custrum quos ex ese nus, sam eum utemporit, ut faccus, odit moluptaspic te pra comni doluptatur as quat fuga. As ea num aut latur, cum autati ipitiasped mintus dipsant esequi od mil est pro temo inient moloribearum hil ipsusam quidelit, volectem imeture mporeni enimos quid eium quossum ipiendi im estius, nis saperro volenim inctat quo es dolescia des rem doluptin rehent est, odi volorectis aut quia dolesci piendebis eum etur re consero moditatus aborestium faccum fugita int, corae. Nem facerum quibus si odi aligenia dustrum endi dolupic aborepr erchit et modit, conecupit, aperitat.",
      projectsDescriptionTwo: "Ficid evere nim ent ressequati odis nos di de nim quatatus dis ne nim evelesequi que pa nes dolupicit officienis doluptaquunt hariatemos as quae pratenihil maiorrumqui dolo quatis eatur?Pis am et ommod quia nobitatempos autempe runtur, simi, volupta testrum et volorempos estisitatur antet alis eaquat.Evenis consequ iscide nimi, quossit quisi que optaquamus diorrov idipieni optibus.Id mossim voluptatum iundebitatur ad utenihi liquasp edictur?Osa plant. Idesciliqui dis doloreictur? Quisciist doloris imoluptaecto molorum reic torepera non remquos dolore atet aut il impos audi conecepro quis evelenis con coreic tem. Ut"
    },
    "project-seven": {
      title: "MIAMI ART BASEL EXHIBITION",
      description: "In progress",
      additionalInfo: "Preparation for an exhibition at Miami Art Basel, work in progress.",
      images: ["/projectimage.png", "/projectimagetwo.png", "/projectimage.png"],
      projectsDescription: " in progressDiassim expliti orerfer erchil et ad utas modia volo con es verunti ditiis modipsus consequ isciis ape non rem nobisitas arum quos magnate ium rehenietus essit, nectur? Fugia qui custrum quos ex ese nus, sam eum utemporit, ut faccus, odit moluptaspic te pra comni doluptatur as quat fuga. As ea num aut latur, cum autati ipitiasped mintus dipsant esequi od mil est pro temo inient moloribearum hil ipsusam quidelit, volectem imeture mporeni enimos quid eium quossum ipiendi im estius, nis saperro volenim inctat quo es dolescia des rem doluptin rehent est, odi volorectis aut quia dolesci piendebis eum etur re consero moditatus aborestium faccum fugita int, corae. Nem facerum quibus si odi aligenia dustrum endi dolupic aborepr erchit et modit, conecupit, aperitat.",
      projectsDescriptionTwo: "Ficid evere nim ent ressequati odis nos di de nim quatatus dis ne nim evelesequi que pa nes dolupicit officienis doluptaquunt hariatemos as quae pratenihil maiorrumqui dolo quatis eatur?Pis am et ommod quia nobitatempos autempe runtur, simi, volupta testrum et volorempos estisitatur antet alis eaquat.Evenis consequ iscide nimi, quossit quisi que optaquamus diorrov idipieni optibus.Id mossim voluptatum iundebitatur ad utenihi liquasp edictur?Osa plant. Idesciliqui dis doloreictur? Quisciist doloris imoluptaecto molorum reic torepera non remquos dolore atet aut il impos audi conecepro quis evelenis con coreic tem. Ut"
    },
    "project-eight": {
      title: "BERLINIONAIRE PATTERN MAKING",
      description: "In progress",
      additionalInfo: "Pattern-making project in collaboration with Berlinionaire, ongoing.",
      images: ["/projectimage.png", "/projectimagetwo.png", "/projectimage.png"],
      projectsDescription: " in progressDiassim expliti orerfer erchil et ad utas modia volo con es verunti ditiis modipsus consequ isciis ape non rem nobisitas arum quos magnate ium rehenietus essit, nectur? Fugia qui custrum quos ex ese nus, sam eum utemporit, ut faccus, odit moluptaspic te pra comni doluptatur as quat fuga. As ea num aut latur, cum autati ipitiasped mintus dipsant esequi od mil est pro temo inient moloribearum hil ipsusam quidelit, volectem imeture mporeni enimos quid eium quossum ipiendi im estius, nis saperro volenim inctat quo es dolescia des rem doluptin rehent est, odi volorectis aut quia dolesci piendebis eum etur re consero moditatus aborestium faccum fugita int, corae. Nem facerum quibus si odi aligenia dustrum endi dolupic aborepr erchit et modit, conecupit, aperitat.",
      projectsDescriptionTwo: "Ficid evere nim ent ressequati odis nos di de nim quatatus dis ne nim evelesequi que pa nes dolupicit officienis doluptaquunt hariatemos as quae pratenihil maiorrumqui dolo quatis eatur?Pis am et ommod quia nobitatempos autempe runtur, simi, volupta testrum et volorempos estisitatur antet alis eaquat.Evenis consequ iscide nimi, quossit quisi que optaquamus diorrov idipieni optibus.Id mossim voluptatum iundebitatur ad utenihi liquasp edictur?Osa plant. Idesciliqui dis doloreictur? Quisciist doloris imoluptaecto molorum reic torepera non remquos dolore atet aut il impos audi conecepro quis evelenis con coreic tem. Ut"
    },
    "project-nine": {
      title: "BERLINIONAIRE PATTERN MAKING",
      description: "In progress",
      additionalInfo: "Pattern-making project in collaboration with Berlinionaire, ongoing.",
      images: ["/projectimage.png", "/projectimagetwo.png", "/projectimage.png"],
      projectsDescription: " in progressDiassim expliti orerfer erchil et ad utas modia volo con es verunti ditiis modipsus consequ isciis ape non rem nobisitas arum quos magnate ium rehenietus essit, nectur? Fugia qui custrum quos ex ese nus, sam eum utemporit, ut faccus, odit moluptaspic te pra comni doluptatur as quat fuga. As ea num aut latur, cum autati ipitiasped mintus dipsant esequi od mil est pro temo inient moloribearum hil ipsusam quidelit, volectem imeture mporeni enimos quid eium quossum ipiendi im estius, nis saperro volenim inctat quo es dolescia des rem doluptin rehent est, odi volorectis aut quia dolesci piendebis eum etur re consero moditatus aborestium faccum fugita int, corae. Nem facerum quibus si odi aligenia dustrum endi dolupic aborepr erchit et modit, conecupit, aperitat.",
      projectsDescriptionTwo: "Ficid evere nim ent ressequati odis nos di de nim quatatus dis ne nim evelesequi que pa nes dolupicit officienis doluptaquunt hariatemos as quae pratenihil maiorrumqui dolo quatis eatur?Pis am et ommod quia nobitatempos autempe runtur, simi, volupta testrum et volorempos estisitatur antet alis eaquat.Evenis consequ iscide nimi, quossit quisi que optaquamus diorrov idipieni optibus.Id mossim voluptatum iundebitatur ad utenihi liquasp edictur?Osa plant. Idesciliqui dis doloreictur? Quisciist doloris imoluptaecto molorum reic torepera non remquos dolore atet aut il impos audi conecepro quis evelenis con coreic tem. Ut"
    },
  };

  const projectKeys = Object.keys(projectDetails);
  const topProjects = projectKeys.slice(0, 3); // First four projects
  const centerProjects = projectKeys.slice(3, 6); // Last four projects
  const bottomProjects = projectKeys.slice(6, 9); // Last four projects

  const { active } = useProgress();
  const [showScrollOverlay, setShowScrollOverlay] = useState(true);

  useEffect(() => {
    if (!active) {
      // Hide scroll overlay after 5 seconds when loading is complete
      const timer = setTimeout(() => {
        setShowScrollOverlay(false);
      }, 5000);

      return () => {
        clearTimeout(timer); // Clear the timer if component unmounts or active changes
      };
    }
  }, [active]); // Only run this effect when `active` changes


  return (
    <>
      <LoadingScreen />

      <div className={`scroll-overlay ${showScrollOverlay ? "" : "hidden"}`}>
        <div className="scroll-top" >
          <i class="fa-solid fa-arrow-down-long white"></i>
          <h1 className="scroll-text" >Scroll to start tour</h1>
        </div>
        <div className="scroll-bottom" >
          <i class="fa-solid fa-circle white"></i>
          <h1 className="scroll-text" >Click on items for info about the project</h1>
        </div>
      </div>

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

              {/* Render center projects */}
              <div className="row">
                {centerProjects.map((projectName) => (
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
                <div className="project-picture-overlay" >
                  <div className="project-pictures" >
                  {projectDetails[selectedProject].images.map((imageName, index) => (
                  <img
                    key={index}
                    className="project-image"
                    src={imageName} // Use the image filename directly from projectDetails
                    alt={`Project ${selectedProject} Image ${index + 1}`}
                  />
                  ))}
                  </div>
                </div>
                <div className="project-text-overlay" >
                  <div className="project-top" >
                    <h1 className="project-top-text" >{projectDetails[selectedProject].title}</h1>
                    <button className="close-button" onClick={handleCloseProjectOverlay}>
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <p className="project-description" >{projectDetails[selectedProject].projectsDescription}</p>
                  <p className="project-description" >{projectDetails[selectedProject].projectsDescriptionTwo}</p>
                </div>
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



