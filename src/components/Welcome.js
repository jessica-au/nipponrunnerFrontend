import React from 'react';

const Welcome = () => {
    console.log(`>>>> inside Welcome component`)
    return (
        <div className="welcomePage">
            
            <div className="welcome">
            
           <h1>Welcome</h1>
           Since the mid 20th century, Japanese culture has been the apple of many eyes amongst the western world. With the astronomical price of language learning applications like Rosetta Stone, most people don’t have access to reliable and affordable methods to realistically pursue the Japanese language. We’re here to fill that void. Goodbye English translated mangas, hello original print!  </div>
        </div>
    )
}

export default Welcome;