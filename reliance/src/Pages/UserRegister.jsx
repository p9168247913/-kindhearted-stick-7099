import React from 'react'
import "./UserRegister.css"

const UserRegister = () => {
  return (
    <div>
        <div>
       <div className="signup2box">
      <div className="heading">
        <h3>Register New Account</h3>
      </div>
        <hr/>
        <div className="child">
          <form>
        
            <input type="text" className="name"  placeholder='First Name'/>
          
         
            <input type="text" className="lastname" placeholder='lastname' />
            
          
            <input type="email" className="email"  placeholder='Email Address' />
            <p>Your email address will be used to send order invoice, order updates etc.</p>
            
            
            <input type="number"  className="mobile" min="1000000000" max="9999999999"  placeholder='Mobile Number' />
            <p>Your mobile number will be used to avail benefits such as #TAG DIGITAL Cashback and #One Loyality Points and receive quick notifications.</p>
           
            
            <input type="password" className="password"  placeholder='Password' />
            
            <input type="button" className="signup"value="PROCEED" />
            

            <div className="end">
              Already Register?
              <a href="">
                LOGIN
              </a>
            </div>
             
          </form>
        </div>
    </div>
    </div>
    </div>
  )
}

export default UserRegister
