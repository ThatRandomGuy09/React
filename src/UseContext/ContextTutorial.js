import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import Login from './Login'
import User from './User'

export const UserContext = createContext(null);

const ContextTutorial = () => {
    const [username, setUsername] = useState('')
  return (
    <UserContext.Provider value={{username, setUsername}}>
      <Login  /><User  />
      </UserContext.Provider>
  )
}

export default ContextTutorial
