import React from 'react'
import './header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import userAvtar from '../sidebar/1651987312849.jpeg'



const Header = ({setShowSideBar , showSideBar}) => {
    return (
        <div className='heading container'>
           <div  className='user'>
            <GiHamburgerMenu className='icon hamburgur' onClick={() =>  setShowSideBar(!showSideBar)}/>
            <img src={userAvtar} alt="user-avatar" />
           </div>
            <div className="text-field gap">
                <h1>Hello , <span style={{ color: "tomato" }}>Brooklyn Simmons</span> 👋</h1>
                <h2>Welcome to <span style={{ color: "#2ab42a" }}>Spot Trading !</span></h2>
            </div>
            <div className="btn-filed">
                <button className='btn start-trading-btn'> Start Trading</button>
            </div>
        </div>
    )
}

export default Header