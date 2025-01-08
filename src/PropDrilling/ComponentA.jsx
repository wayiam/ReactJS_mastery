//Context API is a feature that allows you to manage and share state across the components tree
// Without having to pass prop down manually at entry level. It's useful where need to share data
// between multiple component especially when the component are deeply nested
import React from 'react'
import ComponentB from './ComponentB'

function ComponentA() {
  return (
    <>
    <ComponentB/>
    </>
  )
}

export default ComponentA