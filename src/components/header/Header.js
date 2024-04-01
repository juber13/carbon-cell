import React from 'react'
import './header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../sidebar/Screenshot 2024-03-30 142944.png'



const Header = ({ setShowSideBar, showSideBar, }) => {
    return (
        <div className='heading container'>
            <div className='user gap'>
                <div className='header-content'>
                    <img src={logo} alt="" style={{ width: "100px" }} />
                    <button className='btn start-trading-btn small'> Start Trading</button>
                </div>
                <div className='header-content'>
                    <GiHamburgerMenu className='icon hamburgur' style={{ color: "#fff" }} onClick={() => setShowSideBar(!showSideBar)} />
                    <div className='mobile_view'>
                        <span>👋 Hello</span>
                        {" "}
                        <span style={{ color: "tomato" , fontSize : "20px" }}>Juber</span>
                    </div>
                </div>
            </div>
            <div className="text-field">
                <div className='user-info-text'>
                    <h2>Hello , <span style={{ color: "tomato" }}>Juber</span> 👋</h2>
                    <p>Welcome to <span style={{ color: "#2ab42a" }}>Spot Trading !</span></p>
                </div>
                <div className="btn-filed">
                    <button className='btn start-trading-btn'> Start Trading</button>
                </div>
            </div>
        </div>
    )
}

export default Header