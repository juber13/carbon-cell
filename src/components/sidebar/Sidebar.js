import React, { useRef, useState } from 'react'
import './sidebar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHome, IoCubeOutline } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { LuArrowDownUp } from "react-icons/lu";
import { RiFileHistoryLine } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdContactSupport , MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

import userAvtar from './1651987312849.jpeg'
import logo from './Screenshot 2024-03-30 142944.png'




const Sidebar = () => {

      const [isSidebarActive , setIsSideBar] = useState(true)

    //  list menu one
    const [listMenuOne] = useState([
        { title: "Home", icon: <IoHome /> },
        { title: "Organization", icon: <HiBuildingOffice2 /> },
        { title: "Assest", icon: <IoCubeOutline /> },
        { title: "Trade", icon: <LuArrowDownUp /> },
        { title: "History", icon: <RiFileHistoryLine /> },
        { title: "Wallet", icon: <BiWallet /> },
    ])

    // list menu two

    const [listMenuTwo] = useState([
        { title: "Notifications", icon: <IoMdNotificationsOutline /> },
        { title: "Suport", icon: <MdContactSupport /> },
        { title: "Settings", icon: <IoMdSettings /> },
    ]);

    const element = useRef(null)


    //  make highliter span 
    const highlighter = (event) => {
        if (event.target.nodeName === "LI") {

            const linkCoods = event.target.getBoundingClientRect();
            const coords = {
                width: Math.floor(linkCoods.width),
                height: Math.floor(linkCoods.height),
                top: Math.floor(linkCoods.top - 10),
                left: Math.floor(linkCoods.left)
            };
            element.current.style.width = `${coords.width}px`;
            element.current.style.height = `${coords.height}px`;
            element.current.style.padding = "0.8rem";
            element.current.style.transform = `translate(${coords.left}px, ${coords.top}px)`; // Adjusted the order of coordinates
        }
    };

    // hight light menu with active class
    const handleActive = (event) => {
        console.log(event.target.nodeName)
        if (event.target.nodeName === "LI") {
            document.querySelectorAll('li').forEach(item => item.classList.remove('active'));
            if (event.target.classList.contains('active')) event.target.classList.remove('active')
            else event.target.classList.add('active')
        }
    }

    return (
        <div className={isSidebarActive ? "sidebar-container" : " sidebar-container sidebar_active"}>
            <span className='highlight flex' ref={element}></span>
            <div className="header flex ">
                <img src={logo} alt="logo" className='logo' />
                <MdOutlineKeyboardArrowLeft className='icon left-arrow' onClick={() => setIsSideBar(!isSidebarActive)} />
            </div>

            <div className='searchbar  align-item'>
                <CiSearch className='icon search' fill='#fff' />
                <input type="text" placeholder='Search' />
            </div>

            <div className='content'>
                <div className="list-items">
                    <ul className='gap' >
                        {listMenuOne.map(({ title, icon }, index) =>
                            <li onClick={handleActive} onMouseEnter={highlighter}
                                className={index === 0 && 'active'}> {icon} {title}
                            </li>)}
                    </ul>
                </div>

                <div className="footer-menu">
                    <ul className='gap' >
                        {listMenuTwo.map(({ icon, title }) =>
                            <li onClick={handleActive} onMouseEnter={highlighter}> {icon} {title}</li>)
                        }
                    </ul>
                </div>

                <div className="user-profile flex">
                    <div className='user-image'>
                        <img src={userAvtar} alt="user-avatar" /></div>
                    <div className='user-info'>
                        <h5>Brooklyn Simmons</h5>
                        <small className='email'>brooklyn@simmons.com</small>
                    </div>
                    <div className="dot-btn">
                        <BsThreeDotsVertical className='icon threedot' />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Sidebar