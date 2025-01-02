import React from "react";
import style from "./about.module.css";

export default function About() {
  return (
    <>
      <div className={`${style.about} p-5`}>
        <h1 className={`${style.text} pt-5`}>ABOUT COMPONENTS</h1>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className={`${style.line} line me-3`}></div>
          <i className={`${style.text} fa-solid fa-star `}></i>
          <div className={`${style.line} line ms-3`}></div>
        </div>
        <div className="container">
        <div className="row px-5">
          <div className=" col-md-6 ps-md-5">
            <p className={`${style.text} text-start pb-5`}>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className=" col-md-6 pe-5">
            <p className={`${style.text} text-start pb-5`}>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
}
