import React from 'react';

const Welcome = () => {
    console.log(`>>>> inside Welcome component`)
    return (
        <div className="information">
           <h1>Welcome</h1>
            
            <div className="welcome">At NipponRunner, we provide you with an engaging way to learn your hiragana and master the basics to begin your journey learning the Japanese language smoothly. </div>
        </div>
    )
}

export default Welcome;