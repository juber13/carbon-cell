import React, { useRef, useState } from 'react'
import './sidebar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHome, IoCubeOutline } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { LuArrowDownUp } from "react-icons/lu";
import { RiFileHistoryLine } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";




const Sidebar = () => {

    const [listMenuOne] = useState([
        { title: "Home", icon: <IoHome /> },
        { title: "Organization", icon: <HiBuildingOffice2 /> },
        { title: "Assest", icon: <IoCubeOutline /> },
        { title: "Trade", icon: <LuArrowDownUp /> },
        { title: "History", icon: <IoHome /> },
        { title: "Wallet", icon: <BiWallet /> },
    ])

    const [listMenuTwo] = useState([
        { title: "Notifications", icon: <IoMdNotificationsOutline />, Badge: <small className='notification'>12</small> },
        { title: "Suport", icon: <MdContactSupport /> },
        { title: "Settings", icon: <IoMdSettings /> },
    ])

    const element = useRef(null)
    const highlighter = (event) => {
        const linkCoods = event.target.getBoundingClientRect();
        const coords = {
            width: Math.floor(linkCoods.width),
            height: Math.floor(linkCoods.height),
            top: Math.floor(linkCoods.top - 10),
            left: Math.floor(linkCoods.left)
        };
        element.current.style.width = `${coords.width}px`;
        element.current.style.height = `${coords.height}px`;
        element.current.style.transform = `translate(${coords.left}px, ${coords.top}px)`; // Adjusted the order of coordinates
    };




    return (
        <div className='sidebar-container'>
            <span className='highlight flex' ref={element}></span>
            <div className="header flex ">
                <h3>CARBON CELL</h3>
                <GiHamburgerMenu className='icon hamburgur' />
            </div>

            <div className='searchbar  align-item'>
                <CiSearch className='icon search' fill='#fff' />
                <input type="text" placeholder='Search' />
            </div>

            <div className='content'>
                <div className="list-items">
                    <ul className='gap'>
                        {listMenuOne.map(({ title, icon }) => <li onMouseEnter={highlighter}>{icon}{title}</li>)}
                    </ul>
                </div>

                <div className="footer-menu">
                    <ul className='gap' >
                        {listMenuTwo.map(({ icon, title, Badge }) => {
                            return (
                                <>
                                    {
                                        Badge ? (<li onMouseEnter={highlighter} className='flex'><span className='flex'>{icon}{title}</span>{Badge}</li>)
                                            : (<li onMouseEnter={highlighter}>{icon}{title}</li>)
                                    }
                                </>
                            );
                        })}
                    </ul>
                </div>

                <div className="user-profile flex">
                    <div className='user-image'>
                        <img src="../../../images/1651987312849.jpeg" alt="user-avatar" /></div>
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