import React from "react";
import style from "./home.module.css"
import logo from "../../assets/1999625.png"

export default function Home() {
  return <>
      <div className={`${style.home} p-5 `}>
      <img src={logo} className={`${style.image}`} alt="" />
      <h1 className={`${style.text}`}>START FRAMEWORK</h1>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className={`${style.line} line me-3`}></div>
        <i className={`${style.text} fa-solid fa-star `}></i>
        <div className={`${style.line} line ms-3`}></div>
      </div>
      <div className={`${style.text}  pb-5`}>Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </>
}
