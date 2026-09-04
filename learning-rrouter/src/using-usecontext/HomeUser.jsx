import React, { useState } from 'react'
import ProfileUser from './ProfileUser'
import UserContext from './UserContext'

function HomeUser() {
  const [name, setName] = useState("Fulan")

  return (
    <UserContext.Provider value={{ name, setName }}>
      <div>HomeUser: {name}</div>
      <ProfileUser />
    </UserContext.Provider>
  )
}

export default HomeUser