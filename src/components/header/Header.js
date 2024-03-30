import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='heading container'>
            <div className="text-field gap">
                <h1>Hello , <span style={{ color: "tomato" }}>Brooklyn Simmons</span> 👋</h1>
                <h2>Welcome to <span style={{ color: "#2ab42a" }}>Spot trading !</span></h2>
            </div>
            <div className="btn-filed">
                <button className='btn start-trading-btn'> Start Trading</button>
            </div>
        </div>
    )
}

export default Header