import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "../components/Navigation/index"
import HomePage from "../pages/HomePage"
import Dashboard from "../pages/Dashboard"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import NotFoundPage from "../pages/NotFoundPage"
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout"
import PostCheckout from "../pages/PostCheckout"

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/postcheckout" element={<PostCheckout />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
