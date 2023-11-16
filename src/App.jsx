import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Exposition from './pages/Exposition'
import About from './pages/About'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}> </Route>
        <Route path='/exposition' element={<Exposition />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </Router>
  )
}

export default App
