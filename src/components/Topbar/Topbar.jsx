import React from "react";
import profileImg from "./image1.jpg";
import "./Topbar.css";
import { Link } from "react-router-dom";
const Topbar = () => {
  const user=false;
  return (
    <>
      <div className="topbar">
        <div className="top-left">
          <i className=" topIcons fa-brands fa-square-facebook"></i>
          <i className="topIcons fa-brands fa-square-twitter"></i>
          <i className="topIcons fa-brands fa-square-pinterest"></i>
          <i className="topIcons fa-brands fa-square-instagram"></i>
        </div>
        <div className="top-center">
          <ul className="toplist">
            <li className="toplistItem">
              <Link className='link'to="/">HOME</Link>

            </li>
            <li className="toplistItem"><Link className='link'to="/">ABOUT</Link>
            </li>
            <li className="toplistItem"><Link className='link'to="/">CONTACT</Link>
          </li>
            <li className="toplistItem"><Link className='link'to="/write">WRITE</Link>
          </li>
            <li className="toplistItem">
            {user && "LOGOUT"}
        </li>
        
          </ul>
        </div>
        <div className="top-right">
          {
            user ? (
              <img  className="top-Image"src={profileImg} alt="" />
        
            ):(
              <ul className="toplist">
                <li className="toplistItem">
                  <Link className='link'to="/login">LOGIN</Link>
                </li>
              <li className="toplistItem"><Link className='link'to="/Register">REGISTER</Link>
              </li>
              {/* <Link className='link'to="/login">LOGIN</Link> */}
              
              </ul>
            )



          }
           {/* <img  className="top-Image"src={profileImg} alt="" /> */}
           <i className="search-icon fa-solid fa-magnifying-glass"></i>  
        </div>
      </div>
    </>
  );
};

export default Topbar;
