import React, { useEffect, useState, useRef } from 'react';
// import { Bar } from 'react-chartjs-2';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, defaults } from 'chart.js/auto'
import './chart.css'

import Crypto from '../crypto/Crypto';


defaults.maintainAspectRatio = false;
defaults.responsive = true
const Chart = ({ chartValue }) => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const res = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const { data } = await res.json();
        setData(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    let ChartValue;

    switch (chartValue) {
        case "Pie":
            ChartValue = Pie;
            break;

        case "Line":
            ChartValue = Line;
            break;

        case "Bar":
            ChartValue = Bar;
            break;

        default:
            ChartValue = Line;
    }


    // Chart data and options
    const chartData = {
        labels: data.map((item) => item.Year),
        datasets: [
            {
                label: 'Population',
                data: data.map((item) => item.Population),
                backgroundColor: ["green", "blue", "pink"],
                borderColor: 'green',
                borderWidth: 2,
                yAxisID: 'population',
                xAxisID: 'nations',
            },
        ],
    };

    const options = {

        scales: {
            population: {
                type: 'linear', // Specify the scale type for the y-axis
                position: 'left',
                title: {
                    display: true,
                    text: 'Population',
                },
            },
            nations: {
                type: 'category', // Specify the scale type for the x-axis
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Nation',
                },
            },
        },
    };

    return (
        <div className='chart-container'>
            <div className='chart'>
                <ChartValue data={chartData} options={options} className='chart' />
            </div>

            <div className="reviews">
                <div className="heading">
                    <h3>Trader Reviews</h3>
                </div>
                <div className='review-list'>
                    <p>✔️ Carbon Cell has truly revolutionized the way I power my devices</p>
                    <p> ✔️The long-lasting durability and reliable performance have made it my go-to choice for all my energy needs..</p>
                    <p>✔️ Its eco-friendly composition and efficient energy output make it a standout option in the market. </p>
                    <p>✔️ I highly recommend Carbon Cell to anyone looking for a sustainable and high-performing power solution. It's definitely a game-changer!.</p>
                    <p> ✔️ "I've tried various energy solutions, but Carbon Cell stands out for its exceptional durability and sustainable composition. It's a smart choice for anyone looking to reduce their environmental footprint."</p>
                    <p> ✔️ Carbon Cell's innovative technology delivers powerful and long-lasting energy, making it an essential companion for my on-the-go lifestyle. I'm thoroughly impressed with its reliability and efficiency."</p>
                </div>
            </div>
        </div>
    )


};

export default Chart;
