import { useState } from "react";
import { Loader } from "@react-three/drei";
import CanvasContainer from "./CanvasContainer";
import { useProgress } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { CSSTransition } from 'react-transition-group';
import ImageGallery from "react-image-gallery";
import './image-gallery-styles.scss'

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
  const [showNavigationIconOverlay2, setShowNavigationIconOverlay2] = useState(false);
  const [isFullNavigationVisible, setIsFullNavigationVisible] = useState(false);
  const [isFullNavigationMenu, setIsFullNavigationMenu] = useState(true);

  const handleFullNavigationIconClick = () => {
    setIsFullNavigationVisible(!isFullNavigationVisible); // Toggle visibility
  };

  const iconSrc = isFullNavigationVisible ? '/logowhite.png' : '/logowhite2.png';
  const iconSrc2 = isFullNavigationVisible ? '/logoblack.png' : '/logoblack2.png';

  const handleNavigationIconClick = () => {
    setShowNavigationIconOverlay(true); // Show the navigation icon overlay
    setIsFullNavigationVisible(false); // Toggle visibility
    playSoundEffect();
  };

  const handleNavigationIconClick2 = () => {
    setShowNavigationIconOverlay2(true); // Show the navigation icon overlay
    setIsFullNavigationVisible(false); // Toggle visibility
    playSoundEffect();
  };

  const handleNavigationIconCloseClick = () => {
    setShowNavigationIconOverlay(false); // Show the navigation icon overlay
    setIsFullNavigationVisible(false); // Toggle visibility
    playSoundEffect();
  };

  const handleNavigationIconNavigateClick = () => {
    setShowNavigationIconOverlay(false); // Show the navigation icon overlay
    setIsFullNavigationVisible(false); // Toggle visibility
    setShowFullOverlay(true);
    playSoundEffect();
  };

  const handleNavigationIconNavigateClick2 = () => {
    setShowNavigationIconOverlay2(false); // Show the navigation icon overlay
    setIsFullNavigationVisible(false); // Toggle visibility
    setShowFullOverlay(false);
    playSoundEffect();
  };

  const handleNavigationIconCloseClick2 = () => {
    setShowNavigationIconOverlay2(false); // Show the navigation icon overlay
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
    setIsFullNavigationMenu(false); 
    playSoundEffect();
  };

  const handleCloseProjectOverlay = () => {
    setSelectedProject(null); // Reset selected project
    setIsFullNavigationVisible(false); // Toggle visibility
    setIsFullNavigationMenu(true); 
    playSoundEffect();
  };

  const projectDetails = {
    "project-one": {
      title: "NEUENDORF HOUSE BRAND BUILDING",
      titleTwo: "Neuendorf house brand building",
      projectLink: "https://neuendorfhouse.com/",
      description: "on-going partnership",
      additionalInfo: "This project involves developing an in-house brand for Dpartment, currently in progress.",
      images: ["/neue1.jpg", "/neue2.jpg", "/neue3.jpg"],
      mainImage: "/neue1.jpg",
      smallImage: "/neue.png",
      imageTitle: "Neuendorf House",
      projectsDescription: " Our ongoing Partnership with the Neuendorf House is a project that honors us deeply, while also challenging us to do justice to the artistic masterpiece of Claudio Silverstrin and John Pawson. The House was finished in 1989 and is one of the most important architectural buildings in the world. The task is to establish the house as a brand and to expand the recognition of the house from architecture students and experts towards a global audience. ",
      projectsDescriptionTwo: "This includes the building of a social media strategy as well as content production, collaboration management with clothing and lifestyle brands that carry the same minimalistic and luxurious approach and the development of a brand strategy.",
      projectsDescriptionThree: "Our first steps were to renew the Instagram account by removing old content and starting a new regular post strategy with content made by renowned photographers that had visited the house before. To express our gratitude for an article by the Openhouse Magazine we created a dedicated post showing the magazine in a CGI rebuild of the house. ",
      projectsDescriptionFour: "The reel includes an exact representation of the house that we built in 3D, to further work with the house in the digital world. Bringing the house into the digital world is part of our strategy to expand the house as a brand into different artistic worlds. The connection between the Neuendorf House and the Art world is already made not only by the impact of the architecture but also by the families online art platform Artnet. ",
      projectsDescriptionFive: "In the ongoing partnership it will be our challenge to establish the Neuendorf House also in the new generations while maintaining the class and artistic approach of the cultural inheritance.",
    },
    "project-two": {
      title: "SUSU ACCRA BRAND STRATEGY",
      titleTwo: "Susu accra fashion design and advertisement",
      projectLink: "https://susuaccra.com/",
      description: "on-going partnership",
      additionalInfo: "Ongoing partnership with Neuendorf House for social media advertising.",
      images: ["/susu6.jpg", "/susu5.jpg", "/susu4.jpg"],
      mainImage: "/susu6.jpg",
      smallImage: "/susu.png",
      imageTitle: "Susu Accra",
      projectsDescription: "The long term partnership with Susu Accra is a very exciting opportunity for us. The set goal of the brand is to establish African luxury in the European market. Combining luxurious and yet modern design with contemporary marketing and presentation, this is a project that fits perfectly into our key strengths. Our task is to assist the brand strategically and to take on the creative direction of the brand going forward.",
      projectsDescriptionTwo: "For the displayed project our task was to convey the idea of African luxury in a social media post and to reach a younger audience with a rather low expense.",
      projectsDescriptionThree: "To realize the project we have built a CGI environment that represents the freedom and lightness of the brand while also showing the artistic approach to the design. The falling fabric shows the individual inlays inspired by typical African prints that come with the bag. The video highlights the placement inside of Andreas Murkudis Berlin.",
      projectsDescriptionFour: "Creating a highly realistic texture for the bag was a challenge we mastered in this project, that will help the overall realism of future advertisements for the brand.",
      projectsDescriptionFive: "Currently we are able to extend our creative freedom in the project and plan on building a new product range that will let us reach our desired customer.",
    },
    "project-three": {
      title: "EMEKA OKEREKE ART EXHIBITION",
      titleTwo: "Emeka okereke art exhibition",
      projectLink: "https://nkatapodcast.com/",
      description: "on-going partnership",
      additionalInfo: "Collaborative work with SUSU on social media advertising campaigns.",
      images: ["/emeka1.jpg", "/emeka2.jpg", "/emeka3.jpg", "emeka4.jpg", "emeka5.jpg"],
      mainImage: "/emeka3.jpg",
      smallImage: "/nkata.png",
      imageTitle: "Nkata Podcast",
      projectsDescription: "After being introduced to the project by Emeka Okereke, our task was to develop a thoughtful communication for the artists artwork with the title “Art & Processes”. The artwork is part of the group exhibition “A Home for Something Unknown” at the Neuer Berliner Kunstverein. ",
      projectsDescriptionTwo: "Following the theme of dialogue and interdisciplinary design practices, which is discussed in the artwork we went ahead with a direct and collaborative approach. Speaking to Emeka revealed the objectives that lead us through the rest of the project. These being the idea of an interactive Artwork, symbolizing and encouraging communication and the themes of african artists as well as very personal memories of the artist himself and his childhood associations with Africa.",
      projectsDescriptionThree: "Continuing the collaboration we gathered ideas of how the central structure should look that was meant to hold the headphones and to indicate the heart of the artwork, being the five podcast episodes the artist dedicated to different black mentors. We wanted to draw references to a campfire which Emeka remembered to be a place in their backyard in Nigeria where the family would gather to tell stories under the moonlight. We came to the conclusion that we should build a structure resembling that campfire with the right height for the visitors to see each others face when sitting around it. The large black wall is meant to set the atmosphere and to lead focus onto the installation that has a circular light shining from above. Simplistic stools balance out the overall look and the information about the podcast is displayed further back on the walls. The large arrangement of the different aspects are meant to let the visitor explore the artwork slowly and in a more structured way, while leaving space for the interaction in the center of the scene. The dotted lines show the complex intertwinement and connections of African art around the world that the artist refers to as “Trans-Africanism” in his work. ",
      projectsDescriptionFour: "The challenges of this project were to create a very clear language that leads to a real human interaction guided by the artwork. Understanding the ideas beyond what is said in the podcast and experiencing the nonverbal conversation that the artwork allows was not an easy task. The authenticity of the final result also comes from the direct dialogue we had with the artist and the personality that we were able to let the visitors take part in.",
      projectsDescriptionFive: "Finally the project resulted in an artwork that goes beyond the podcast itself and has touched people by enabling real conversations and interaction during the time of the exhibition in March and April 2024. As interdisciplinary artists we are happy to be part of the project and to support Emeka Okereke for future exhibitions.",
    },
    "project-four": {
      title: "S30 SIDEBOARD",
      titleTwo: "S30 sideboard",
      projectLink: "mailto:inquiries@siemensstr30.de?subject=Inquiry%20s30%20sideboard",
      description: "in process",
      additionalInfo: "Design project with Highsnobiety, currently in progress.",
      images: ["/s1.jpg", "/s2.jpg", "/s3.jpg", "/s4.jpg"],
      mainImage: "/s1.jpg",
      smallImage: "/s30.png",
      imageTitle: "Price on request",
      projectsDescription: "The s30 sideboard is the first part of our object series and represents our agency as a standalone product. We are developing the sideboard in a holistic manner, covering the design and technical development as well as the production and the brand positioning.",
      projectsDescriptionTwo: "The task is to represent the ideas and personality of the agency in a single product. Therefore the object had to recreate a shape that is working also as a sculpture by implying a certain feeling towards the object.",
      projectsDescriptionThree: "Defining the feeling of the agency for us meant to work with clear edges, simplistic and yet thoughtful and new. We came to the conclusion to combine natural stone and metal which are two of our defined brand materials. Ideally we will work with pumice since it also reflects our  brand colors.",
      projectsDescriptionFour: "The sideboard features two separate heights of drawers, that are held by a rail that is cut into the stone sides. The lower drawers can easily be moved up and down to achieve different looks and moods when using the sideboard. Each drawer opens individually at any position.",
      projectsDescriptionFive: "In the current process we are facing challenges in terms of production and technical realization which will be handled by our production manager in collaboration with local artisans and experts in stone and metal production. For us it is important to be as close to the production as possible to realize the project in the highest possible quality in terms of design and execution.",
    },
    "project-five": {
      title: "BOOT DESIGN",
      titleTwo: "Boot design",
      description: "in process",
      additionalInfo: "Renovation project for a residential property, currently underway.",
      images: ["/b1.jpg", "/b2.jpg", "/b3.jpg"],
      mainImage: "/b1.jpg",
      projectsDescription: "With this boot we are currently designing for a german streetwear brand, our task was to expand the existing product line and to introduce a new category to the brand.",
      projectsDescriptionTwo: "To approach this, we took inspiration from workwear and safety boots as well as human anatomy to create a combination of organic and geometric shapes. The upper part is made out of suede mixed with nylon for the tongue and an extra layer that secures the laces. To compliment the overall volume, the inside of the shoe is made of a padded fabric. The black and grey look of the boot together with the metal details refer back to the brands DNA.",
      projectsDescriptionThree: "While creating the boot we are acting as the production manager and therefore lead the conversations and negotiations about the product. Representing a streetwear brand that wants to produce low quantities this has been a challenge for us, in which we learned how handle a rather weak negotiation position while maintaining as much control over the design and also making good economic sense.",
      projectsDescriptionFour: "The project is currently in process and will be completed this year. It is our own take on the evolution of german streetwear brands and is meant to function as an image enhancer for the brand. It also expands our know how in both streetwear design and production.",
    },
  };

  const projectKeys = Object.keys(projectDetails);
  const topProjects = projectKeys.slice(0, 3); // First four projects
  const centerProjects = projectKeys.slice(3, 6); // Last four projects
  const bottomProjects = projectKeys.slice(6, 9); // Last four projects

  const { active } = useProgress();
  const [showScrollOverlay, setShowScrollOverlay] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);

  useEffect(() => {
    if (!active) {
      const timer = setTimeout(() => {
        setShowScrollOverlay(false);
      }, 6000);
      const timer2 = setTimeout(() => {
        setShowScrollTop(true);
      }, 1500);
      const timer3 = setTimeout(() => {
        setShowScrollBottom(true);
      }, 3000);

      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [active]);


  const handleScrollOverlayHide = () => {
    setShowScrollOverlay(false);
  };

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


  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTogglePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
      audio.pause();
      setIsSoundPlaying(false);
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const progress = (currentTime / duration) * 100;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? projectDetails[selectedProject].images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === projectDetails[selectedProject].images.length - 1 ? 0 : prevIndex + 1
    );
  };


  const [currentImageIndexExp, setCurrentImageIndexExp] = useState(0);

  const imagesSet1 = [
    { src: '/s1.jpg' },
    { src: '/s2.jpg' },
    { src: '/s3.jpg' },
    { src: '/s4.jpg' }
  ];

  const images1 = [
    {
      original: "/s1.jpg",
    },
    {
      original: "/s2.jpg",
    },
    {
      original: "/s3.jpg",
    },
    {
      original: "/s4.jpg",
    },
  ];

  const imagesSet2 = [
    { src: '/emeka1.jpg' },
    { src: '/emeka2.jpg' },
    { src: '/emeka3.jpg' },
    { src: '/emeka4.jpg' },
    { src: '/emeka5.jpg' }
  ];

  const images2 = [
    {
      original: "/emeka1.jpg",
    },
    {
      original: "/emeka2.jpg",
    },
    {
      original: "/emeka3.jpg",
    },
    {
      original: "/emeka4.jpg",
    },
    {
      original: "/emeka5.jpg",
    },
  ];

  const imagesSet3 = [
    { src: '/susu6.jpg' },
    { src: '/susu5.jpg' },
    { src: '/susu4.jpg' },
  ];

  const images3 = [
    {
      original: "/susu6.jpg",
    },
    {
      original: "/susu5.jpg",
    },
    {
      original: "/susu4.jpg",
    },
  ];

  const imagesSet4 = [
    { src: '/neue1.jpg' },
    { src: '/neue2.jpg' },
    { src: '/neue3.jpg' },
  ];

  const images4 = [
    {
      original: "/neue1.jpg",
    },
    {
      original: "/neue2.jpg",
    },
    {
      original: "/neue3.jpg",
    },
  ];

  const imagesSet5 = [
    { src: '/b1.jpg' },
    { src: '/b2.jpg' },
    { src: '/b3.jpg' },
  ];

  const images5 = [
    {
      original: "/b1.jpg",
    },
    {
      original: "/b2.jpg",
    },
    {
      original: "/b3.jpg",
    },
  ];

  const prevImage = () => {
    setCurrentImageIndexExp((prevIndex) => {
      if (prevIndex === 0) {
        // If on the first image, go to the last image of the previous set
        const currentSetIndex = Math.floor(prevIndex / imagesSet1.length);
        const prevSetIndex = (currentSetIndex - 1 + [imagesSet1, imagesSet2, imagesSet3, imagesSet4, imagesSet5].length) % [imagesSet1, imagesSet2, imagesSet3, imagesSet4, imagesSet5].length;
        const prevSet = [imagesSet1, imagesSet2, imagesSet3, imagesSet4, imagesSet5][prevSetIndex];
        return prevSet.length - 1;
      } else {
        // Otherwise, move to the previous image
        return prevIndex - 1;
      }
    });
  };
  
  const nextImage = () => {
    setCurrentImageIndexExp((prevIndex) => {
      const currentSetIndex = Math.floor(prevIndex / imagesSet1.length);
      const currentSet = [imagesSet1, imagesSet2, imagesSet3, imagesSet4, imagesSet5][currentSetIndex];
      
      if (prevIndex === currentSet.length * (currentSetIndex + 1) - 1) {
        // If on the last image, go to the first image of the next set
        const nextSetIndex = (currentSetIndex + 1) % [imagesSet1, imagesSet2, imagesSet3, imagesSet4, imagesSet5].length;
        return nextSetIndex * imagesSet1.length;
      } else {
        // Otherwise, move to the next image
        return prevIndex + 1;
      }
    });
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

      <div className={`scroll-overlay ${showScrollOverlay ? "" : "hidden"}`} onClick={ handleScrollOverlayHide }>
        <div className={`scroll-top ${showScrollTop ? "visible" : ""}`}>
          <img className="scroll-element-image" src={ isMobile ? "/scrollmobile.png" : "/scrollelement.png"} />
          <h1 className="scroll-text" >Scroll to start tour</h1>
        </div>
        <div className={`scroll-bottom ${showScrollBottom ? "visible" : ""}`}>
          <i className="fa-solid fa-circle white"></i>
          <h1 className="scroll-text" >Click on items for info about the project</h1>
        </div>
      </div>

      {/* Main experience container */}
      <div className="experience">
        <CanvasContainer handleNavigationClick={ handleNavigationClick } toggleOverlayOne={toggleOverlayOne} toggleOverlayTwo={toggleOverlayTwo} toggleOverlayThree={toggleOverlayThree} toggleOverlayFour={toggleOverlayFour} toggleOverlayFive={toggleOverlayFive} />
      </div>

      {/* 3D experince overlays */}

      <CSSTransition
        in={showOverlayOne}
        timeout={1000} // Adjust timeout to match your CSS transition duration
        classNames="fade"
        unmountOnExit
      >
        <div className={`white-button-overlay ${showOverlayOne ? "active" : ""}`}>
          <button className="white-close-button" onClick={toggleOverlayOne}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="white-button-navigation" >
            <div className="white-button-navigation-texts" >
              <h1 className="container-heading" >S30 SIDEBOARD</h1>
              <h1 className="container-description" >in process</h1>
            </div>
          </div>
          <div className="white-button-content" >
            {isMobile ? (
              <div className="white-button-left">
                <ImageGallery showNav={ true } showThumbnails={ false } showFullscreenButton={ false } showPlayButton={ false } items={images1} disableSwipe={ true } />
              </div>
              ) : (
                <div className="white-button-left" >
                <img className="white-button-image" src="/s1.jpg" />
                <img className="white-button-image" src="/s2.jpg" />
                <img className="white-button-image" src="/s3.jpg" />
                <img className="white-button-image" src="/s4.jpg" />
                </div>
            )}
            <div className="white-button-right" >
              {/* <h1 className="container-heading-2" >BRAND CONCEPT</h1> */}
              <h1 className="container-description" >The s30 sideboard is the first part of our object series and represents our agency as a standalone product. We are developing the sideboard in a holistic manner, covering the design and technical development as well as the production and the brand positioning.</h1>
              <h1 className="container-description" >The task is to represent the ideas and personality of the agency in a single product. Therefore the object had to recreate a shape that is working also as a sculpture by implying a certain feeling towards the object.</h1>
              <h1 className="container-description" >Defining the feeling of the agency for us meant to work with clear edges, simplistic and yet thoughtful and new. We came to the conclusion to combine natural stone and metal which are two of our defined brand materials. Ideally we will work with pumice since it also reflects our  brand colors.</h1>
              <h1 className="container-description" >The sideboard features two separate heights of drawers, that are held by a rail that is cut into the stone sides. The lower drawers can easily be moved up and down to achieve different looks and moods when using the sideboard. Each drawer opens individually at any position.</h1>
              <h1 className="container-description" >In the current process we are facing challenges in terms of production and technical realization which will be handled by our production manager in collaboration with local artisans and experts in stone and metal production. For us it is important to be as close to the production as possible to realize the project in the highest possible quality in terms of design and execution.</h1>
              <a href="mailto:inquiries@siemensstr30.de?subject=Inquiry%20s30%20sideboard" target="_blank" rel="noopener noreferrer">
                <div className="project-overlay-links-exp">
                  <img className="project-overlay-links-image" src="/s30.png" />
                  <h1 className="project-overlay-links-text">Price on request</h1>
                </div>
              </a>
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
          <button className="white-close-button" onClick={toggleOverlayTwo}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="white-button-navigation" >
            <div className="white-button-navigation-texts" >
              <h1 className="container-heading" >EMEKA OKEREKE ART EXHIBITION</h1>
              <h1 className="container-description" >on-going partnership</h1>
            </div>
          </div>
          <div className="white-button-content" >
          {isMobile ? (
              <div className="white-button-left">
              <ImageGallery showNav={ true } showThumbnails={ false } showFullscreenButton={ false } showPlayButton={ false } items={images2} disableSwipe={ true } />
            </div>
              ) : (
                <div className="white-button-left" >
                <img className="white-button-image" src="/emeka1.jpg" />
                <img className="white-button-image" src="/emeka2.jpg" />
                <img className="white-button-image" src="/emeka3.jpg" />
                <img className="white-button-image" src="/emeka4.jpg" />
                <img className="white-button-image" src="/emeka5.jpg" />
                </div>
            )}
            <div className="white-button-right" >
              {/* <h1 className="container-heading-2" >BRAND CONCEPT</h1> */}
              <div className="project-three-extra-content-two">
                        <div className="audio-controls">
                          <button className="play-button" onClick={handleTogglePlay}>
                            {isPlaying ? <i className="fa-solid fa-stop" style={{ fontSize: '15px' }}></i> : <i className="fa-solid fa-play" style={{ fontSize: '15px' }}></i>}
                          </button>
                          <div className="progress-container">
                            <svg className="progress-circle" viewBox="0 0 40 40">
                              <circle cx="20" cy="20" r="15" fill="none" strokeWidth="1" stroke="#ccc"></circle>
                              <circle className="progress-bar" cx="20" cy="20" r="15" fill="none" strokeWidth="3" stroke="black" strokeDasharray="94" strokeDashoffset={94 - (currentTime / duration) * 94}></circle>
                            </svg>
                          </div>
                        </div>
                        <audio
                          ref={audioRef}
                          src="/podcast.wav" // Path to your audio file in the public folder
                          onTimeUpdate={handleTimeUpdate}
                          onEnded={() => setIsPlaying(false)}
                        ></audio>
                        <div className="project-three-extra-content-column" >
                          <h1 className="project-description-audio" >NKAKA: Art and Processes</h1>
                          <h1 className="project-description-audio-small" >EP09: “Water will always find its crack”. Nkata with Ahmet Öğüt</h1>
                        </div>
              </div>
              <h1 className="container-description" >After being introduced to the project by Emeka Okereke, our task was to develop a thoughtful communication for the artists artwork with the title “Art & Processes”. The artwork is part of the group exhibition “A Home for Something Unknown” at the Neuer Berliner Kunstverein.</h1>
              <h1 className="container-description" >Following the theme of dialogue and interdisciplinary design practices, which is discussed in the artwork we went ahead with a direct and collaborative approach. Speaking to Emeka revealed the objectives that lead us through the rest of the project. These being the idea of an interactive Artwork, symbolizing and encouraging communication and the themes of african artists as well as very personal memories of the artist himself and his childhood associations with Africa.</h1>
              <h1 className="container-description" >Continuing the collaboration we gathered ideas of how the central structure should look that was meant to hold the headphones and to indicate the heart of the artwork, being the five podcast episodes the artist dedicated to different black mentors. We wanted to draw references to a campfire which Emeka remembered to be a place in their backyard in Nigeria where the family would gather to tell stories under the moonlight. We came to the conclusion that we should build a structure resembling that campfire with the right height for the visitors to see each others face when sitting around it. The large black wall is meant to set the atmosphere and to lead focus onto the installation that has a circular light shining from above. Simplistic stools balance out the overall look and the information about the podcast is displayed further back on the walls. The large arrangement of the different aspects are meant to let the visitor explore the artwork slowly and in a more structured way, while leaving space for the interaction in the center of the scene. The dotted lines show the complex intertwinement and connections of African art around the world that the artist refers to as “Trans-Africanism” in his work. </h1>
              <h1 className="container-description" >The challenges of this project were to create a very clear language that leads to a real human interaction guided by the artwork. Understanding the ideas beyond what is said in the podcast and experiencing the nonverbal conversation that the artwork allows was not an easy task. The authenticity of the final result also comes from the direct dialogue we had with the artist and the personality that we were able to let the visitors take part in.</h1>
              <h1 className="container-description" >Finally the project resulted in an artwork that goes beyond the podcast itself and has touched people by enabling real conversations and interaction during the time of the exhibition in March and April 2024. As interdisciplinary artists we are happy to be part of the project and to support Emeka Okereke for future exhibitions.</h1>
              <a href="https://nkatapodcast.com/" target="_blank" rel="noopener noreferrer">
                <div className="project-overlay-links-exp">
                  <img className="project-overlay-links-image" src="/nkata.png" />
                  <h1 className="project-overlay-links-text">Nkata Podcast</h1>
                </div>
              </a>
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
          <button className="white-close-button" onClick={toggleOverlayThree}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="white-button-navigation" >
            <div className="white-button-navigation-texts" >
              <h1 className="container-heading" >SUSU ACCRA BRAND STRATEGY</h1>
              <h1 className="container-description" >on-going partnership</h1>
            </div>
          </div>
          <div className="white-button-content" >
          {isMobile ? (
              <div className="white-button-left">
              <ImageGallery showNav={ true } showThumbnails={ false } showFullscreenButton={ false } showPlayButton={ false } items={images3} disableSwipe={ true } />
            </div>
              ) : (
                <div className="white-button-left" >
                <img className="white-button-image" src="/susu6.jpg" />
                <img className="white-button-image" src="/susu5.jpg" />
                <img className="white-button-image" src="/susu4.jpg" />
                </div>
            )}
            <div className="white-button-right" >
              {/* <h1 className="container-heading-2" >BRAND CONCEPT</h1> */}
              <h1 className="container-description" >The long term partnership with Susu Accra is a very exciting opportunity for us. The set goal of the brand is to establish African luxury in the European market. Combining luxurious and yet modern design with contemporary marketing and presentation, this is a project that fits perfectly into our key strengths. Our task is to assist the brand strategically and to take on the creative direction of the brand going forward.</h1>
              <h1 className="container-description" >For the displayed project our task was to convey the idea of African luxury in a social media post and to reach a younger audience with a rather low expense. </h1>
              <h1 className="container-description" >To realize the project we have built a CGI environment that represents the freedom and lightness of the brand while also showing the artistic approach to the design. The falling fabric shows the individual inlays inspired by typical African prints that come with the bag. The video highlights the placement inside of Andreas Murkudis Berlin.</h1>
              <h1 className="container-description" >Creating a highly realistic texture for the bag was a challenge we mastered in this project, that will help the overall realism of future advertisements for the brand.</h1>
              <h1 className="container-description" >Currently we are able to extend our creative freedom in the project and plan on building a new product range that will let us reach our desired customer.</h1>
              <a href="https://susuaccra.com/" target="_blank" rel="noopener noreferrer">
                <div className="project-overlay-links-exp">
                  <img className="project-overlay-links-image" src="/susu.png" />
                  <h1 className="project-overlay-links-text">Susu Accra</h1>
                </div>
              </a>
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
            <button className="white-close-button" onClick={toggleOverlayFour}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          <div className="white-button-navigation" >
            <div className="white-button-navigation-texts" >
              <h1 className="container-heading" >NEUENDORF HOUSE BRAND BUILDING</h1>
              <h1 className="container-description" >on-going partnership</h1>
            </div>
          </div>
          <div className="white-button-content" >
          {isMobile ? (
              <div className="white-button-left">
              <ImageGallery showNav={ true } showThumbnails={ false } showFullscreenButton={ false } showPlayButton={ false } items={images4} disableSwipe={ true } />
            </div>
              ) : (
                <div className="white-button-left" >
                <img className="white-button-image" src="/neue1.jpg" />
                <img className="white-button-image" src="/neue2.jpg" />
                <img className="white-button-image" src="/neue3.jpg" />
                </div>
            )}
            <div className="white-button-right" >
              {/* <h1 className="container-heading-2" >BRAND CONCEPT</h1> */}
              <h1 className="container-description" >Our ongoing Partnership with the Neuendorf House is a project that honors us deeply, while also challenging us to do justice to the artistic masterpiece of Claudio Silverstrin and John Pawson. The House was finished in 1989 and is one of the most important architectural buildings in the world. The task is to establish the house as a brand and to expand the recognition of the house from architecture students and experts towards a global audience. </h1>
              <h1 className="container-description" >This includes the building of a social media strategy as well as content production, collaboration management with clothing and lifestyle brands that carry the same minimalistic and luxurious approach and the development of a brand strategy.</h1>
              <h1 className="container-description" >Our first steps were to renew the Instagram account by removing old content and starting a new regular post strategy with content made by renowned photographers that had visited the house before. To express our gratitude for an article by the Openhouse Magazine we created a dedicated post showing the magazine in a CGI rebuild of the house. </h1>
              <h1 className="container-description" >The reel includes an exact representation of the house that we built in 3D, to further work with the house in the digital world. Bringing the house into the digital world is part of our strategy to expand the house as a brand into different artistic worlds. The connection between the Neuendorf House and the Art world is already made not only by the impact of the architecture but also by the families online art platform Artnet. </h1>
              <h1 className="container-description" >In the ongoing partnership it will be our challenge to establish the Neuendorf House also in the new generations while maintaining the class and artistic approach of the cultural inheritance.</h1>
              <a href="https://neuendorfhouse.com/" target="_blank" rel="noopener noreferrer">
                <div className="project-overlay-links-exp">
                  <img className="project-overlay-links-image" src="/neue.png" />
                  <h1 className="project-overlay-links-text">Neuendorf House</h1>
                </div>
              </a>
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
          <button className="white-close-button" onClick={toggleOverlayFive}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="white-button-navigation" >
            <div className="white-button-navigation-texts" >
              <h1 className="container-heading" >BOOT DESIGN</h1>
              <h1 className="container-description" >in process</h1>
            </div>
          </div>
          <div className="white-button-content" >
          {isMobile ? (
              <div className="white-button-left">
                <ImageGallery showNav={ true } showThumbnails={ false } showFullscreenButton={ false } showPlayButton={ false } items={images5} disableSwipe={ true } />
              </div>
              ) : (
                <div className="white-button-left" >
                <img className="white-button-image" src="/b1.jpg" />
                <img className="white-button-image" src="/b2.jpg" />
                <img className="white-button-image" src="/b3.jpg" />
                </div>
            )}
            <div className="white-button-right" >
              {/* <h1 className="container-heading-2" >BRAND CONCEPT</h1> */}
              <h1 className="container-description" >With this boot we are currently designing for a german streetwear brand, our task was to expand the existing product line and to introduce a new category to the brand.</h1>
              <h1 className="container-description" >To approach this, we took inspiration from workwear and safety boots as well as human anatomy to create a combination of organic and geometric shapes. The upper part is made out of suede mixed with nylon for the tongue and an extra layer that secures the laces. To compliment the overall volume, the inside of the shoe is made of a padded fabric. The black and grey look of the boot together with the metal details refer back to the brands DNA.</h1>
              <h1 className="container-description" >While creating the boot we are acting as the production manager and therefore lead the conversations and negotiations about the product. Representing a streetwear brand that wants to produce low quantities this has been a challenge for us, in which we learned how handle a rather weak negotiation position while maintaining as much control over the design and also making good economic sense.</h1>
              <h1 className="container-description" >The project is currently in process and will be completed this year. It is our own take on the evolution of german streetwear brands and is meant to function as an image enhancer for the brand. It also expands our know how in both streetwear design and production.</h1>
            </div>
          </div>
        </div>
      </CSSTransition>

      {/* Overlay button to trigger full overlay */}
      <div className="overlay">
        <div className="overlay-navigation">
          <div className="navigation-icon" onClick={handleFullNavigationIconClick}>
            <img className="nav-icon" src={iconSrc} />
          </div>
          {/* Conditional rendering based on visibility state */}
          {isFullNavigationVisible && (
            <>
              <button className="navigation-text" onClick={handleNavigationClick} >ARCHIVE</button>
              <button className="navigation-text" onClick={handleNavigationIconClick} >IMPRESSUM</button>
            </>
          )}
        </div>
      </div>


      {/* IMPRESSUM PAGES */}

      <CSSTransition
        in={showNavigationIconOverlay}
        timeout={1000} // Adjust timeout to match your CSS transition duration
        classNames="fade"
        unmountOnExit
      >
      <div className={`navigation-icon-overlay ${showNavigationIconOverlay ? "active" : ""}`}>
        <div className="overlay">
          {isFullNavigationMenu && (
            <div className="overlay-navigation">
              <div className="navigation-icon" onClick={handleFullNavigationIconClick}>
                <img className="nav-icon" src={iconSrc2} />
              </div>
                {isFullNavigationVisible && (
                  <>
                    <button className="navigation-text-back" onClick={handleNavigationIconCloseClick} >SHOWROOM</button>
                    <button className="navigation-text-back" onClick={handleNavigationIconNavigateClick} >ARCHIVE</button>
                  </>
                )}
            </div>
          )}
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
              <li><h1 className="container-description-list">Umsatzsteuer - Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: beantragt</h1></li>
              <li><h1 className="container-description">Handelsregister des Amtsgerichts </h1></li>
              <li><h1 className="container-description">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</h1></li>
            </ul>
          </div>

          <div className="overlay-texts" >
            <h1 className="container-heading" >HAFTUNG FÜR INHALTE</h1>
            <ul className="overlay-list" >
              <li><h1 className="container-description">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</h1></li>
              <li><h1 className="container-description">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</h1></li>
            </ul>
          </div>

          <div className="overlay-texts" >
            <h1 className="container-heading" >HAFTUNG FÜR LINKS</h1>
            <ul className="overlay-list" >
              <li><h1 className="container-description">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</h1></li>
              <li><h1 className="container-description">Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</h1></li>
            </ul>
          </div>

          <div className="overlay-texts" >
            <h1 className="container-heading" >URHEBERRECHT</h1>
            <ul className="overlay-list" >
              <li><h1 className="container-description">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</h1></li>
              <li><h1 className="container-description">Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</h1></li>
              <li><h1 className="container-description">Quelle: <a href="https://www.e-recht24.de" target="_blank" >https://www.e-recht24.de</a></h1></li>
            </ul>
          </div>
          
          <div className="overlay-texts" >
            <h1 className="container-heading" >DATENSCHUTZERKLÄRUNG</h1>
            <div className="overlay-list-container" >
              <ul className="overlay-list" >
                <li><h1 className="container-description">1. Datenschutz auf einen Blick</h1></li>
                <li><h1 className="container-small-heading">ALLGEMEINE HINWEISE</h1></li>
                <li><h1 className="container-description">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">DATENERFASSUNG AUF DIESER WEBSITE</h1></li>
                <li><h1 className="container-description">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h1></li>
                <li><h1 className="container-description">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</h1></li>
                <li><h1 className="container-description">Wie erfassen wir Ihre Daten?</h1></li>
                <li><h1 className="container-description">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</h1></li>
                <li><h1 className="container-description">Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</h1></li>
                <li><h1 className="container-description">Wofür nutzen wir Ihre Daten?</h1></li>
                <li><h1 className="container-description">Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</h1></li>
                <li><h1 className="container-description">Welche Rechte haben Sie bezüglich Ihrer Daten?</h1></li>
                <li><h1 className="container-description">Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</h1></li>
                <li><h1 className="container-description">Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-description">2. Hosting und Content Delivery Networks (CDN)</h1></li>
                <li><h1 className="container-small-heading">EXTERNES HOSTING</h1></li>
                <li><h1 className="container-description">Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</h1></li>
                <li><h1 className="container-description">Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).</h1></li>
                <li><h1 className="container-description">Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-description">3. Allgemeine Hinweise und Pflichtinformationen</h1></li>
                <li><h1 className="container-small-heading">DATENSCHUTZ</h1></li>
                <li><h1 className="container-description">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</h1></li>
                <li><h1 className="container-description">Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</h1></li>
                <li><h1 className="container-description">Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">HINWEIS ZUR VERANTWORTLICHEN STELLE</h1></li>
                <li><h1 className="container-description">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</h1></li>
                <li><h1 className="container-description">Moritz Otto</h1></li>
                <li><h1 className="container-description">Siemensstraße 30</h1></li>
                <li><h1 className="container-description">12459 Berlin</h1></li>
                <li><h1 className="container-description">Telefon: +49 (0) 1727994533</h1></li>
                <li><h1 className="container-description">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">WIDERRUF IHRER EINWILLIGUNG ZUR DATENVERARBEITUNG</h1></li>
                <li><h1 className="container-description">Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</h1></li>
                <li><h1 className="container-description">WIDERSPRUCHSRECHT GEGEN DIE DATENERHEBUNG IN BESONDEREN FÄLLEN SOWIE GEGEN DIREKTWERBUNG (ART. 21 DSGVO)</h1></li>
                <li><h1 className="container-description">WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</h1></li>
                <li><h1 className="container-description">WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">BESCHWERDERECHT BEI DER ZUSTÄNDIGEN AUFSICHTSBEHÖRDE</h1></li>
                <li><h1 className="container-description">Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">RECHT AUF DATENÜBERTRAGBARKEIT</h1></li>
                <li><h1 className="container-description">Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">SSL- BZW. TLS-VERSCHLÜSSELUNG</h1></li>
                <li><h1 className="container-description">Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</h1></li>
                <li><h1 className="container-description">Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">AUSKUNFT, LÖSCHUNG UND BERICHTIGUNG</h1></li>
                <li><h1 className="container-description">Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">RECHT AUF EINSCHRÄNKUNG DER VERARBEITUNG</h1></li>
                <li><h1 className="container-description">Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</h1></li>
                <li><h1 className="container-description">Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</h1></li>
                <li><h1 className="container-description">Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</h1></li>
                <li><h1 className="container-description">Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</h1></li>
                <li><h1 className="container-description">Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</h1></li>
                <li><h1 className="container-description">Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">WIDERSPRUCH GEGEN WERBE-E-MAILS</h1></li>
                <li><h1 className="container-description">Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-description">4. Datenerfassung auf dieser Website</h1></li>
                <li><h1 className="container-small-heading">COOKIES</h1></li>
                <li><h1 className="container-description">Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese selbst löschen oder eine automatische Lösung durch Ihren Webbrowser erfolgt.</h1></li>
                <li><h1 className="container-description">Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</h1></li>
                <li><h1 className="container-description">Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.</h1></li>
                <li><h1 className="container-description">Technisch notwendige Cookies (z.B. Warenkorb-Cookies) werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Wir haben ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung unserer Dienste. Andere Cookies werden nur mit Ihrer Einwilligung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO gespeichert. Die Einwilligung ist jederzeit für die Zukunft widerrufbar.</h1></li>
                <li><h1 className="container-description">Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</h1></li>
                <li><h1 className="container-description">Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber im Rahmen dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">SERVER-LOG-DATEIEN</h1></li>
                <li><h1 className="container-description">Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</h1></li>
                <li><h1 className="container-description">Browsertyp und Browserversion</h1></li>
                <li><h1 className="container-description">verwendetes Betriebssystem</h1></li>
                <li><h1 className="container-description">Referrer URL</h1></li>
                <li><h1 className="container-description">Hostname des zugreifenden Rechners</h1></li>
                <li><h1 className="container-description">Uhrzeit der Serveranfrage</h1></li>
                <li><h1 className="container-description">IP-Adresse</h1></li>
                <li><h1 className="container-description">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</h1></li>
                <li><h1 className="container-description">Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">KONTAKTFORMULAR</h1></li>
                <li><h1 className="container-description">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</h1></li>
                <li><h1 className="container-description">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</h1></li>
                <li><h1 className="container-description">Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">ANFRAGE PER E-MAIL, TELEFON ODER TELEFAX</h1></li>
                <li><h1 className="container-description">Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</h1></li>
                <li><h1 className="container-description">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.</h1></li>
                <li><h1 className="container-description">Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-description">5. Plugins und Tools</h1></li>
                <li><h1 className="container-small-heading">GOOGLE WEB FONTS</h1></li>
                <li><h1 className="container-description">Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</h1></li>
                <li><h1 className="container-description">Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google WebFonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Webseitenbetreiber hat ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf seiner Webseite. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</h1></li>
                <li><h1 className="container-description">Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.</h1></li>
                <li><h1 className="container-description">Weitere Informationen zu Google Web Fonts finden Sie unter https://developers.google.com/fonts/faq und in der Datenschutzerklärung von Google: https://policies.google.com/privacy?hl=de.</h1></li>
                <li><h1 className="container-description">Quelle: https://www.e-recht24.de</h1></li>
              </ul>
            </div>
            <div className="contact-spacing" />
          </div>

        </div>
      </div>
      </CSSTransition>

      <CSSTransition
        in={showNavigationIconOverlay2}
        timeout={1000} // Adjust timeout to match your CSS transition duration
        classNames="fade"
        unmountOnExit
      >
      <div className={`navigation-icon-overlay ${showNavigationIconOverlay2 ? "active" : ""}`}>
      <div className="overlay">
          {isFullNavigationMenu && (
            <div className="overlay-navigation">
              <div className="navigation-icon" onClick={handleFullNavigationIconClick}>
                <img className="nav-icon" src={iconSrc2} />
              </div>
                {isFullNavigationVisible && (
                  <>
                    <button className="navigation-text-back" onClick={handleNavigationIconCloseClick2} >ARCHIVE</button>  
                    <button className="navigation-text-back" onClick={handleNavigationIconNavigateClick2} >SHOWROOM</button>  
                  </>
                )}
            </div>
          )}
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
              <li><h1 className="container-description-list">Umsatzsteuer - Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: beantragt</h1></li>
              <li><h1 className="container-description">Handelsregister des Amtsgerichts </h1></li>
              <li><h1 className="container-description">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</h1></li>
            </ul>
          </div>

          <div className="overlay-texts" >
            <h1 className="container-heading" >HAFTUNG FÜR INHALTE</h1>
            <ul className="overlay-list" >
              <li><h1 className="container-description">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</h1></li>
              <li><h1 className="container-description">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</h1></li>
            </ul>
          </div>

          <div className="overlay-texts" >
            <h1 className="container-heading" >HAFTUNG FÜR LINKS</h1>
            <ul className="overlay-list" >
              <li><h1 className="container-description">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</h1></li>
              <li><h1 className="container-description">Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</h1></li>
            </ul>
          </div>

          <div className="overlay-texts" >
            <h1 className="container-heading" >URHEBERRECHT</h1>
            <ul className="overlay-list" >
              <li><h1 className="container-description">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</h1></li>
              <li><h1 className="container-description">Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</h1></li>
              <li><h1 className="container-description">Quelle: <a href="https://www.e-recht24.de" target="_blank" >https://www.e-recht24.de</a></h1></li>
            </ul>
          </div>
          
          <div className="overlay-texts" >
            <h1 className="container-heading" >DATENSCHUTZERKLÄRUNG</h1>
            <div className="overlay-list-container" >
              <ul className="overlay-list" >
                <li><h1 className="container-description">1. Datenschutz auf einen Blick</h1></li>
                <li><h1 className="container-small-heading">ALLGEMEINE HINWEISE</h1></li>
                <li><h1 className="container-description">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">DATENERFASSUNG AUF DIESER WEBSITE</h1></li>
                <li><h1 className="container-description">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h1></li>
                <li><h1 className="container-description">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</h1></li>
                <li><h1 className="container-description">Wie erfassen wir Ihre Daten?</h1></li>
                <li><h1 className="container-description">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</h1></li>
                <li><h1 className="container-description">Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</h1></li>
                <li><h1 className="container-description">Wofür nutzen wir Ihre Daten?</h1></li>
                <li><h1 className="container-description">Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</h1></li>
                <li><h1 className="container-description">Welche Rechte haben Sie bezüglich Ihrer Daten?</h1></li>
                <li><h1 className="container-description">Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</h1></li>
                <li><h1 className="container-description">Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-description">2. Hosting und Content Delivery Networks (CDN)</h1></li>
                <li><h1 className="container-small-heading">EXTERNES HOSTING</h1></li>
                <li><h1 className="container-description">Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</h1></li>
                <li><h1 className="container-description">Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).</h1></li>
                <li><h1 className="container-description">Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-description">3. Allgemeine Hinweise und Pflichtinformationen</h1></li>
                <li><h1 className="container-small-heading">DATENSCHUTZ</h1></li>
                <li><h1 className="container-description">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</h1></li>
                <li><h1 className="container-description">Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</h1></li>
                <li><h1 className="container-description">Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">HINWEIS ZUR VERANTWORTLICHEN STELLE</h1></li>
                <li><h1 className="container-description">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</h1></li>
                <li><h1 className="container-description">Moritz Otto</h1></li>
                <li><h1 className="container-description">Siemensstraße 30</h1></li>
                <li><h1 className="container-description">12459 Berlin</h1></li>
                <li><h1 className="container-description">Telefon: +49 (0) 1727994533</h1></li>
                <li><h1 className="container-description">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">WIDERRUF IHRER EINWILLIGUNG ZUR DATENVERARBEITUNG</h1></li>
                <li><h1 className="container-description">Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</h1></li>
                <li><h1 className="container-description">WIDERSPRUCHSRECHT GEGEN DIE DATENERHEBUNG IN BESONDEREN FÄLLEN SOWIE GEGEN DIREKTWERBUNG (ART. 21 DSGVO)</h1></li>
                <li><h1 className="container-description">WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</h1></li>
                <li><h1 className="container-description">WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">BESCHWERDERECHT BEI DER ZUSTÄNDIGEN AUFSICHTSBEHÖRDE</h1></li>
                <li><h1 className="container-description">Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">RECHT AUF DATENÜBERTRAGBARKEIT</h1></li>
                <li><h1 className="container-description">Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">SSL- BZW. TLS-VERSCHLÜSSELUNG</h1></li>
                <li><h1 className="container-description">Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</h1></li>
                <li><h1 className="container-description">Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">AUSKUNFT, LÖSCHUNG UND BERICHTIGUNG</h1></li>
                <li><h1 className="container-description">Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">RECHT AUF EINSCHRÄNKUNG DER VERARBEITUNG</h1></li>
                <li><h1 className="container-description">Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</h1></li>
                <li><h1 className="container-description">Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</h1></li>
                <li><h1 className="container-description">Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</h1></li>
                <li><h1 className="container-description">Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</h1></li>
                <li><h1 className="container-description">Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</h1></li>
                <li><h1 className="container-description">Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">WIDERSPRUCH GEGEN WERBE-E-MAILS</h1></li>
                <li><h1 className="container-description">Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-description">4. Datenerfassung auf dieser Website</h1></li>
                <li><h1 className="container-small-heading">COOKIES</h1></li>
                <li><h1 className="container-description">Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese selbst löschen oder eine automatische Lösung durch Ihren Webbrowser erfolgt.</h1></li>
                <li><h1 className="container-description">Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</h1></li>
                <li><h1 className="container-description">Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.</h1></li>
                <li><h1 className="container-description">Technisch notwendige Cookies (z.B. Warenkorb-Cookies) werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Wir haben ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung unserer Dienste. Andere Cookies werden nur mit Ihrer Einwilligung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO gespeichert. Die Einwilligung ist jederzeit für die Zukunft widerrufbar.</h1></li>
                <li><h1 className="container-description">Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</h1></li>
                <li><h1 className="container-description">Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber im Rahmen dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">SERVER-LOG-DATEIEN</h1></li>
                <li><h1 className="container-description">Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</h1></li>
                <li><h1 className="container-description">Browsertyp und Browserversion</h1></li>
                <li><h1 className="container-description">verwendetes Betriebssystem</h1></li>
                <li><h1 className="container-description">Referrer URL</h1></li>
                <li><h1 className="container-description">Hostname des zugreifenden Rechners</h1></li>
                <li><h1 className="container-description">Uhrzeit der Serveranfrage</h1></li>
                <li><h1 className="container-description">IP-Adresse</h1></li>
                <li><h1 className="container-description">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</h1></li>
                <li><h1 className="container-description">Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">KONTAKTFORMULAR</h1></li>
                <li><h1 className="container-description">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</h1></li>
                <li><h1 className="container-description">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.</h1></li>
                <li><h1 className="container-description">Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-small-heading">ANFRAGE PER E-MAIL, TELEFON ODER TELEFAX</h1></li>
                <li><h1 className="container-description">Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</h1></li>
                <li><h1 className="container-description">Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.</h1></li>
                <li><h1 className="container-description">Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.</h1></li>
              </ul>
              <ul className="overlay-list" >
                <li><h1 className="container-description">5. Plugins und Tools</h1></li>
                <li><h1 className="container-small-heading">GOOGLE WEB FONTS</h1></li>
                <li><h1 className="container-description">Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</h1></li>
                <li><h1 className="container-description">Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google WebFonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Webseitenbetreiber hat ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf seiner Webseite. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.</h1></li>
                <li><h1 className="container-description">Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.</h1></li>
                <li><h1 className="container-description">Weitere Informationen zu Google Web Fonts finden Sie unter https://developers.google.com/fonts/faq und in der Datenschutzerklärung von Google: https://policies.google.com/privacy?hl=de.</h1></li>
                <li><h1 className="container-description">Quelle: https://www.e-recht24.de</h1></li>
              </ul>
            </div>
            <div className="contact-spacing" />
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
            {isFullNavigationMenu && (
              <div className="overlay-navigation">
                <div className="navigation-icon" onClick={handleFullNavigationIconClick}>
                  <img className="nav-icon" src={iconSrc2} />
                </div>
                {/* Conditional rendering based on visibility state */}
                {isFullNavigationVisible && (
                  <>
                    <button className="navigation-text-back" onClick={handleCloseOverlay} >SHOWROOM</button>
                    <button className="navigation-text-back" onClick={handleNavigationIconClick2} >IMPRESSUM</button>
                  </>
                )}
              </div>
              )}
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
                    <div className="container-one-image">
                      <img className="container-one-image-img" src={projectDetails[projectName].mainImage} />
                    </div>
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
                    <div className="container-one-image">
                      <img className="container-one-image-img" src={projectDetails[projectName].mainImage} />
                    </div>
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


            </div>
          </div>
        </div>
      </CSSTransition>

      {selectedProject && (
              <div className={`${selectedProject}-overlay`}>
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
                {isMobile && (
                  
                    <div className="white-button-navigation" >
                      <div className="white-button-navigation-texts" >
                        <h1 className="container-heading">{projectDetails[selectedProject].title}</h1>
                        <h1 className="container-description">{projectDetails[selectedProject].description}</h1>
                      </div>
                      <button className="white-close-button" onClick={handleCloseProjectOverlay}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                )}
                <div className="projects-overlay-content" >
                  <div className="project-left-overlay" >
                    {projectDetails[selectedProject].images.map((imageName, index) => (
                      <img
                        key={index}
                        className="project-image"
                        src={isMobile ? projectDetails[selectedProject].images[currentImageIndex] : imageName}
                      />
                    ))}
                      <button className="project-left-overlay-button" onClick={handlePrevImage}><i class="fa-solid fa-chevron-right"></i></button>
                      <button className="project-left-overlay-button-two"  onClick={handleNextImage}><i class="fa-solid fa-chevron-left"></i></button>
                  </div>
                  <div className="project-right-overlay" >
                    {!isMobile && (
                      <div className="project-top">
                        <h1 className="project-top-text">{projectDetails[selectedProject].title}</h1>
                        <button className="close-button" onClick={handleCloseProjectOverlay}>
                          <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    )}
                    {!isMobile && selectedProject === "project-three" && (
                      <div className="project-three-extra-content">
                        <div className="audio-controls">
                          <button className="play-button" onClick={handleTogglePlay}>
                            {isPlaying ? <i className="fa-solid fa-stop" style={{ fontSize: '15px' }}></i> : <i className="fa-solid fa-play" style={{ fontSize: '15px' }}></i>}
                          </button>
                          <div className="progress-container">
                            <svg className="progress-circle" viewBox="0 0 40 40">
                              <circle cx="20" cy="20" r="15" fill="none" strokeWidth="1" stroke="#ccc"></circle>
                              <circle className="progress-bar" cx="20" cy="20" r="15" fill="none" strokeWidth="3" stroke="black" strokeDasharray="94" strokeDashoffset={94 - (currentTime / duration) * 94}></circle>
                            </svg>
                          </div>
                        </div>
                        <audio
                          ref={audioRef}
                          src="/podcast.wav" // Path to your audio file in the public folder
                          onTimeUpdate={handleTimeUpdate}
                          onEnded={() => setIsPlaying(false)}
                        ></audio>
                        <div className="project-three-extra-content-column" >
                          <h1 className="project-description-audio" >NKAKA: Art and Processes</h1>
                          <h1 className="project-description-audio-small" >EP09: “Water will always find its crack”. Nkata with Ahmet Öğüt</h1>
                        </div>
                    </div>
                    )}
                    {/* {isMobile && (
                      <h1 className="container-heading-brand" >BRAND CONCEPT</h1>
                    )} */}
                    {isMobile && selectedProject === "project-three" && (
                      <div className="project-three-extra-content">
                        <div className="audio-controls">
                          <button className="play-button" onClick={handleTogglePlay}>
                            {isPlaying ? <i className="fa-solid fa-stop" style={{ fontSize: '15px' }}></i> : <i className="fa-solid fa-play" style={{ fontSize: '15px' }}></i>}
                          </button>
                          <div className="progress-container">
                            <svg className="progress-circle" viewBox="0 0 40 40">
                              <circle cx="20" cy="20" r="15" fill="none" strokeWidth="1" stroke="#ccc"></circle>
                              <circle className="progress-bar" cx="20" cy="20" r="15" fill="none" strokeWidth="3" stroke="black" strokeDasharray="94" strokeDashoffset={94 - (currentTime / duration) * 94}></circle>
                            </svg>
                          </div>
                        </div>
                        <audio
                          ref={audioRef}
                          src="/podcast.wav" // Path to your audio file in the public folder
                          onTimeUpdate={handleTimeUpdate}
                          onEnded={() => setIsPlaying(false)}
                        ></audio>
                        <div className="project-three-extra-content-column" >
                          <h1 className="project-description-audio" >NKAKA: Art and Processes</h1>
                          <h1 className="project-description-audio-small" >EP09: “Water will always find its crack”. Nkata with Ahmet Öğüt</h1>
                        </div>
                    </div>
                    )}
                    <p className="project-description" >{projectDetails[selectedProject].projectsDescription}</p>
                    <p className="project-description" >{projectDetails[selectedProject].projectsDescriptionTwo}</p>
                    <p className="project-description" >{projectDetails[selectedProject].projectsDescriptionThree}</p>
                    <p className="project-description" >{projectDetails[selectedProject].projectsDescriptionFour}</p>
                    <p className="project-description" >{projectDetails[selectedProject].projectsDescriptionFive}</p>
                    <a href={projectDetails[selectedProject].projectLink} target="_blank" rel="noopener noreferrer">
                      <div className="project-overlay-links">
                      <img className="project-overlay-links-image" src={projectDetails[selectedProject].smallImage} />
                      <h1 className="project-overlay-links-text">{projectDetails[selectedProject].imageTitle}</h1>
                      </div>
                    </a>
                    </div>
                </div>
              </div>
            )}
    </>
  );
}

export default App;



