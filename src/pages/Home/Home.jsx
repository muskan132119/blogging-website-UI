import React from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/Posts/Posts";

import SideBar from "../../components/SideBar/SideBar";


import "./Home.css";
const Home = () => {
  return (
    <>
      <Header />
      <div className="side-post">
       
        <Posts />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
