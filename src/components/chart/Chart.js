import React, { useEffect, useState, useRef } from 'react';
// import { Bar } from 'react-chartjs-2';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'


const Chart = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const res = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const { data } = await res.json();
        setData(data);
    }

    useEffect(() => {
        fetchData();
    }, []);



    // Chart data and options
    const chartData = {
        labels: data.map((item) => item.Year),
        datasets: [
            {
                label: 'Population',
                data: data.map((item) => item.Population),
                backgroundColor: ["green"],
                borderColor: 'green',
                borderWidth: 2,
                yAxisID: 'population', // Specify the y-axis scale ID
                xAxisID: 'nations', // Specify the x-axis scale ID
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
        <div style={{ background: "#1a1e1c", color: "#fff", width: "600px", height: "300px", border: "1px solid #2ab42a", borderRadius: "8px", marginTop: "20px" , Boxshadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }} className='chart-container'>
            <Line data={chartData} options={options} />
        </div>
    )


};

export default Chart;
