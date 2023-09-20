import React, { useContext } from 'react'
import Logo from './Logo'
import RightContent from './RightContent'
import SearchBar from './SearchBar'

import DropDownMenu from './DropDownMenu'
import { DarkMode } from '../../App'

const LogedInNavbar = () => {
  const { darkMode } = useContext(DarkMode);
  return (
    <div className={`navbar-${darkMode?"dark":"light"}`}>
      <Logo />
      <DropDownMenu/>
      <SearchBar />
      <RightContent/>
    </div>
  )
}

export default LogedInNavbar
