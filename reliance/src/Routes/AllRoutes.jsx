import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
// import Login from '../Components/Login'
// import Signup from '../Components/Admin/Signup'
import UserRegister from '../Pages/UserRegister'
import Cart from "../Pages/CartAndPayment/Cart"
import Payment from './../Pages/CartAndPayment/Payment';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path="/checkout" element={<Payment />}></Route>
        <Route path='/register' element={<UserRegister />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes