
import { Routes, Route } from 'react-router-dom'
import AdminApp from '../AdminApp'
import AddProduct from '../AdminDashboard/Components/AddProducts/AddProduct'
import AdminProfile from '../AdminDashboard/Components/AdminProdile/AdminProfile'
import FileManager from '../AdminDashboard/Components/FileManager/FileManager'
import AdminHome from '../AdminDashboard/Components/Home/AdminHome'
import Settings from '../AdminDashboard/Components/Settings/Settings'
import AdminLogin from '../AdminLogin/AdminLogin'
// import Dashboard from '../Components/Admin/Admin/Dashboard'
// import AdminDashboard from '../Components/Admin/AdminDashboard'
// import AdminLogin from '../Components/Admin/AdminLogin'
import Home from '../Components/Home'
// import ProductCarousel from '../Components/ProductCarousel'
import Login from '../Components/User/UserLogin'
import Admin from "../Pages/Admin/Admin"
// import Signup from '../Components/Signup'
// import UserRegister from '../Pages/UserSignup/UserRegister';
// import Products from '../Components/Admin/Admin/Products'
import UserRegister from '../Pages/UserSignup/UserRegister'


const AllRoutes = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/signup' element={<Signup/>}/> */}
        <Route path='/register' element={<UserRegister />} />
        <Route path="/admin-Login" element={<AdminLogin />}></Route>
        {/* <Route path="/admin-Dashboard" element={<Admin><Dashboard/></Admin>}></Route> */}
        {/* <Route path="/admin-Products" element = {<Admin><Products/></Admin>}/> */}

        <Route path="/home" element={<AdminApp><AdminHome /></AdminApp>} ></Route>
        <Route path="/adminProfile" element={<AdminApp><AdminProfile /></AdminApp>} ></Route>     3
        <Route path="/addProduct" element={<AdminApp><AddProduct /></AdminApp>} ></Route>
        <Route path="/fileManager" element={<AdminApp><FileManager /> </AdminApp>}></Route>
        <Route path="/settings" element={<AdminApp><Settings /></AdminApp>} ></Route>




      </Routes>
    </div>
  )
}

export default AllRoutes