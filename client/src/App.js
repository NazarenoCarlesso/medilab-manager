import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

import './App.css'

export default function App() {
  return (
    <div className="App">
      <h1>MediLab Manager</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}