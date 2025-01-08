import React from 'react'

const ProductInfo = () => {
    const prodObject = {
        name: "Computer",
        price: "$1200",
        availability: "In Stock"
    }
    return (
        <div>
          <h1>Product: {prodObject.name}</h1>
          <h1>Price : {prodObject.price}</h1>
          <h1>Availability: {prodObject.availability}</h1>
        </div>
    )
}

export default ProductInfo