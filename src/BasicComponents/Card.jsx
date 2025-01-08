import React from 'react'

export const Card = (props) => {
    console.log(props)
    return (
       props.children
    )
}



export const CardList = () => {
    return (
        <ul>
            <Card>
                <p>This is a element from Passed from Cardlist to Card </p>
            </Card>
        </ul>
    )
}
