import React from "react";
import "./home.css";
import Social from "../home/Social";
import Data from "./Data";
import ScrollDown from "../scroll/ScrollDown";
import Reaveal from "../utils/Reaveal";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__content grid">
          <Reaveal axis="x" axisValue="-75" AnimDelay="0.50">
            <Social />
          </Reaveal>
          <Data />
          <Reaveal axis="x" axisValue="75" AnimDelay="0.80">
            <div className="home__img"></div>
          </Reaveal>
        </div>
        <Reaveal axis="y" axisValue="75" AnimDelay="1">
          <ScrollDown />
        </Reaveal>
      </div>
    </section>
  );
};

export default Home;
