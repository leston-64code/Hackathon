import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import "./index.css"
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Landling from "./modules/auth/pages/Landing";
import Cart from "./modules/auth/pages/Cart";
import Login from "./modules/auth/Login";
import Register from "./modules/auth/Register";
import ContactUs from "./modules/auth/pages/ContactUs";

const App = () => {

  useEffect(() => {
    Aos.init({ duration: 3000 })
  }, [])

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Landling/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
