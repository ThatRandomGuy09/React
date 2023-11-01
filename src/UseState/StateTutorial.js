import React from "react";
import { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");
  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="enter Something"
      />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
