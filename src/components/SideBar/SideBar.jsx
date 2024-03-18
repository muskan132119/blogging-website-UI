import React from "react";
import "./Sidebar.css";
import sidebarimg from "./background.jpg";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItems">
        <span className="sidebartitle">ABOUT</span>
        
          <img src={sidebarimg} alt="" />{" "}
        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in impedit deserunt. Molestias atque.
        </p>
        <div className="categories">
          <span className="categorie-title">CATEGORIES</span>
          <div className="categoriesItems">
            <span className="categoriesItem">Life</span>
            <span className="categoriesItem">Music</span>
            <span className="categoriesItem">Style</span>
            <span className="categoriesItem">Sport</span>
            <span className="categoriesItem">Tech</span>
            <span className="categoriesItem">cinema</span>
          </div>
          <div className="follow">
            <div className="followus">Follow Us</div>
            <div className="follow-icons">
            <i className=" topIcons fa-brands fa-square-facebook"></i>
            <i className="topIcons fa-brands fa-square-twitter"></i>
            <i className="topIcons fa-brands fa-square-pinterest"></i>
            <i className="topIcons fa-brands fa-square-instagram"></i>
            </div>
          
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
