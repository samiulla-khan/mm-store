import React from "react";
import Header from '../components/Header';
import SliderComponent from '../components/Slider';
import MensMiniComponent from "../components/MensMiniComponent";
// import MainPageMiniComponents from './components/MainPageMiniComponents';
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div>
      <Header />
      <div className="body-section">
        <SliderComponent />
        <MensMiniComponent />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
