import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { loadCategories, loadSamples, loadTests,loadOrders } from "./reducer";
import { getCategories, getOrders, getSamples, getTests } from "./utils/request";
import TestList from "./containers/TestList";
import Quoter from "./components/Quoter";
import Results from "./components/Results";
import Payments from "./components/Payments";
import User from "./components/User";
import Footer from "./components/Footer";

export default function App() {
  const dispatch = useDispatch();


  const token = useSelector((state) => state.sessionId?.token);

  getTests((tests) => dispatch(loadTests(tests)));
  getSamples((samples) => dispatch(loadSamples(samples)));
  getCategories((categories) => dispatch(loadCategories(categories)));
  getOrders((orders) =>dispatch(loadOrders(orders)), token); 


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tests" element={<TestList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<Ops />} />
        <Route path="/quoter" element={<Quoter />} />
        <Route path="/results" element={<Results />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}
