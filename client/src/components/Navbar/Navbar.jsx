import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <h1>NavBar</h1>
      <Link to={'/'}>Home</Link>
      <span style={{margin : '5px'}}></span>
      <Link to={'/login'}>Login</Link>
      <span style={{margin : '5px'}}></span>
      <Link to={'/contact'}>Contact Us</Link>
    
    </div>
  )
}
