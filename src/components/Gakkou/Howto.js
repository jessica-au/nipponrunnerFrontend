import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom'; 
import Hiragana from './Hiragana';
import axios from 'axios';

const { REACT_APP_BACKEND_URL } = process.env;



const Howto = () => {

    const [allHira, setAllHira] = useState([])

    useEffect(() => {
        const fetchHira = async (req, res) => {
            const response = await axios.get(`${REACT_APP_BACKEND_URL}/hira/allHira`)
            const data = await response.data
            setAllHira(data)
        }
        fetchHira();

    }, []);
    
    const hiraChart = allHira.map((eachHira) => {

        return <button
            key={eachHira.ji}
            className="hiragana">
            {eachHira.ji} {eachHira.romaji}</button>
    }
    );



    return (
        <div className="hiraContainer">
            <h1>Hiragana Chart</h1>
            <div className="hiraRow">
                {hiraChart}
            </div>
           
        </div>
    );
}

export default Howto;
