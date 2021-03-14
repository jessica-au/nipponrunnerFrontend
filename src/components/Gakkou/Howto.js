import React from 'react';
import { Link } from 'react-router-dom'; 
import Hiragana from './Hiragana';
import axios from 'axios';

const { REACT_APP_BACKEND_URL } = process.env;


const Howto = () => {
    return (
        <div className="howto">
            <h1>Hiragana Chart</h1>
            
            <div className="howto">
            <Link to="/gakkou/howto">
                <button type="button" className="hiraButton">
                   Click to expand
                </button>
            </Link>
            </div>
        </div>
    );
}

export default Howto;
