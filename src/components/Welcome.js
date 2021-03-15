import React from 'react';

const Welcome = () => {
    console.log(`>>>> inside Welcome component`)
    return (
        <div className="homePage">
            <h1 className="welcomeTitle">Welcome</h1>
            <p className="welcomeParagraph">Since the mid 20th century, Japanese culture has been the apple of 
                many eyes amongst the western world. Most of those folks haven’t the resources to realize their true potential. 
                With the astronomical price of language learning applications like Rosetta Stone,
                 most people don’t have access to reliable and affordable methods to realistically 
                 pursue the Japanese language. We’re here to fill that void. At NipponRunner, 
                 we provide you with an engaging way to learn your hiragana 
                and master the basics to begin your journey learning the Japanese language 
                smoothly. Goodbye English translated mangas, hello original print!  </p>
        </div>
    )
}

export default Welcome;