import LaptopImg1 from "../../../images/src-assets/Home/laptop1.png";
import LaptopImg2 from "../../../images/src-assets/Home/laptop2.png";
import LaptopImg3 from "../../../images/src-assets/Home/laptop3.png";
import LaptopImg4 from "../../../images/src-assets/Home/laptop4.png";
import Animation from "../../../images/src-assets/Home/animation.png";
import Games from "../../../images/src-assets/Home/games.png";
import Chatbots from "../../../images/src-assets/Home/chatbots.png";
import AugReality from "../../../images/src-assets/Home/augreality.png";
import { useState } from "react";
import "../../kSComponents/homeContent.css";

export default function HomeLaptop() {
  const [displayedContent, setDisplayedContent] = useState({
    component: LaptopImg1,
    name: "home-animation",
  });

  const [activeDot, setActiveDot] = useState("home-animation");

  function handleContentClick(name) {
    switch (name) {
      case "home-animation":
        setDisplayedContent({
          component: LaptopImg1,
          name: "home-animation",
        });
        setActiveDot("home-animation");
        break;
      case "home-games":
        setDisplayedContent({
          component: LaptopImg2,
          name: "home-games",
        });
        setActiveDot("home-games");
        break;
      case "home-chatbots":
        setDisplayedContent({
          component: LaptopImg3,
          name: "home-chatbots",
        });
        setActiveDot("home-chatbots");
        break;
      case "home-aug-reality":
        setDisplayedContent({
          component: LaptopImg4,
          name: "home-aug-reality",
        });
        setActiveDot("home-aug-reality");
        break;

      default:
        break;
    }
  }

  return (
    <div className="homeSection1">
      <div className="whatWeOffer">
        <h1 id="homeOfferH1">What we offer</h1>
        <p id="homeOfferP">
          The Creative Problem Solving programme is series of digital creation
          projects aimed to encourage self-motivation and student agency,
          designed by New Zealand’s leading IT industry experts and schools.
        </p>
        <h3 id="homeOfferH3">What will students create?</h3>
        <div className="homeOfferImgs">
          <img
            src={Animation}
            alt="AnimationImg"
            id="home-animation"
            className={`home-create ${
              displayedContent.name === "home-animation" ? "active" : ""
            } `}
            onClick={() => handleContentClick("home-animation")}
          />
          <img
            src={Games}
            alt="GameImg"
            id="home-games"
            className={`home-create ${
              displayedContent.name === "home-games" ? "active" : ""
            } `}
            onClick={() => handleContentClick("home-games")}
          />
          <img
            src={Chatbots}
            alt="ChatbotsImg"
            id="home-chatbots"
            className={`home-create ${
              displayedContent.name === "home-chatbots" ? "active" : ""
            } `}
            onClick={() => handleContentClick("home-chatbots")}
          />
          <img
            src={AugReality}
            alt="AugRealityImg"
            id="home-aug-reality"
            className={`home-create ${
              displayedContent.name === "home-aug-reality" ? "active" : ""
            } `}
            onClick={() => handleContentClick("home-aug-reality")}
          />
        </div>
      </div>
      <div className="home-laptop-container">
        <div className="home-laptop-image">
          <img src={displayedContent.component} />
        </div>
        <div className="home-laptop-dots">
          <span
            className={`home-laptop-dot ${
              activeDot === "home-animation" ? "active" : ""
            }`}
            onClick={() => handleContentClick("home-animation")}
          ></span>
          <span
            className={`home-laptop-dot ${
              activeDot === "home-games" ? "active" : ""
            }`}
            onClick={() => handleContentClick("home-games")}
          ></span>
          <span
            className={`home-laptop-dot ${
              activeDot === "home-chatbots" ? "active" : ""
            }`}
            onClick={() => handleContentClick("home-chatbots")}
          ></span>
          <span
            className={`home-laptop-dot ${
              activeDot === "home-aug-reality" ? "active" : ""
            }`}
            onClick={() => handleContentClick("home-aug-reality")}
          ></span>
        </div>
      </div>
    </div>
  );
}
