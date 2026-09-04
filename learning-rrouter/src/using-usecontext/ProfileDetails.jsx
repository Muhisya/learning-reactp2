import React, { useContext } from 'react'
import UserContext from './UserContext'

function ProfileDetails() {
  const { name, setName } = useContext(UserContext)

  return (
    <>
      <p>Profile Details : {name}</p>
      <button onClick={() => setName("Fulana")}>Change Name</button>
    </>
  )
}

export default ProfileDetails