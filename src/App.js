import React, { useEffect } from "react";
import Header from "./components/header/Header";
import WebFont from "webfontloader";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins:300,400,500,600,700"],
      },
    });
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
        <Footer />
        <ScrollUp />
    </>
  );
};

export default App;
