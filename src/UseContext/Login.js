import React, { useContext } from 'react'
import { UserContext } from './ContextTutorial'

const Login = () => {

    const {setUsername} = useContext(UserContext)
  return (
    <div>
      <input onChange={(e)=>{

            setUsername(e.target.value)
        
      }} />
    </div>
  )
}

export default Login
