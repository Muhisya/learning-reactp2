import React from 'react'
import { useParams } from 'react-router'

const students = {
    1:"Ahmad",
    2:"Ali",
    3:"Umar"
}

function ProfileDetails() {
  const { id } = useParams()
  console.log(students);

  const name = students[id]
  
  return (
    <>
      <h1>ProfileDetails {id}</h1>
      <h2>Student: {name}</h2>
    </>
  )
}

export default ProfileDetails