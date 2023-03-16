import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import About from './components/About'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Cart from './components/Cart'
import Ops from './components/Ops'
import Results from './components/Results'
import Payments from './components/Payments'
import Footer from './components/Footer'
import SearchUI from './components/SearchUI'
import NavUI from './components/NavUI'
import DashboardUI from "./components/DashboardUI"
// styles
import { Experimental_CssVarsProvider as ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import './App.css'

export default function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <NavUI />
                <div style={{ height: 69 }} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/payments" element={<Payments />} />
                    <Route path="/search" element={<SearchUI />} />
                    <Route path="/dashboard" element={<DashboardUI />} />
                    <Route path="/*" element={<Ops />} />
                </Routes>
                <Footer />
            </ThemeProvider>
        </div>
    )
}
