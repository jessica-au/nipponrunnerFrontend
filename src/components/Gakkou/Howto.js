import React, { useState, useEffect } from 'react';
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

    }, [])


    return (
        <div className="gakkou">
            <h1>Hiragana Chart</h1>
            
            <div className="howto">
            <Link to="/gakkou/howto">
                <button type="button" className="hiraButton" type="button">
                   Click to expand
                </button>
            </Link>
            </div>
        </div>
    );
}

export default Howto;
