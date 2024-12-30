import React, { Component } from 'react';
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import "../styles/nav.css";

export default class Nav() {
    const location =  useLocation();
    const getNavPositionClass = () => {
      switch (location.pathname) {
        case "/" :
          return "nav-about";
        case "/skills" :
          return "nav-skills";
        case "/projects" :
          return "nav-projects";
        case "/contact" :
          return "nav-contact";
        default :
          return "";
      }
    }
  render() {
    return (
       <div>
        <img src={astronautHelmet} />
        <img src={deadEye} />
        <img src={stack} />
        <img src={envelope} />
       </div>

    );
  }
}
