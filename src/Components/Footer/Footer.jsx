import React from "react";
import style from "./footer.module.css";
export default function Footer() {
  return (
    <div className={`${style.bg} `}>
      <div className=" p-5 ">
        <div className="d-flex justify-content-around">
          <div className="w-25">
            <h3 className={`${style.text}`}>LOCATION</h3>
            <p className={`${style.text}`}>2215 John Daniel Drive</p>
            <p className={`${style.text}`}>Clark, MO 65243</p>
          </div>
          <div className="w-25">
            <h3 className={`${style.text}`}>AROUND THE WEB</h3>
            <div>
              <i
                className={`${style.icon} ${style.text} mx-1 fa-brands fa-facebook `}
              ></i>
              <i
                className={`${style.icon} ${style.text} mx-1 fa-brands fa-twitter `}
              ></i>
              <i
                className={`${style.icon} ${style.text} mx-1 fa-brands fa-linkedin `}
              ></i>
              <i
                className={`${style.icon} ${style.text} mx-1 fa-solid fa-globe `}
              ></i>
            </div>
          </div>
          <div className="w-25">
            <div>
              <h3 className={`${style.text} `}>ABOUT FREELANCER</h3>
              <p className={`${style.text} `}>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className={`${style.foot} ${style.text} p-3 `}>
        <p className="d-flex justify-content-center align-items-center">Copyright © Your Website 2021</p>
        </div>
    </div>
  );
}
