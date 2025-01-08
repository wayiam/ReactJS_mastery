import React, { useContext } from 'react'
import { UserContext  } from './UserContext';

const UserProfile = () => {
  const {user} = useContext(UserContext);
  return (
    <div>Current User is {user.name}</div>
  )
}
export default UserProfile;