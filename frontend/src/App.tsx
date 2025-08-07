import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tamagitchi from './pages/Tamagitchi'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/api/data' element={<Home />} />
          <Route path='/tamagitchi' element={<Tamagitchi />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
