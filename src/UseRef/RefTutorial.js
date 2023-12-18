import React from 'react'
import { useRef } from 'react'

const RefTutorial = () => {
    const inputRef = useRef(null);
    const onClick = () => {
        // inputRef.current.value = "100";
        // console.log(inputRef.current.value);
        inputRef.current.focus();
        inputRef.current.value = ""
    }
  return (
    <div>
      <h1>Vansh</h1>
      <input type="text"  placeholder="Ex.."  ref={inputRef}/>
      <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default RefTutorial
