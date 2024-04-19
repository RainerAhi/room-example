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

  const [audio] = useState(new Audio('/websitesound.mp3'));
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [soundTextVisible, setSoundTextVisible] = useState(true);

  useEffect(() => {
    // Set up audio loop and start playing on component mount
    audio.loop = true;
    audio.play().then(() => {
      setIsSoundPlaying(true); // Update state when audio starts playing
    }).catch(error => {
      console.error('Failed to play audio:', error);
    });

    return () => {
      // Clean up audio on component unmount
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const soundEffectFiles = [
    '/a.mp3',
    '/c.mp3',
    '/d.mp3',
    '/e2.mp3',
    '/f.mp3',
    '/h.mp3',
    '/e.mp3',
  ];

  const playSoundEffect = () => {
    // Select a random sound effect file from the array
    const randomIndex = Math.floor(Math.random() * soundEffectFiles.length);
    const selectedSoundEffect = new Audio(soundEffectFiles[randomIndex]);
    selectedSoundEffect.play().catch(error => {
      console.error('Failed to play sound effect:', error);
    });
  };

  const toggleSound = () => {
    setIsSoundPlaying((prevState) => !prevState);
    if (isSoundPlaying) {
      audio.pause();
      setIsSoundPlaying(false);
    } else {
      audio.play().then(() => {
        setIsSoundPlaying(true);
      }).catch(error => {
        console.error('Failed to play audio:', error);
      });
    }
    setSoundTextVisible(false); // Hide sound-text permanently after first click
  };

  const [showFullOverlay, setShowFullOverlay] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showNavigationIconOverlay, setShowNavigationIconOverlay] = useState(false);
  const [isFullNavigationVisible, setIsFullNavigationVisible] = useState(false);

  const handleFullNavigationIconClick = () => {
    setIsFullNavigationVisible(!isFullNavigationVisible); // Toggle visibility
  };

  const handleNavigationIconClick = () => {
    setShowNavigationIconOverlay(true); // Show the navigation icon overlay
    setIsFullNavigationVisible(false); // Toggle visibility
    playSoundEffect();
  };

  const handleNavigationIconCloseClick = () => {
    setShowNavigationIconOverlay(false); // Show the navigation icon overlay
    setIsFullNavigationVisible(false); // Toggle visibility
    playSoundEffect();
  };

  const handleNavigationClick = () => {
    setShowFullOverlay(true);
    setShowNavigationIconOverlay(false); // Show the navigation icon overlay
    setIsFullNavigationVisible(false); // Toggle visibility
    playSoundEffect();
  };

  const handleCloseOverlay = () => {
    setShowFullOverlay(false);
    setSelectedProject(null); // Reset selected project
    setIsFullNavigationVisible(false); // Toggle visibility
    playSoundEffect();
  };

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName);
    setIsFullNavigationVisible(false); // Toggle visibility
    playSoundEffect();
  };

  const handleCloseProjectOverlay = () => {
    setSelectedProject(null); // Reset selected project
    setIsFullNavigationVisible(false); // Toggle visibility
    playSoundEffect();
  };

  const projectDetails = {
    "project-one": {
      title: "DPARTMENT IN-HOUSE BRAND",
      description: "In progress",
      additionalInfo: "This project involves developing an in-house brand for Dpartment, currently in progress.",
      images: ["/projectimage.png", "/projectimage.png", "/projectimage.png"],
      projectsDescription: " in progressDiassim expliti orerfer erchil et ad utas modia volo con es verunti ditiis modipsus consequ isciis ape non rem nobisitas arum quos magnate ium rehenietus essit, nectur? Fugia qui custrum quos ex ese nus, sam eum utemporit, ut faccus, odit moluptaspic te pra comni doluptatur as quat fuga. As ea num aut latur, cum autati ipitiasped mintus dipsant esequi od mil est pro temo inient moloribearum hil ipsusam quidelit, volectem imeture mporeni enimos quid eium quossum ipiendi im estius, nis saperro volenim inctat quo es dolescia des rem doluptin rehent est, odi volorectis aut quia dolesci piendebis eum etur re consero moditatus aborestium faccum fugita int, corae. Nem facerum quibus si odi aligenia dustrum endi dolupic aborepr erchit et modit, conecupit, aperitat.",
      projectsDescriptionTwo: "Ficid evere nim ent ressequati odis nos di de nim quatatus dis ne nim evelesequi que pa nes dolupicit officienis doluptaquunt hariatemos as quae pratenihil maiorrumqui dolo quatis eatur?Pis am et ommod quia nobitatempos autempe runtur, simi, volupta testrum et volorempos estisitatur antet alis eaquat.Evenis consequ iscide nimi, quossit quisi que optaquamus diorrov idipieni optibus.Id mossim voluptatum iundebitatur ad utenihi liquasp edictur?Osa plant. Idesciliqui dis doloreictur? Quisciist doloris imoluptaecto molorum reic torepera non remquos dolore atet aut il impos audi conecepro quis evelenis con coreic tem. Ut"
    },
    "project-two": {
      title: "NEUENDORF HOUSE SOCIAL MEDIA ADVERTISEMENT",
      description: "On-going partnership",
      additionalInfo: "Ongoing partnership with Neuendorf House for social media advertising.",
      images: ["/neue1.jpg", "/neue2.jpg", "/neue3.jpg"],
      projectsDescription: "Our ongoing Partnership with the Neuendorf House is a project that honors us deeply, while also challenging us to do justice to the artistic masterpiece of Claudio Silverstrin and John Pawson. The House was finished in 1989 and is one of the most important architectural buildings in the world. The task is to establish the house as a brand and to expand the recognition of the house from architecture students and experts towards a global audience. ",
      projectsDescriptionTwo: "This includes the building of a social media strategy as well as content production, collaboration management with clothing and lifestyle brands that carry the same minimalistic and luxurious approach and the development of a brand strategy.",
      projectsDescriptionThree: "Our first steps were to renew the Instagram account by removing old content and starting a new regular post strategy with content made by renowned photographers that had visited the house before. To express our gratitude for an article by the Openhouse Magazine we created a dedicated post showing the magazine in a CGI rebuild of the house.",
      projectsDescriptionFour: "The reel includes an exact representation of the house that we built in 3D, to further work with the house in the digital world. Bringing the house into the digital world is part of our strategy to expand the house as a brand into different artistic worlds. The connection between the Neuendorf House and the Art world is already made not only by the impact of the architecture but also by the families online art platform Artnet. ",
      projectsDescriptionFive: "In the ongoing partnership it will be our challenge to establish the Neuendorf House also in the new generations while maintaining the class and artistic approach of the cultural inheritance.",
    },
    "project-three": {
      title: "SUSU SOCIAL MEDIA ADVERTISEMENT",
      description: "On-going partnership",
      additionalInfo: "Collaborative work with SUSU on social media advertising campaigns.",
      images: ["/projectimage.png", "/projectimage.png", "/projectimage.png"],
      projectsDescription: " in progressDiassim expliti orerfer erchil et ad utas modia volo con es verunti ditiis modipsus consequ isciis ape non rem nobisitas arum quos magnate ium rehenietus essit, nectur? Fugia qui custrum quos ex ese nus, sam eum utemporit, ut faccus, odit moluptaspic te pra comni doluptatur as quat fuga. As ea num aut latur, cum autati ipitiasped mintus dipsant esequi od mil est pro temo inient moloribearum hil ipsusam quidelit, volectem imeture mporeni enimos quid eium quossum ipiendi im estius, nis saperro volenim inctat quo es dolescia des rem doluptin rehent est, odi volorectis aut quia dolesci piendebis eum etur re consero moditatus aborestium faccum fugita int, corae. Nem facerum quibus si odi aligenia dustrum endi dolupic aborepr erchit et modit, conecupit, aperitat.",
      projectsDescriptionTwo: "Ficid evere nim ent ressequati odis nos di de nim quatatus dis ne nim evelesequi que pa nes dolupicit officienis doluptaquunt hariatemos as quae pratenihil maiorrumqui dolo quatis eatur?Pis am et ommod quia nobitatempos autempe runtur, simi, volupta testrum et volorempos estisitatur antet alis eaquat.Evenis consequ iscide nimi, quossit quisi que optaquamus diorrov idipieni optibus.Id mossim voluptatum iundebitatur ad utenihi liquasp edictur?Osa plant. Idesciliqui dis doloreictur? Quisciist doloris imoluptaecto molorum reic torepera non remquos dolore atet aut il impos audi conecepro quis evelenis con coreic tem. Ut"
    },
    "project-four": {
      title: "HIGHSNOBIETY PRODUCT DESIGN",
      description: "In progress",
      additionalInfo: "Design project with Highsnobiety, currently in progress.",
      images: ["/projectimage.png", "/projectimage.png", "/projectimage.png"],
      projectsDescription: "Our ongoing Partnership with the Neuendorf House is a project that honors us deeply, while also challenging us to do justice to the artistic masterpiece of Claudio Silverstrin and John Pawson. The House was finished in 1989 and is one of the most important architectural buildings in the world. The task is to establish the house as a brand and to expand the recognition of the house from architecture students and experts towards a global audience. ",
      projectsDescriptionTwo: "Ficid evere nim ent ressequati odis nos di de nim quatatus dis ne nim evelesequi que pa nes dolupicit officienis doluptaquunt hariatemos as quae pratenihil maiorrumqui dolo quatis eatur?Pis am et ommod quia nobitatempos autempe runtur, simi, volupta testrum et volorempos estisitatur antet alis eaquat.Evenis consequ iscide nimi, quossit quisi que optaquamus diorrov idipieni optibus.Id mossim voluptatum iundebitatur ad utenihi liquasp edictur?Osa plant. Idesciliqui dis doloreictur? Quisciist doloris imoluptaecto molorum reic torepera non remquos dolore atet aut il impos audi conecepro quis evelenis con coreic tem. Ut"
    },
    "project-five": {
      title: "RESIDENTIAL RENOVATION",
      description: "In progress",
      additionalInfo: "Renovation project for a residential property, currently underway.",
      images: ["/projectimage.png", "/projectimage.png", "/projectimage.png"],
      projectsDescription: " in progressDiassim expliti orerfer erchil et ad utas modia volo con es verunti ditiis modipsus consequ isciis ape non rem nobisitas arum quos magnate ium rehenietus essit, nectur? Fugia qui custrum quos ex ese nus, sam eum utemporit, ut faccus, odit moluptaspic te pra comni doluptatur as quat fuga. As ea num aut latur, cum autati ipitiasped mintus dipsant esequi od mil est pro temo inient moloribearum hil ipsusam quidelit, volectem imeture mporeni enimos quid eium quossum ipiendi im estius, nis saperro volenim inctat quo es dolescia des rem doluptin rehent est, odi volorectis aut quia dolesci piendebis eum etur re consero moditatus aborestium faccum fugita int, corae. Nem facerum quibus si odi aligenia dustrum endi dolupic aborepr erchit et modit, conecupit, aperitat.",
      projectsDescriptionTwo: "Ficid evere nim ent ressequati odis nos di de nim quatatus dis ne nim evelesequi que pa nes dolupicit officienis doluptaquunt hariatemos as quae pratenihil maiorrumqui dolo quatis eatur?Pis am et ommod quia nobitatempos autempe runtur, simi, volupta testrum et volorempos estisitatur antet alis eaquat.Evenis consequ iscide nimi, quossit quisi que optaquamus diorrov idipieni optibus.Id mossim voluptatum iundebitatur ad utenihi liquasp edictur?Osa plant. Idesciliqui dis doloreictur? Quisciist doloris imoluptaecto molorum reic torepera non remquos dolore atet aut il impos audi conecepro quis evelenis con coreic tem. Ut"
    },
    "project-six": {
      title: "KINK BAR COMMERCIAL RENOVATION",
      description: "In progress",
      additionalInfo: "Commercial renovation project for Kink Bar, currently in progress.",
      images: ["/projectimage.png", "/projectimage.png", "/projectimage.png"],
      projectsDescription: " in progressDiassim expliti orerfer erchil et ad utas modia volo con es verunti ditiis modipsus consequ isciis ape non rem nobisitas arum quos magnate ium rehenietus essit, nectur? Fugia qui custrum quos ex ese nus, sam eum utemporit, ut faccus, odit moluptaspic te pra comni doluptatur as quat fuga. As ea num aut latur, cum autati ipitiasped mintus dipsant esequi od mil est pro temo inient moloribearum hil ipsusam quidelit, volectem imeture mporeni enimos quid eium quossum ipiendi im estius, nis saperro volenim inctat quo es dolescia des rem doluptin rehent est, odi volorectis aut quia dolesci piendebis eum etur re consero moditatus aborestium faccum fugita int, corae. Nem facerum quibus si odi aligenia dustrum endi dolupic aborepr erchit et modit, conecupit, aperitat.",
      projectsDescriptionTwo: "Ficid evere nim ent ressequati odis nos di de nim quatatus dis ne nim evelesequi que pa nes dolupicit officienis doluptaquunt hariatemos as quae pratenihil maiorrumqui dolo quatis eatur?Pis am et ommod quia nobitatempos autempe runtur, simi, volupta testrum et volorempos estisitatur antet alis eaquat.Evenis consequ iscide nimi, quossit quisi que optaquamus diorrov idipieni optibus.Id mossim voluptatum iundebitatur ad utenihi liquasp edictur?Osa plant. Idesciliqui dis doloreictur? Quisciist doloris imoluptaecto molorum reic torepera non remquos dolore atet aut il impos audi conecepro quis evelenis con coreic tem. Ut"
    },
    "project-seven": {
      title: "MIAMI ART BASEL EXHIBITION",
      description: "In progress",
      additionalInfo: "Preparation for an exhibition at Miami Art Basel, work in progress.",
      images: ["/projectimage.png", "/projectimage.png", "/projectimage.png"],
      projectsDescription: " in progressDiassim expliti orerfer erchil et ad utas modia volo con es verunti ditiis modipsus consequ isciis ape non rem nobisitas arum quos magnate ium rehenietus essit, nectur? Fugia qui custrum quos ex ese nus, sam eum utemporit, ut faccus, odit moluptaspic te pra comni doluptatur as quat fuga. As ea num aut latur, cum autati ipitiasped mintus dipsant esequi od mil est pro temo inient moloribearum hil ipsusam quidelit, volectem imeture mporeni enimos quid eium quossum ipiendi im estius, nis saperro volenim inctat quo es dolescia des rem doluptin rehent est, odi volorectis aut quia dolesci piendebis eum etur re consero moditatus aborestium faccum fugita int, corae. Nem facerum quibus si odi aligenia dustrum endi dolupic aborepr erchit et modit, conecupit, aperitat.",
      projectsDescriptionTwo: "Ficid evere nim ent ressequati odis nos di de nim quatatus dis ne nim evelesequi que pa nes dolupicit officienis doluptaquunt hariatemos as quae pratenihil maiorrumqui dolo quatis eatur?Pis am et ommod quia nobitatempos autempe runtur, simi, volupta testrum et volorempos estisitatur antet alis eaquat.Evenis consequ iscide nimi, quossit quisi que optaquamus diorrov idipieni optibus.Id mossim voluptatum iundebitatur ad utenihi liquasp edictur?Osa plant. Idesciliqui dis doloreictur? Quisciist doloris imoluptaecto molorum reic torepera non remquos dolore atet aut il impos audi conecepro quis evelenis con coreic tem. Ut"
    },
    "project-eight": {
      title: "BERLINIONAIRE PATTERN MAKING",
      description: "In progress",
      additionalInfo: "Pattern-making project in collaboration with Berlinionaire, ongoing.",
      images: ["/projectimage.png", "/projectimage.png", "/projectimage.png"],
      projectsDescription: " in progressDiassim expliti orerfer erchil et ad utas modia volo con es verunti ditiis modipsus consequ isciis ape non rem nobisitas arum quos magnate ium rehenietus essit, nectur? Fugia qui custrum quos ex ese nus, sam eum utemporit, ut faccus, odit moluptaspic te pra comni doluptatur as quat fuga. As ea num aut latur, cum autati ipitiasped mintus dipsant esequi od mil est pro temo inient moloribearum hil ipsusam quidelit, volectem imeture mporeni enimos quid eium quossum ipiendi im estius, nis saperro volenim inctat quo es dolescia des rem doluptin rehent est, odi volorectis aut quia dolesci piendebis eum etur re consero moditatus aborestium faccum fugita int, corae. Nem facerum quibus si odi aligenia dustrum endi dolupic aborepr erchit et modit, conecupit, aperitat.",
      projectsDescriptionTwo: "Ficid evere nim ent ressequati odis nos di de nim quatatus dis ne nim evelesequi que pa nes dolupicit officienis doluptaquunt hariatemos as quae pratenihil maiorrumqui dolo quatis eatur?Pis am et ommod quia nobitatempos autempe runtur, simi, volupta testrum et volorempos estisitatur antet alis eaquat.Evenis consequ iscide nimi, quossit quisi que optaquamus diorrov idipieni optibus.Id mossim voluptatum iundebitatur ad utenihi liquasp edictur?Osa plant. Idesciliqui dis doloreictur? Quisciist doloris imoluptaecto molorum reic torepera non remquos dolore atet aut il impos audi conecepro quis evelenis con coreic tem. Ut"
    },
    "project-nine": {
      title: "BERLINIONAIRE PATTERN MAKING",
      description: "In progress",
      additionalInfo: "Pattern-making project in collaboration with Berlinionaire, ongoing.",
      images: ["/projectimage.png", "/projectimage.png", "/projectimage.png"],
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

  const [showOverlayOne, setShowOverlayOne] = useState(false);
  const [showOverlayTwo, setShowOverlayTwo] = useState(false);
  const [showOverlayThree, setShowOverlayThree] = useState(false);
  const [showOverlayFour, setShowOverlayFour] = useState(false);
  const [showOverlayFive, setShowOverlayFive] = useState(false);

  const toggleOverlayOne = () => {
    setShowOverlayOne(prevState => !prevState);

    setShowOverlayTwo(false);
    setShowOverlayThree(false);
    setShowOverlayFour(false);
    setShowOverlayFive(false);

    playSoundEffect();
  };

  const toggleOverlayTwo = () => {
    setShowOverlayTwo(prevState => !prevState);

    setShowOverlayOne(false);
    setShowOverlayThree(false);
    setShowOverlayFour(false);
    setShowOverlayFive(false);

    playSoundEffect();
  };

  const toggleOverlayThree = () => {
    setShowOverlayThree(prevState => !prevState);

    setShowOverlayOne(false);
    setShowOverlayTwo(false);
    setShowOverlayFour(false);
    setShowOverlayFive(false);

    playSoundEffect();
  };

  const toggleOverlayFour = () => {
    setShowOverlayFour(prevState => !prevState);

    setShowOverlayOne(false);
    setShowOverlayTwo(false);
    setShowOverlayThree(false);
    setShowOverlayFive(false);

    playSoundEffect();
  };

  const toggleOverlayFive = () => {
    setShowOverlayFive(prevState => !prevState);

    setShowOverlayOne(false);
    setShowOverlayTwo(false);
    setShowOverlayThree(false);
    setShowOverlayFour(false);

    playSoundEffect();
  };


  return (
    <>
      <LoadingScreen />

      <div className="sound-container" onClick={toggleSound} >
        {isSoundPlaying ? (
          <img className="sound-container-image" src="/playingicon.png" />
        ) : (
          <div className="sound-line" />
        )}
        {soundTextVisible && (
          <h1 className="sound-text">Click for sound</h1>
        )}
      </div>

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
        <CanvasContainer toggleOverlayOne={toggleOverlayOne} toggleOverlayTwo={toggleOverlayTwo} toggleOverlayThree={toggleOverlayThree} toggleOverlayFour={toggleOverlayFour} toggleOverlayFive={toggleOverlayFive} />
      </div>

      {/* 3D experince overlays */}

      <CSSTransition
        in={showOverlayOne}
        timeout={1000} // Adjust timeout to match your CSS transition duration
        classNames="fade"
        unmountOnExit
      >
        <div className={`white-button-overlay ${showOverlayOne ? "active" : ""}`}>
          <div className="white-button-navigation" >
            <div className="white-button-navigation-texts" >
              <h1 className="container-heading" >EMEKA OKEKE EXHIBITION</h1>
              <h1 className="container-description" >in progress</h1>
            </div>
            <button className="close-button" onClick={toggleOverlayOne}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="white-button-content" >
            <div className="white-button-left" >
              <img className="white-button-image" src="/projectimage.png" />
              <img className="white-button-image" src="/projectimage.png" />
              <img className="white-button-image" src="/projectimage.png" />
            </div>
            <div className="white-button-right" >
              <h1 className="container-heading" >BRAND CONCEPT</h1>
              <h1 className="container-description" >For the D/Partment In-House Brand our task was to develop a brand concept that includes a business plan, market research, a design concept as well as production-ready designs for the first interior collection.</h1>
              <h1 className="container-description" >The brand has been conceptualized to enhance the experience of a streetwear store based on Gen-Z and to act on the gap in the market considering interior design for Gen Z </h1>
            </div>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={showOverlayTwo}
        timeout={1000} // Adjust timeout to match your CSS transition duration
        classNames="fade"
        unmountOnExit
      >
        <div className={`white-button-overlay ${showOverlayTwo ? "active" : ""}`}>
          <div className="white-button-navigation" >
            <div className="white-button-navigation-texts" >
              <h1 className="container-heading" >PROJECT 2</h1>
              <h1 className="container-description" >in progress</h1>
            </div>
            <button className="close-button" onClick={toggleOverlayTwo}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="white-button-content" >
            <div className="white-button-left" >
              <img className="white-button-image" src="/projectimage.png" />
              <img className="white-button-image" src="/projectimage.png" />
              <img className="white-button-image" src="/projectimage.png" />
            </div>
            <div className="white-button-right" >
              <h1 className="container-heading" >BRAND CONCEPT</h1>
              <h1 className="container-description" >For the D/Partment In-House Brand our task was to develop a brand concept that includes a business plan, market research, a design concept as well as production-ready designs for the first interior collection.</h1>
              <h1 className="container-description" >The brand has been conceptualized to enhance the experience of a streetwear store based on Gen-Z and to act on the gap in the market considering interior design for Gen Z </h1>
            </div>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={showOverlayThree}
        timeout={1000} // Adjust timeout to match your CSS transition duration
        classNames="fade"
        unmountOnExit
      >
        <div className={`white-button-overlay ${showOverlayThree ? "active" : ""}`}>
          <div className="white-button-navigation" >
            <div className="white-button-navigation-texts" >
              <h1 className="container-heading" >PROJECT 3</h1>
              <h1 className="container-description" >in progress</h1>
            </div>
            <button className="close-button" onClick={toggleOverlayThree}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="white-button-content" >
            <div className="white-button-left" >
              <img className="white-button-image" src="/projectimage.png" />
              <img className="white-button-image" src="/projectimage.png" />
              <img className="white-button-image" src="/projectimage.png" />
            </div>
            <div className="white-button-right" >
              <h1 className="container-heading" >BRAND CONCEPT</h1>
              <h1 className="container-description" >For the D/Partment In-House Brand our task was to develop a brand concept that includes a business plan, market research, a design concept as well as production-ready designs for the first interior collection.</h1>
              <h1 className="container-description" >The brand has been conceptualized to enhance the experience of a streetwear store based on Gen-Z and to act on the gap in the market considering interior design for Gen Z </h1>
            </div>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={showOverlayFour}
        timeout={1000} // Adjust timeout to match your CSS transition duration
        classNames="fade"
        unmountOnExit
      >
        <div className={`white-button-overlay ${showOverlayFour ? "active" : ""}`}>
          <div className="white-button-navigation" >
            <div className="white-button-navigation-texts" >
              <h1 className="container-heading" >NEUENDORF HOUSE SOCIAL MEDIA ADVERTISEMENT</h1>
              <h1 className="container-description" >in progress</h1>
            </div>
            <button className="close-button" onClick={toggleOverlayFour}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="white-button-content" >
            <div className="white-button-left" >
              <img className="white-button-image" src="/neue1.jpg" />
              <img className="white-button-image" src="/neue2.jpg" />
              <img className="white-button-image" src="/neue3.jpg" />
            </div>
            <div className="white-button-right" >
              <h1 className="container-heading" >BRAND CONCEPT</h1>
              <h1 className="container-description" >Our ongoing Partnership with the Neuendorf House is a project that honors us deeply, while also challenging us to do justice to the artistic masterpiece of Claudio Silverstrin and John Pawson. The House was finished in 1989 and is one of the most important architectural buildings in the world. The task is to establish the house as a brand and to expand the recognition of the house from architecture students and experts towards a global audience. </h1>
              <h1 className="container-description" >This includes the building of a social media strategy as well as content production, collaboration management with clothing and lifestyle brands that carry the same minimalistic and luxurious approach and the development of a brand strategy.</h1>
              <h1 className="container-description" >Our first steps were to renew the Instagram account by removing old content and starting a new regular post strategy with content made by renowned photographers that had visited the house before. To express our gratitude for an article by the Openhouse Magazine we created a dedicated post showing the magazine in a CGI rebuild of the house. </h1>
              <h1 className="container-description" >The reel includes an exact representation of the house that we built in 3D, to further work with the house in the digital world. Bringing the house into the digital world is part of our strategy to expand the house as a brand into different artistic worlds. The connection between the Neuendorf House and the Art world is already made not only by the impact of the architecture but also by the families online art platform Artnet. </h1>
              <h1 className="container-description" >In the ongoing partnership it will be our challenge to establish the Neuendorf House also in the new generations while maintaining the class and artistic approach of the cultural inheritance.</h1>
            </div>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={showOverlayFive}
        timeout={1000} // Adjust timeout to match your CSS transition duration
        classNames="fade"
        unmountOnExit
      >
        <div className={`white-button-overlay ${showOverlayFive ? "active" : ""}`}>
          <div className="white-button-navigation" >
            <div className="white-button-navigation-texts" >
              <h1 className="container-heading" >PROJECT 5</h1>
              <h1 className="container-description" >in progress</h1>
            </div>
            <button className="close-button" onClick={toggleOverlayFive}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="white-button-content" >
            <div className="white-button-left" >
              <img className="white-button-image" src="/projectimage.png" />
              <img className="white-button-image" src="/projectimage.png" />
              <img className="white-button-image" src="/projectimage.png" />
            </div>
            <div className="white-button-right" >
              <h1 className="container-heading" >BRAND CONCEPT</h1>
              <h1 className="container-description" >For the D/Partment In-House Brand our task was to develop a brand concept that includes a business plan, market research, a design concept as well as production-ready designs for the first interior collection.</h1>
              <h1 className="container-description" >The brand has been conceptualized to enhance the experience of a streetwear store based on Gen-Z and to act on the gap in the market considering interior design for Gen Z </h1>
            </div>
          </div>
        </div>
      </CSSTransition>

      {/* Overlay button to trigger full overlay */}
      <div className="overlay">
        <div className="overlay-navigation">
          <div className="navigation-icon" onClick={handleFullNavigationIconClick}>
            <div className="icon-top" />
            <div className="icon-bottom" />
          </div>
          {/* Conditional rendering based on visibility state */}
          {isFullNavigationVisible && (
            <>
              <button className="navigation-text" onClick={handleNavigationClick} >ARCHIVE</button>
              <button className="navigation-text" onClick={handleNavigationIconClick} >IMPRESSIUM</button>
            </>
          )}
        </div>
      </div>

      <CSSTransition
        in={showNavigationIconOverlay}
        timeout={1000} // Adjust timeout to match your CSS transition duration
        classNames="fade"
        unmountOnExit
      >
      <div className={`navigation-icon-overlay ${showNavigationIconOverlay ? "active" : ""}`}>
        <div className="overlay">
          <div className="overlay-navigation">
            <div className="navigation-icon-icon" onClick={handleNavigationIconCloseClick} >
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
        <div className="sound-container kontakt-sound-container" onClick={toggleSound} >
              {isSoundPlaying ? (
              <img className="sound-container-image" src="/playingblack.png" />
              ) : (
              <div className="sound-line-black" />
              )}
              {soundTextVisible && (
                <h1 className="sound-text"></h1>
              )}
        </div>
        <div className="navigation-icon-overlay-content" >

          <div className="overlay-texts" >
            <h1 className="container-heading" >IMPRESSUM</h1>
            <ul className="overlay-list" >
              <li><h1 className="container-description">Angaben gemäß § 5 TMG</h1></li>
              <li><h1 className="container-description">Moritz Otto</h1></li>
              <li><h1 className="container-description">Siemensstraße 30</h1></li>
              <li><h1 className="container-description">12459 Berlin</h1></li>
            </ul>
          </div>

          <div className="overlay-texts" >
            <h1 className="container-heading" >KONTAKT</h1>
            <ul className="overlay-list" >
              <li><h1 className="container-description">Telefon: +49 (0) 172 7994533</h1></li>
              <li><h1 className="container-description">E-Mail: inquiries@siemensstr30.de</h1></li>
              <li><h1 className="container-description">Umsatzsteuer-ID</h1></li>
              <li><h1 className="container-description-list">Umsatzsteuer - Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</h1>
                <li className="list-list" >Handelsregister des Amtsgerichts</li>
                <li className="list-list-bottom" >Charlottenburg HRB 240741B</li>
              </li>
              <li><h1 className="container-description">USt. ID. DE275450300</h1></li>
              <li><h1 className="container-description">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</h1></li>
            </ul>
          </div>

          <div className="overlay-texts" >
            <h1 className="container-heading" >HAFTUNG FÜR INHALTE</h1>
            <ul className="overlay-list" >
              <li><h1 className="container-description">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht ver pflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</h1></li>
              <li><h1 className="container-description">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</h1></li>
            </ul>
          </div>

          <div className="overlay-texts" >
            <h1 className="container-heading" >HAFTUNG FÜR LINKS</h1>
            <ul className="overlay-list" >
              <li><h1 className="container-description">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der </h1></li>
            </ul>
          </div>

        </div>
      </div>
      </CSSTransition>

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
            <div className="overlay">
              <div className="overlay-navigation">
                <div className="navigation-icon" onClick={handleFullNavigationIconClick}>
                  <div className="icon-top black" />
                  <div className="icon-bottom black" />
                </div>
                {/* Conditional rendering based on visibility state */}
                {isFullNavigationVisible && (
                  <>
                    <button className="navigation-text-back" onClick={handleCloseOverlay} >SHOWROOM</button>
                    <button className="navigation-text-back" onClick={handleNavigationIconClick} >IMPRESSIUM</button>
                  </>
                )}
              </div>
            </div>
            <div className="sound-container" onClick={toggleSound} >
              {isSoundPlaying ? (
              <img className="sound-container-image" src="/playingblack.png" />
              ) : (
              <div className="sound-line-black" />
              )}
              {soundTextVisible && (
                <h1 className="sound-text"></h1>
              )}
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
                  <p className="project-description" >{projectDetails[selectedProject].projectsDescriptionThree}</p>
                  <p className="project-description" >{projectDetails[selectedProject].projectsDescriptionFour}</p>
                  <p className="project-description" >{projectDetails[selectedProject].projectsDescriptionFive}</p>
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



