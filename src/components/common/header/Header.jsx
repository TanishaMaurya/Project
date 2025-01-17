import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className="nav">
          <div className="toggle" onClick={() => setClick(!click)}>
            ☰
          </div>
        {/* <nav className='flexSB'> */}
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        
        
        </nav>
      </header>
    </>
  )
}

export default Header
