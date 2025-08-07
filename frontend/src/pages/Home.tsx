import React, { useState, useEffect } from 'react'

interface ApiResonse {
  message: string
  data: number[]
}

function Home() {
  const [data, setData] = useState<ApiResonse | null>(null)

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/data')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Error fetching data:', err))
  }, [])

  return (
    <div className='App'>
      <h1>Home</h1>
      {data ? (
        <div>
          <p>{data.message}</p>
          <p>Data: {JSON.stringify(data.data)}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  )
}

export default Home
