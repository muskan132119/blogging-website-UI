import React from 'react'
import './Post.css'
import postimage from './postimage.jpg'
const Post = () => {
  return (
 <div className="post">
    <img src={postimage} alt="" />
    <div className="post-info">
        <div className="post-category">
            <span >Music</span>
            <span >Style</span>
        </div>
        <div className="postTitle">
            Lorem ipsum, dolor sit amet 
        </div>
        
       <div className="post-time">1 hr Ago</div>
       <span className="post-bio">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum commodi harum quae perferendis, cumque vero fugiat exercitationem, cum reprehenderit distinctio natus accusantium quo assumenda reiciendis omnis maxime iusto voluptatibus Lorem ipsum dolor sit, amet consectetur adipisicing elit. At illo laudantium ab facere totam adipisci alias beatae fugiat autem voluptates.
       </span>
    </div>
 </div>

  )
}

export default Post