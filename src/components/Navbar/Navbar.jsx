import React from 'react'
import SearchBar from './SearchBar'
import RightContent from './RightContent'
import { NavLink } from 'react-router-dom'

import Logo from './Logo'



const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/"><Logo /></NavLink>
      <SearchBar/>
      <RightContent/>
    </nav>
  )
}

export default Navbar
