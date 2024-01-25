import React from "react";
import { useState } from "react";
import axios from "axios";
import "../App.css";

const StateTutorial =  () => {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://random-data-api.com/api/v2/addresses?size=${count}`);
      console.log("response: ", response);
      setUserData(response.data);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    setCount((prevCount) => prevCount + 1);
    fetchData();
  };

  return (
    <div>
      <button className="button" onClick={handleChange}>Increment</button>
      <p>Count: {count}</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {userData && (
            <div>
              <p>Fetched Data:</p>
              <pre>{JSON.stringify(userData, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StateTutorial;
