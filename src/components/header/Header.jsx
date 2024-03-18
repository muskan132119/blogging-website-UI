import React from 'react'
import image2 from './blogimg.jpg'
import './Header.css'
const Header = () => {
  return (
    <div className="header">
    <div className="headertitle">
        <span className='headertitle-m'>React & Node</span>
        <span className='Headertitle-l'>Blog</span>
        
    </div>
   
    <img className='back-img' src={image2} alt="" />
    
   
</div>
  )
}

export default Header