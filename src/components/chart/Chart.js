import React from 'react';
import './chart.css'
import LineChart from './LineChart';
import DoughnutChart from './Doughnut';


const Chart = () => {
    return (
        <div className='chart-container'>
            <div className='chart gap'>
                <div>
                    <p style={{ color: "green" }}>USA Population Line Chart</p>
                </div>
                <LineChart className="line-chart" />

                <div className="more flex">
                    <p>View Complete Details</p>
                    <button className='more-btn'>More...</button>
                </div>
            </div>
            <div className='chart gap'>
                <div>
                    <p style={{ color: "green" }}>Doughnut Chart</p>
                </div>
                <DoughnutChart className="line-chart" />
                <div className="more flex">
                    <p >Learn More</p>
                    <button className='more-btn'>More...</button>
                </div>
            </div>

            <div className="chart gap">
                <div className="reviews-heading">
                    <p style={{ color: "green" }}>Trader Reviews</p>
                </div>
                <div className='review-list'>
                    <p><small style={{ fontSize: "20px" }}>👤</small> Carbon Cell has truly revolutionized the way I power my devices</p>
                    <p><small style={{ fontSize: "20px" }}>👤</small> The long-lasting durability and reliable performance have made it my go-to choice for all my energy needs..</p>
                    <p><small style={{ fontSize: "20px" }}>👤</small> Its eco-friendly composition and efficient energy output make it a standout option in the market. </p>
                    <p><small style={{ fontSize: "20px" }}>👤</small> I highly recommend Carbon Cell to anyone looking for a sustainable and high-performing power solution. It's definitely a game-changer!.</p>
                    <p><small style={{ fontSize: "20px" }}>👤</small> The long-lasting durability and reliable performance have made it my go-to choice for all my energy needs..</p>

                </div>

                <button className='more-btn'>All Reviews!</button>
            </div>
        </div>
    )


};

export default Chart;
