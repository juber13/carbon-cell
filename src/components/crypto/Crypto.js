import React, { useEffect, useState } from 'react'

import './crypto.css'

const Crypto = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await res.json();
        // console.log(data.bpi)
        setData(data.bpi);
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data)

    const cards = Object.keys(data).map((currencyCode) => {
        const currency = data[currencyCode];
        return (
            <div key={currency.code} className="card">
                <p style={{ color: "#fff" }}>{currency.code} <span dangerouslySetInnerHTML={{ __html: currency.symbol }}></span></p>
                <small>{currency.description}</small>
                <p>{currency.rate}</p>
                <p>{currency.rate_float}</p>
            </div>
        );
    });

    return <div className='currency-card'>{cards}</div>;
}

export default Crypto