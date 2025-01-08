import React from 'react'

function Weather({ temperature }) {
    const p1 = "It's Cold Outside";
    const p2 = "It's Nice outside";
    const p3 = "It's Hot Outside"

    if (temperature < 15) {
        return <h1>{p1}</h1>
    }
    else if (temperature > 15 && temperature < 25) {
        return <p>{p2}</p>
    }
    return <h1>{p3}</h1>


}

export default Weather