import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Contact from './components/Contact'
import About from './components/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </div>
  )
}

export default App
