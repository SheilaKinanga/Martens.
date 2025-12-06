import React from 'react'
import './NavBar.css'


const NavBar = () => {
  return (
    <nav className='container'>
      <p className='heading'>MARTENS KE</p>
      <ul>
        <li>Product Catalogue</li>
        <li>News & Events</li>
        <li>Our Story</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default NavBar

