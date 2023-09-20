import React from 'react'
import SearchBar from './SearchBar'
import RightContent from './RightContent'
import { NavLink } from 'react-router-dom'
import LogoNotLogedIn from './LogoNotLogedIn'



const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/"><LogoNotLogedIn /></NavLink>
      <SearchBar/>
      <RightContent/>
    </nav>
  )
}

export default Navbar
