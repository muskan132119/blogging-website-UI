import React from 'react'
import './Single.css'
import SinglePost from '../../components/SinglePost/SinglePost'
import SideBar from '../../components/SideBar/SideBar'
const Single = () => {
  return (
    <div className='single'>
        <SinglePost/>
        <SideBar/>
    </div>
  )
}

export default Single