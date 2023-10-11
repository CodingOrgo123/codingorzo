import React,{useRef,useEffect} from 'react'
import './Navbar.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import  logo from '../../images/nav-logo.png'
const Navbar = ({theme,toggleTheme}) => {
    const[fix,setFix]=useState(false)
    const menuRef=useRef(null);
    const togglemenu=()=>menuRef.current.classList.toggle('menu_active');
   
  return (
    <div>
        <header className="header">
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
<img src={logo} />
                    </div>
                    <div className="nav-items" ref={menuRef} onClick={togglemenu}>
                        <ul className="menu">
                          <li className="menu_link"><Link to="/">Home</Link></li>
                          <li className="menu_link"><Link to="/studentdashboard">Student Dashboard</Link></li>
                          <li className="menu_link"><Link to="/contest">Contest</Link></li>
                          <li className="menu_link"><Link to="/contactus">Contact us</Link></li>
                          <li className="menu_link"><Link to="/signup">Sign up</Link></li>  
                     </ul>
                    </div>
                    <div className="light_mode">
                        <span onClick={toggleTheme}>
                            {
                                theme==='light-theme'?<span><i class="ri-moon-fill"></i>Dark</span>:<span>  <i class="ri-sun-line"></i>Light</span>
                            }
                           </span>
                    </div>
                    <span className="mobile_menu" onClick={togglemenu}><i class="ri-menu-line"></i></span>
                </div>
            </div>
        </header>
      
    </div>
  )
}

export default Navbar
