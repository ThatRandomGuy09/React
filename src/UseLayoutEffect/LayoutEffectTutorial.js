import React from "react";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useRef } from "react";
const LayoutEffectTutorial = () => {
 
 const inputRef = useRef(null);
 
    useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "100";
  }, []);
  return <div>

    <input type="text" value="Vansh" style={{width:"400", height:100}} ref={inputRef} />
  </div>;
};

export default LayoutEffectTutorial;
