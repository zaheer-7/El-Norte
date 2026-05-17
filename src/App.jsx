import { BrowserRouter, Route,  Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Components/About"
import Navbar from "./Components/NavBar"
import ContactUs from "./Pages/ContactUs"
import Partnership from "./Pages/Partener"

function App() {

  return (
    <div className=" overflow-y-hidden"> 
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/service" element={<Partnership/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
