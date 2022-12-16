import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AdminLogin from '../Components/Admin/AdminLogin'
import Home from '../Components/Home'
import Login from '../Components/User/UserLogin'
// import Signup from '../Components/Signup'
import UserRegister from '../Pages/UserSignup/UserRegister'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/register' element={<UserRegister/>}></Route>
            <Route path="/adminlogin" element={<AdminLogin/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes