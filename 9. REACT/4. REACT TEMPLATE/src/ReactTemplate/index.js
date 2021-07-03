import React from "react";
// importing css
import "../style.css";
// import "../owl.carousel.min.css";
// importing components
import Navbar from "./Components/navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import FunFact from "./Components/FunFact";
import AppScreenshot from "./Components/AppScreenshot";
import DownloadApp from "./Components/DownloadApp";
import HowItWork from "./Components/HowItWork";
import Testimonial from "./Components/Testimonial";
import PricingPlan from "./Components/PricingPlan";
import TeamMember from "./Components/TeamMember";
import Faq from "./Components/Faq";
import GetInTouch from "./Components/GetInTouch";
import DarkMode from "./Components/DarkMode";
import VideoPopup from "./Components/VideoPopup";
import Footer from "./Components/Footer";
const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FunFact />
      <AppScreenshot />
      <DownloadApp />
      <HowItWork />
      <Testimonial />
      <PricingPlan />
      <TeamMember />
      <Faq />
      <GetInTouch />
      <DarkMode />
      <VideoPopup />
      <Footer />
    </>
  );
};

export default Index;
