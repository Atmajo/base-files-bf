import React, { useState, useEffect } from "react";

function App() {
  const [fdata, setData] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <p>{fdata}</p>
    </div>
  );
}

export default App;
