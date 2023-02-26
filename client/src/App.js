import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import About from './components/About'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Cart from './components/Cart'
import Ops from './components/Ops'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<Ops />} />
      </Routes>
    </div>
  )
}