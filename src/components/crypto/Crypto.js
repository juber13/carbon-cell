import React, { useEffect, useState } from 'react'
import { MdContactSupport } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";



import './crypto.css'

const Crypto = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await res.json();
        setData(data.bpi);
    }

    useEffect(() => {
        fetchData();
    }, []);


    const cards = Object.keys(data).map((currencyCode) => {
        const currency = data[currencyCode];
        return (
            <div key={currency.code} className="card">
                <div className="cyrypto_heading flex">
                    <p style={{ color: "#fff", fontWeight: "bold" }}>{currency.code} </p>
                    <h2 className='currency-icon' dangerouslySetInnerHTML={{ __html: currency.symbol }}></h2>
                </div>
                <div className='description'>
                    <h3>{currency.description}</h3>
                </div>

                <div className='rate flex'>
                    <p>{currency.rate}</p>
                    <VscGraphLine className='icon' />
                </div>
                <div className='trade flex'>
                    <MdContactSupport className='icon' />
                    <button className='btn'>Trade</button>

                </div>
            </div>
        );
    });

    return <div className='currency-card'>{cards}</div>;
}

export default Crypto