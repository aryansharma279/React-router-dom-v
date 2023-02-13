import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom'
import "./Header.css"



const Header = () => {
 const active = 
 { 
  textDecoration: "underline",
  color: "orange",
  fontWeight: "bold"                
}

  return (
    <div>
    <ul>
     <li><NavLink to="/"  style={({isActive})=> isActive? active: null}>Home</NavLink></li>
     <li><NavLink to="/employees"  style={({isActive})=> isActive? active: null}>Employees</NavLink></li>
     <li><NavLink to="/about"  style={({isActive})=> isActive? active: null}>About</NavLink></li>
     <li><NavLink to="/contact"  style={({isActive})=> isActive? active: null}>Contact</NavLink></li>
     </ul>
    </div>  
  )
}

export default Header
