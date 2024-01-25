import Navbar from "@components/Navbar"
import Footer from "@components/Footer"
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "@pages/Home"
import Category from "@pages/Category"
import Payment from "@pages/Payment"
import Err404 from "@pages/Err404"
import "@scss/App.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={
            <>
            <Navbar />
            <Home />
            <Footer />
            </>
        } />
        <Route path="/category" element={
            <>
            <Navbar />
            <Category />
            <Footer />
            </>
        } />
        <Route path="/payment" element={
            <>
            <Navbar />
            <Payment />
            <Footer />
            </>
        } />
        <Route path="/*" exact element={
            <>
            <Navbar />
            <Err404 />
            <Footer />
            </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
