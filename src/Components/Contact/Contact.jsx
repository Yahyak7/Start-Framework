import React from "react";
import style from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={`pt-4`}>
        <h1 className="mb-3 text-uppercase">CONTACT COMPONENT</h1>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className={`${style.line} line me-3`}></div>
          <i className={`${style.text} fa-solid fa-star `}></i>
          <div className={`${style.line} line ms-3`}></div>
        </div>

        <form className="w-50 p-3 mx-auto mt-5 ">
          <label
            for="userName"
            className={`${style.label} position-relative top-0`}
          >
            userName :{" "}
          </label>
          <input
            id="userName"
            type="text"
            placeholder="userName"
            name="userName"
            className="form-control border-0 border-bottom py-3 position-relative "
          />
          <label
            for="userAge"
            className={`${style.label} position-relative top-0`}
          >
            userAge :{" "}
          </label>
          <input
            id="userAge"
            type="text"
            placeholder="userAge"
            name="userAge"
            className="form-control border-0 border-bottom py-3 position-relative "
          />
          <label
            for="userEmail"
            className={`${style.label} position-relative top-0`}
          >
            userEmail :{" "}
          </label>
          <input
            id="userEmail"
            type="text"
            placeholder="userEmail"
            name="userEmail"
            className="form-control border-0 border-bottom py-3 position-relative "
          />
          <label
            for="userPassword"
            className={`${style.label} position-relative top-0`}
          >
            userPassword :{" "}
          </label>
          <input
            id="userPassword"
            type="text"
            placeholder="userPassword"
            name="userPassword"
            className="form-control border-0 border-bottom py-3 position-relative "
          />
          <button className={`${style.bg} ${style.btn} mt-4  text-white   `}>
            {" "}
            send Message{" "}
          </button>
        </form>
      </div>
    </>
  );
}
