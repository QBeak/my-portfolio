import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='All-Nav'>
        
            <h1 className='nav-header'>Alexander Abara</h1>
        
        {/* <div className='nav-list'> */}
            <ul className='list-items'>
                <li>About Me</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact Me</li>
            </ul>
        {/* </div> */}
    </div>
  )
}

export default Navbar