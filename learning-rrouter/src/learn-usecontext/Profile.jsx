import React from 'react'
import ProfileDetail from './ProfileDetail'

function Profile({ name }) {
  return (
    <>
      <h1>Profile</h1>
      <ProfileDetail name={name} />
    </>
  )
}

export default Profile