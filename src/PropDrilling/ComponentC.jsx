//UseContext Hooks allow us to acess the context values provided by the context object
//direcly within a functional component.Context provides a way to pass data through the component
//tree without having to pass props manually at every level.

import React from 'react'
import { Data, AnotherData } from '../App'
import { useContext } from 'react'

function ComponentC() {

  const username = useContext(Data)
  const Age = useContext(AnotherData)

  return (
  //   <AnotherData.Consumer>
  //  {
  //   (age) => {
  //    return (
  //     <Data.Consumer>
  //     {
  //       (name)=>{
  //        return <div>Rendered from ComponentC and name value is "{name}"and age is {age}</div>
  //       }
  //     }
  //    </Data.Consumer>
  //    )
  //   }
  //  } 
  //  </AnotherData.Consumer>
  <div> Rendered from ComponentC and name value is "{username}"and age is {Age}</div>
  )
}

export default ComponentC