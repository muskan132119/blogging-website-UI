import React from 'react'
import './write.css'
// import writeimage from "./imagess.jpg";
const write = () => {
  return (
    <div className="write">
      <img className="write-image"src="https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg" alt="" />
      <form action="write-form">
        <div className="write-form-group">
          <label htmlFor="fileInput">
          <i className="writeIcon fa-solid fa-plus" ></i>
          </label>

          <input type="file" id="fileInput" style={{display:"none"}}/>
          <input type="text" placeholder="Title" className='writeInput' autoFocus={true}/>
        </div>
        <div className="write-form-group">
         <textarea placeholder='Tell your story...'
         type="text"
         className='writeInput'>

         </textarea>
         
        </div>
        <button className="writesubmit">
          publish
        </button>
      </form>

    </div>
  )
}

export default write