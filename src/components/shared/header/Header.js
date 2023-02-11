import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div>
    <ul>
     <Link to="/"><li>Home</li></Link>
     <Link to="/employees"><li>Employees</li></Link>
     <Link to="/about"><li>About</li></Link>
     <Link to="/contact"><li>Contact</li></Link>
     </ul>
    </div>
  )
}

export default Header
