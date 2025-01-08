import React, { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'

const UpdateUser = () => {

  const { updateUser } = useContext(UserContext);
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(name)
   setName("")
  }

  return (
    <>
      <h2>Update User Name</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Name' />
        <button type='submit'>Update Name</button>
      </form>
    </>
  )
}

export default UpdateUser