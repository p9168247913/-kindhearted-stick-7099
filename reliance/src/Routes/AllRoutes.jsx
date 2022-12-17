
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../Components/Admin/Admin/Dashboard'
// import AdminDashboard from '../Components/Admin/AdminDashboard'
import AdminLogin from '../Components/Admin/AdminLogin'
import Home from '../Components/Home'
// import ProductCarousel from '../Components/ProductCarousel'
import Login from '../Components/User/UserLogin'
import Admin from  "../Pages/Admin/Admin"
// import Signup from '../Components/Signup'
import UserRegister from '../Pages/UserSignup/UserRegister';
import Products from '../Components/Admin/Admin/Products'


const AllRoutes = () => {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            {/* <Route path='/signup' element={<Signup/>}/> */}
            <Route path='/register' element={<UserRegister/>}/>
            <Route path="/admin-Login" element={<AdminLogin/>}></Route>
            <Route path="/admin-Dashboard" element={<Admin><Dashboard/></Admin>}></Route>
            <Route path="/admin-Products" element = {<Admin><Products/></Admin>}/>
          
        </Routes>
    </div>
  )
}

export default AllRoutes