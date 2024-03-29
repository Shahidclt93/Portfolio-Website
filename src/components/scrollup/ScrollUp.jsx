import React from "react";
import "./scrollup.css";

const SrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    // When the scroll is higher than 560 viewport height, 
    // add the show-scroll class to the tag with the scrolltop class.
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default SrollUp;
