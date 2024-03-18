import React from "react";
import "./SinglePost.css";
import image3 from "./imagess.jpg";
const SinglePost = () => {
  return (
    <div className="single-post">
      SinglePost
      <div className="single-postItems">
        <div className="postimg">
        <img src={image3} alt="" />
        </div>
        
        <h1 className="singlepost-title">Lorem ipsum dolor sit amet.
        <div className="post-edit">
        <i className= "postedit-icon fa-solid fa-pen-to-square"></i>
          <i class=" postedit-icon fa-solid fa-trash-can"></i>
          </div>
          </h1>
          <div className="singlepost-info">
            <span className="author-name">Author :Muskan </span>
            <span className="time">1 hr ago</span>
        </div>
        <p className="singlepost-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos sed ut minus adipisci corporis vero sequi. Saepe, quod eum totam fuga necessitatibus rerum delectus aut adipisci qui. Cum, ut vel ad illo dolorum harum. Quis ut suscipit doloribus architecto iste?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ex vero dolorem quis amet voluptate, possimus eos quidem quasi dignissimos, eveniet magnam corrupti explicabo, alias minus voluptatem quae enim provident?Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum inventore nostrum nesciunt porro corporis cupiditate pariatur atque laudantium aliquam. Omnis corrupti enim animi quae nam ut saepe eaque placeat.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
