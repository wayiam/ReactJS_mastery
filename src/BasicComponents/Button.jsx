import React from 'react'

function Button() {

    const onClickHandler = () => {
        console.log("I got Clicked");

    }
    return (
        <button onClick={onClickHandler}>
            Click
        </button>
    )
}

export default Button