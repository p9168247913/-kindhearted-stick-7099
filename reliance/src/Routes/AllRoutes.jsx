import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AdminDashboard from '../Components/Admin/AdminDashboard'
import AdminLogin from '../Components/Admin/AdminLogin'
import Home from '../Components/Home'
import Login from '../Components/User/UserLogin'
// import Signup from '../Components/Signup'
import UserRegister from '../Pages/UserSignup/UserRegister'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            {/* <Route path='/signup' element={<Signup/>}/> */}
            <Route path='/register' element={<UserRegister/>}/>
            <Route path="/admin-Login" element={<AdminLogin/>}/>
            <Route path="/admin-Dashboard" element={<AdminDashboard/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes