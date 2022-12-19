import { Link } from 'react-router-dom'
import './navbar.css'

 function Navbar() {
  return (
    <div className='navContainer' >

<div className='logoDiv'>MiscCart</div>
<div className='searchDiv'> <input type="text" className='searchInput'  placeholder='Search Here' style={{}}   /> <i class="fa-sharp fa-solid fa-magnifying-glass"></i> </div>
<div className='linkDiv'>
  <Link><button className='button'>Logout</button></Link>
  <Link><button className='button'>Switch to Main Page</button> </Link>
</div>

    </div>
  )
}
export default Navbar