import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Signup from './components/Signup'
import About from './components/About'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Cart from './components/Cart'
import Detail from './components/Detail'
import Ops from './components/Ops'
import './App.css'
import { loadCategories, loadSamples, loadTests } from './reducer'
import { getCategories, getSamples, getTests } from './utils/request'
import Quoter from './components/Quoter'
import Results from './components/Results'

export default function App() {
  const dispatch = useDispatch()

  getTests(tests => dispatch(loadTests(tests)))
  getSamples(samples => dispatch(loadSamples(samples)))
  getCategories(categories => dispatch(loadCategories(categories)))

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/*' element={<Ops />} />
        <Route path='/quoter' element={<Quoter/>} />
        <Route path='/results' element={<Results/>} />
      </Routes>
    </div>
  )
}