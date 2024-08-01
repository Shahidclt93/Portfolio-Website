import React from "react";
import "./portfolio.css";
import projectScreenshot1 from "../../assets/ecommerce.png";
import projectScreenshot2 from "../../assets/blogApp.png";
import projectScreenshot3 from "../../assets/taskManager.png";
import projectScreenshot4 from "../../assets/theShop.png";
import Reaveal from "../../utils/Reaveal";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <Reaveal axis="x" axisValue="75" AnimDelay="0.50">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Recent works</span>
      </Reaveal>
      <Reaveal axis="y" axisValue="75" AnimDelay="0.30">


      <div className="portfolio__container container grid">
        <div className="portfolio__content">
          <img src={projectScreenshot1} alt="Full Stack E-Commerce Website" />
          <div className="project">
            <h3 className="portfolio__title">Full Stack E-Commerce Website</h3>
            <p className="portfolio__description">
              A comprehensive full-stack Ecommerce is built using the MERN
              stack, combining React JS, and Node.js to create a robust and
              scalable e-commerce platform for electronic products including
              admin panel.
            </p>
            <p className="portfolio__tech-stack">
              React JS | Express | Node JS | Redux | MongoDB | Cloudinary
            </p>
          </div>
          <div className="portfolio__links">
            <a
              href="https://github.com/Shahidclt93/EMGadgets_MERN_ecommerce_full_stack"
              className="portfolio__button"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://emgadgets-mern-ecommerce.onrender.com"
              className="portfolio__button"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="portfolio__content">
          <img src={projectScreenshot2} alt="Blog App" />
          <div className="project">
            <h3 className="portfolio__title">Blog App</h3>
            <p className="portfolio__description">
              NexusInfo-BlogApp is a React JS website developed for users to
              create, share, and manage their own blogs effortlessly. The
              application also includes functionality to save blog posts locally
              using localStorage.
            </p>
            <p className="portfolio__tech-stack">
              React JS | Context Api | CSS
            </p>
          </div>
          <div className="portfolio__links">
            <a
              href="https://github.com/Shahidclt93/NexusInfo-BlogApp"
              className="portfolio__button"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://nexusinfo-blog-app.onrender.com"
              className="portfolio__button"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="portfolio__content">
          <img src={projectScreenshot3} alt="Task Management Web App" />
          <div className="project">
            <h3 className="portfolio__title">Task Management Web App</h3>
            <p className="portfolio__description">
              This web app perform CRUD operations for boards and tasks, with
              form validations.Tasks can be dragged and dropped across columns,
              with an option for dark mode. It saves data in local storage.
            </p>
            <p className="portfolio__tech-stack">
              React JS | Tailwind CSS | Redux Toolkit
            </p>
          </div>
          <div className="portfolio__links">
            <a
              href="https://github.com/Shahidclt93/Taskify-TaskManagement-webapp"
              className="portfolio__button"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://taskify-task-management.vercel.app"
              className="portfolio__button"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="portfolio__content">
          <img src={projectScreenshot4} alt="Ecommerce Website" />
          <div className="project">
            <h3 className="portfolio__title">Ecommerce Website</h3>
            <p className="portfolio__description">
            TheShop is a fully responsive ecommerce website, maximum compatiblities in all mobile devices, built using HTML, CSS, and JavaScript.
            </p>
            <p className="portfolio__tech-stack">
              HTML | CSS | Javascript
            </p>
          </div>
          <div className="portfolio__links">
            <a
              href="https://github.com/Shahidclt93/ecom-shop"
              className="portfolio__button"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://theshop-ecommerce.vercel.app"
              rel="noreferrer"
              className="portfolio__button"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
      </Reaveal>
    </section>
  );
};

export default Portfolio;
