import React from 'react';
import { Link } from 'react-router-dom'; 
import Hiragana from './Hiragana';
import axios from 'axios';
import './gakkou.css';

const { REACT_APP_BACKEND_URL } = process.env;


//axios.get(`${REACT_APP_BACKEND_URL}/${req.body.bango}`);


const Gakkou = (props) => {
  
    return (
        <div className="gakkou">
            <h1>Okaeri! Welcome!</h1>
            
            <div className="infobox">
            <Link to="/gakkou/howto">
                <button type="button" className="hiraButton">
                   Study Hiragana
                </button>
            </Link>
            <Link to="/gakkou/hiragana">
                <button type="button" className="hiraButton">
                   Practice Hiragana
                </button>
            </Link>
            </div>
        </div>
    )
}

export default Gakkou;