import React,{useState} from 'react'
import Footer from '../Footer'
import "./UserLogin.css"
import NavbarHeader from '../Navbar'

import { useDispatch} from "react-redux"; 
import { useLocation, useNavigate } from "react-router-dom";
import { login } from '../../Redux/LoginReducer/action';



const UserLogin = () => {
  const [email, setEmail]= useState("");
    const [password , setPassword]= useState("")
    const dispatch=useDispatch() 
    const navigate=useNavigate()
    const location=useLocation()
    const commingFrom=location.state?.from?.pathname || "/"





    const handelSubmit=(e)=>{
        e.preventDefault()
        if(email && password){
          let obj={
            email , password
          }
          console.log({email,password})
          dispatch(login(obj))
          .then((r)=>{
            navigate(commingFrom , {replace: true})
            navigate("/")
        }
        )
        }
        console.log(email,password)
       
      }
  return (
    <>
    <NavbarHeader/>
   
<div className="mobileregister">
       
       <div className="parent1">
        
             <div className="p">
                 <h4>Login / Register</h4>   
             </div>
            <div>
               <form action="/signup2.html" onSubmit={handelSubmit}>
               <input type="email"  placeholder='Email Address' 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
               />
                   <br/>
                <input type="password"  placeholder='Password' 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                   <br />
                 <input type="submit" className="btnx" value="PROCEED"/>
               </form>
            </div>
      </div>
 </div>  
      <Footer/>
    </>
  )
}

export default UserLogin
