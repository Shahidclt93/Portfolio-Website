import React, { useState } from "react";
import Reaveal from "../../utils/MotionWrapper/Reaveal";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <Reaveal axis="x" axisValue="75" AnimeDur="0.50">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>
      </Reaveal>
      <Reaveal axis="y" axisValue="-75" AnimeDur="0.70">
        <div className="services__container container grid">
          <div className="services__content">
            <div>
              <i className="uil uil-document-layout-center services__icon"></i>
              <h3 className="services__title">
                State Management <br /> and Integration
              </h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(1)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
              onClick={(e) => {
                if (e.target !== e.currentTarget) {
                  return;
                }
                setToggleState(0);
              }}
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-title">
                  {" "}
                  State Management <br /> and Integration
                </h3>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Implementing Redux for efficient state management in
                      complex applications.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Integrating RESTful APIs endpoints to fetch.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Manipulate data within React.js applications.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Tests code to ensure code reliability.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">
                UI <br /> Design
              </h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(2)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
              onClick={(e) => {
                if (e.target !== e.currentTarget) {
                  return;
                }
                setToggleState(0);
              }}
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-title">UI Design</h3>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Creating responsive and interactive user interfaces using
                      React.js.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Developing Single Page Applications for seamless
                      navigation and improved performance.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Building reusable and modular components to streamline
                      development and maintainability.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <i className="uil uil-file-check-alt services__icon"></i>
              <h3 className="services__title">
                Optimization and <br /> Consultation
              </h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(3)}>
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
              onClick={(e) => {
                if (e.target !== e.currentTarget) {
                  return;
                }
                setToggleState(0);
              }}
            >
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <h3 className="services__modal-title">
                  Optimization and <br /> Consultation
                </h3>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Optimizing React.js applications for faster load times and
                      improved efficiency.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Reviews existing codebases to enhance readability and
                      maintainability.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Providing consultation on best practices and performance
                      optimization, along with conducting training sessions on
                      React.js development.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Reaveal>
    </section>
  );
};

export default Services;
