import React from 'react'
import Footer from './Footer'
import "./Login.css"
import NavbarHeader from './Navbar'

const Login = () => {
  return (
    <>
    <NavbarHeader/>
    <div class="mobileregister">
       <div className="parent1">
             <div className="p">
                 <h4>Login / Register</h4>   
             </div>
            <div className="child">
               <form action="/signup2.html">
                 <input type="number"  placeholder="Enter Mobile Number"  min="1000000000" max="9999999999" />
                   <br/>
                 <input type="submit" className="btnx" value="PROCEED" />
               </form>
            </div>
      </div>
    </div> 
      <Footer/>
    </>
  )
}

export default Login
