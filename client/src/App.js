import { Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Cart from "./components/Cart";
import Detail from "./components/Detail";
import Ops from "./components/Ops";
import "./App.css";
import TestList from "./containers/TestList";
import Results from "./components/Results";
import Payments from "./components/Payments";
import User from "./components/User";
import Footer from "./components/Footer";
import CovidTests from "./containers/CovidTests";
import Appointment from "./components/UserRoutes/Appointment"
import Orders from "./components/UserRoutes/Orders"
import Profile from "./components/UserRoutes/Profile"
import Reviews from "./components/UserRoutes/Reviews"
import UserResults from "./components/UserRoutes/UserResults"
import SearchUI from "./components/SearchUI";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavUI from './components/NavUI';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function App() {
  // function requireAuth(nextState, replace) {
  //   if (token !== "undefined") {
  //     replace({
  //       pathname: '/home',
  //       state: { nextPathname: nextState.location.pathname }
  //     })
  //   }
  // }
  // console.log(usuario.toString())

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <NavUI />
        <NavBar />
        <div className="route">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tests" element={<TestList />} />
            <Route path="/covid" element={<CovidTests />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/*" element={<Ops />} />
            <Route path="/results" element={<Results />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/search" element={<SearchUI />} />
            {/* <Route path="/user" element={<User />}  onEnter={requireAuth}  /> */}
            {/* pregunta si hay algo en el token al momento de buscar la url user si no tiene nada manda al componente de error */}
            {/* modifica la url con el nombre del usuario (`/user/${usuario}`) */}
            <Route path={`/user`} element={<User />}>
              <Route path="profile" element={<Profile />} />
              <Route path="orders" element={<Orders />} />
              <Route path="result&payment" element={<UserResults />} />
              <Route path="appointment" element={<Appointment />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
