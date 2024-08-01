import React from "react";
import Reaveal from "../../utils/Reaveal";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <Reaveal axis="x" axisValue="75" AnimeDur="0.50">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>
      </Reaveal>
        <Reaveal axis="y" axisValue="75" AnimeDur="0.30">
      <div className="skills__container container grid">
          <div className="skills__content">
            <div className="skills__box">
              <div className="skills__group">
                <div className="skills__data">
                  <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__level">Advanced</span>
                  </div>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">React Js</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">Node JS</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">Git</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
      </div>
        </Reaveal>
    </section>
  );
};

export default Skills;
