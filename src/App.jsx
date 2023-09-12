import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Exposition from './pages/Exposition'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/exposition' element={<Exposition />}></Route>
      </Routes>
    </Router>
  )
}

export default App
