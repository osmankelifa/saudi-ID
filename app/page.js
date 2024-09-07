// pages/index.js
import dynamic from "next/dynamic";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Services from "./components/Services";
import Footer from "./components/Footer";
import About from "./components/About";
import NumberBlock from "./components/NumberBlock";
import Testimonials from "./components/Testimonials";
import FeaturesList from "./components/FeatureList";
import LogoArea from "./components/LogoArea";
import NewsSection from "./components/NewsSection";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />

      <Services />
      <About />
      {/* <NumberBlock /> */}
      <Testimonials />
      <FeaturesList />
      <NewsSection />
      <LogoArea />

      <Footer />
    </>
  );
}
