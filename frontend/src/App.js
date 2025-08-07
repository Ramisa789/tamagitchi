import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/commits')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Tamagotchi</h1>
        {data ? (
          <div>
            <p>{data.message}</p>
            <p>Commit Count: {data.commit_count}</p>
            <p>Mood: {data.mood}</p>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </header>
    </div>
  );
}

export default App;
