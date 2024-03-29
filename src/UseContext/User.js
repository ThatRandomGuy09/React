import React from 'react'
import { useContext } from 'react'
import { UserContext } from './ContextTutorial'

const User = () => {

    const {username} = useContext(UserContext)
  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  )
}

export default User
