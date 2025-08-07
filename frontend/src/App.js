import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/commits')
       .then(res => res.text())  
      .then(mood => setData(mood))  
      .catch(err => console.error("Error fetching mood:", err));
  }, []);

  return (
  <div className="App">
    <header className="App-header">
      <h1>GitHub Tamagotchi</h1>
      {data ? (
        <div>
          <p>Mood: {data}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </header>
  </div>
  );
}


export default App;
