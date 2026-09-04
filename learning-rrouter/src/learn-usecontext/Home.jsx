import React, { useState } from 'react'
import Profile from './Profile'

function Home() {
  const [name, setName] = useState("Fulan")

  return (
    <>
      <h1>Name : {name}</h1>
      <button onClick={() => setName("Ali")}>Change Name</button>
      <Profile name={name} />
    </>
  )
}

export default Home