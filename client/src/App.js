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
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer";
import CovidTests from "./containers/CovidTests";
import Appointment from "./components/Dashboard/UserRoutes/Appointment"
import Orders from "./components/Dashboard/UserRoutes/Orders"
import Profile from "./components/Dashboard/UserRoutes/Profile"
import Reviews from "./components/Dashboard/UserRoutes/Reviews"
import UserResults from "./components/Dashboard/UserRoutes/UserResults"
import SearchUI from "./components/SearchUI";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavUI from './components/NavUI';
import Chart from "./components/Dashboard/AdminRoutes/Chart";
import AllOrders from "./components/Dashboard/AdminRoutes/AllOrders";
import AllExmans from "./components/Dashboard/AdminRoutes/AllExmans";
import AllUsers from "./components/Dashboard/AdminRoutes/AllUsers";
import AllAppointment from "./components/Dashboard/AdminRoutes/AllAppointment";

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

            <Route path={`/dashboard`} element={<Dashboard />}>

              <Route path="user"> 
                <Route path="profile" element={<Profile/>} />
                <Route path="orders" element={<Orders/>} />
                <Route path="result&payment" element={<UserResults/>} />
                <Route path="appointment" element={<Appointment/>} />
                <Route path="reviews" element={<Reviews/>} />
              </Route>

              <Route path="admin">
                <Route path="chart" element={<Chart/>} />
                <Route path="allorders" element={<AllOrders/>} />
                <Route path="allexams" element={<AllExmans/>} />
                <Route path="allusers" element={<AllUsers/>} />
                <Route path="allappointments" element={<AllAppointment/>} />
              </Route>

            </Route>
        </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
