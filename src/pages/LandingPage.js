import React from "react";
import Header from '../components/Header';
import SliderComponent from '../components/Slider';
import MensMiniComponent from "../components/MensMiniComponent";
// import MainPageMiniComponents from './components/MainPageMiniComponents';
import WomensMiniComponent from "../components/WomensMiniComponent";
import Footer from "../components/Footer";
import MobileMiniComponent from "../components/MobileMiniComponent";

function LandingPage() {
  return (
    <div>
      <Header />
      <div className="body-section">
        <SliderComponent />
        <MensMiniComponent />
        <WomensMiniComponent />
        <MobileMiniComponent />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
