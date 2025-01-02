import React from "react";
import style from "./navbar.module.css";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className={`${style.bg} `}>
        <div className=" p-0  d-flex justify-content-between align-items-center container">
          <Link
            className={`${style.text} m-2 ms-0 p-2 ps-5 w-50 text-decoration-none text-white h1`}
            to=""
          >
            START FRAMEWORK
          </Link>
          <ul className=" d-flex list-unstyled gap-3 container m-0 w-50 align-items-end justify-content-center pe-0">
            <li>
              <NavLink className="text-decoration-none text-white" to="about">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-decoration-none text-white"
                to="protfolio"
              >
                PROTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink className="text-decoration-none text-white" to="contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
