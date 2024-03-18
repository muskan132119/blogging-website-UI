import React from 'react'
import './Setting.css';
import SideBar from '../../components/SideBar/SideBar'

export default function setting() {
  return (
    <div className="settings">
        <div className="setting-wrapper">
            <div className="setting-title">
                <span className="setting-update">Update your account</span>
                <span className="setting-delete">Delete account</span>
            </div>
            <form className="setting-form">
                <label >profile Picture</label>
                <div className="settingPP">
                   <img  src="https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='user name'/>
                <label>Email</label>
                <input type="email" placeholder='abc@gmail.com'/>
                <label >Password</label>
                <input type="password"/>
                <button className="settingsubmit">Update</button>


            </form>
        </div>
        <SideBar/>
    </div>
  )
}
