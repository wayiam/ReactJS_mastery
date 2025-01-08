//Props are the properties/arguments passed into the react components.
//Props allow to pass data from parent to the child React componets
//Props are passed into the components via HTML attributes.

import React from 'react'


export const Person = ({ name, age }) => {


  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

export const Product = ({ prodName, price }) => {

  return (
    <div>
      <p>Product:{prodName}</p>
      <p>Price: {price}</p>
    </div>
  )
}




export const PropsInReact = () => {
  return (
    <div>
      <Person name="Rajesh" age="28" />
      <Product prodName="Laptop" price="60000" />
    </div>
  )
}




