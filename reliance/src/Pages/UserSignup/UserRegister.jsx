import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import Footer from '../../Components/Footer'
import NavbarHeader from '../../Components/Navbar'
import { register } from '../../Redux/AuthReducer/action'

import "./UserRegister.css"

const UserRegister = () => {
  const [formdata , setFormData] = useState({
    name:"",
    role:"USER",
    email:"",
    phonenumber:"",
    password:""
  })
const dispatch=useDispatch()


  const handelChange=(e)=>{
  
   const {name , type , value}=e.target
    const val = type === "number" ? Number(value) : value

    setFormData({
      ...formdata,
      [name] : val

    })
  }

  const handelSubmit=(e)=>{
    e.preventDefault()
    dispatch(register(formdata))
    console.log(formdata)

    
  }
  return (
    <div>
      <NavbarHeader/>
      <div className="signup2box">
      <div className="heading">
        <h3>Register New Account</h3>
      </div>
        <hr/>
        <div className="child">
          <form onSubmit={handelSubmit}>
          <label  >Name*</label>
            <input type="text" className="name"  placeholder='Name' name="name" value={formdata.name} onChange={handelChange} 
            style={{border:"1px solid grey"}}/>
            <label >Email Address*</label>
            <input type="email" className="email"  placeholder='Email Address'name="email"  value={formdata.email} onChange={handelChange}
            style={{border:"1px solid grey"}}/>
            <p>Your email address will be used to send order invoice, order updates etc.</p>
            <label  >Mobile Number*</label>
            <input type="number"  className="mobile" min="1000000000" max="9999999999"  placeholder='Mobile Number' name="phonenumber"
             value={formdata.phonenumber} onChange={handelChange} style={{border:"1px solid grey"}}
            />
            <p>Your mobile number will be used to avail benefits such as #TAG DIGITAL Cashback and #One Loyality Points and receive quick notifications.</p>
           
            <label  >Set Your Password*</label>
            <input type="password" className="password"  placeholder='Password' name="password"  value={formdata.password} onChange={handelChange}
            style={{border:"1px solid grey"}}/>
            
            <input type="submit" className="signup"value="PROCEED" />
            

            <div className="end">
              Already Register?
              {/* <a href=""> */}
                LOGIN
              {/* </a> */}
            </div>
             
          </form>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default UserRegister
