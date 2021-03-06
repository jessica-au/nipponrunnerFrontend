import React from 'react'

function StatBox(props) {
    
    const {item, progress} = props
    let color = "charBox"

    console.log(progress)

    if(!progress){
        return null
    } else {
        let val = progress.value
        if(val > 10){
        color = "charGold"  
        } else if (val <= 10 && val > 5) {
            color = "charSilver"
        } else if (val <= 5 && val > 0) {
            color = "charBronze"
        } else if (val < 0){
            color = "charBad"
        }
    }

    return (
        <div className={color}>
            {item.ji}<p className="valueValue">({progress.value})</p>
        </div>
    )
}

export default StatBox
