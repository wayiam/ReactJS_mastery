import React from 'react'

export const Greeting = ({ timeofDay }) => {

    if (timeofDay === "Morning") {
        return <p>Good Morning!</p>
    } else if (timeofDay === "Afternoon") {
        return <p>Good Afternoon!</p>
    } else {
        return <p>Good Day, Mate!</p>
    }

}
