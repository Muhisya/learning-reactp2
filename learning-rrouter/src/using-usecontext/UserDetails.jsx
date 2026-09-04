import React, { useContext } from 'react'
import UserContext from './UserContext';

function UserDetails() {
  const { name } = useContext(UserContext);

  return (
    <div>A bit more about the user {name}</div>
  )
}

export default UserDetails