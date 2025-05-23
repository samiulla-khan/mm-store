import React from "react";
import Header from '../components/Header';
import SliderComponent from '../components/Slider';
import MensMiniComponent from "../components/MensMiniComponent";
// import MainPageMiniComponents from './components/MainPageMiniComponents';
import WomensMiniComponent from "../components/WomensMiniComponent";
import Footer from "../components/Footer";
import MobileMiniComponent from "../components/MobileMiniComponent";
import ElectronicsMiniComponent from "../components/ElectronicsMiniComponent";



function LandingPage() {
  return (
    <div>
      <Header />
      <div className="body-section">
        <SliderComponent />
        <MensMiniComponent />
        <WomensMiniComponent />
        <MobileMiniComponent />
        <ElectronicsMiniComponent />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
