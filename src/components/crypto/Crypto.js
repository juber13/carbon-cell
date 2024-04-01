import React, { useEffect, useState } from 'react'
import { MdContactSupport } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";
import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";
import { CiSquareInfo } from "react-icons/ci";


import axios from 'axios';

import { coins } from '../../data/coin'


import './crypto.css'

const Crypto = () => {
    const [data, setData] = useState([]);
    const fetchCoins = async () => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=sparkline=false")
            .then(res => setData(res.data))
            .catch(err => console.log(err))

    }

    useEffect(() => {
        fetchCoins();
    }, []);

    console.log(data)


    return (
        <div className='currency-card'>
            {data.map(curr => {
                return (
                    <div className='card'>
                        <div className="cyrypto_heading flex">
                            <img src={curr.image} alt="" width={"40px"} />
                            <p style={{ color: "#fff", fontWeight: "bold" }}>{curr.symbol.toLocaleUpperCase()} </p>
                        </div>

                        <div className='description'>
                            <h3>{curr.name}</h3>
                        </div>

                        <div className='rate flex'>
                            <p style={{ fontWeight: "bold" }}>{curr.current_price} $</p>
                            <small style={{ fontWeight: "bold" }}>{curr.price_change_percentage_24h} $</small>
                            <span>
                                {curr.price_change_percentage_24h < 0 ?
                                    <IoMdTrendingDown size={20} color="red" />
                                    : <IoMdTrendingUp size={20} color="green" />
                                }
                            </span>
                        </div>
                        <div className='trade flex'>
                            <CiSquareInfo className='icon' style={{ fontSize: "2rem" }} />
                            <button className='btn'>Trade</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Crypto