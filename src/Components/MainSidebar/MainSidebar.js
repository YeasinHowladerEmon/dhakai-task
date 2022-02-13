import React from "react";
import "../Share/AllStyle/MainSidebar.css";
import { NavLink } from "react-router-dom";
import logo from "../image/Group 1156.png";
import search from "../image/Group 5983.png";
import home from "../image/Group 5984.png";
import a1 from "../image/Group 5982.png";
import a2 from "../image/Group 5981.png";
import a3 from "../image/Group 5980.png";
import a4 from "../image/Group 5979.png";
import a5 from "../image/Group 5978.png";

const routes = [
  {
    path: "/Bag",
    img: a1
  },
  {
    path: "/TShirt",
    img: a2
  },
  {
    path: "/dashboard",
    img: a3
  },
  {
    path: "/dashboard",
    img: a4
  },
  {
    path: "/dashboard",
    img: a5
  }
];

const MainSidebar = () => {
  return (
    <>
      <div className="mainSidebar">
        <div className=" logo">
          <img src={logo} alt="logo" />
        </div>
        <NavLink as="div" to="/" className="img-text home">
          <img src={home} alt="home" />
        </NavLink>
        <div className="img-text">
          <img src={search} alt="search" />
        </div>

        <section className="routes">
          {routes.map((route, index) => (
            <NavLink className="img-text" to={route.path} key={index}>
              <img src={route.img} alt={route.img} />
            </NavLink>
          ))}
        </section>
      </div>
    </>
  );
};

export default MainSidebar;
