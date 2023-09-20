import React, { useContext } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { DarkMode } from '../../App'

const Logo = () => {
  const { darkMode } = useContext(DarkMode);
  let src = (darkMode ? "/images/Reddit-Text-Black.png": "/images/redditText.svg" );
 
  
  return (
    <div className="logo-img">
          {/* <MenuIcon sx={{color: "white", display: {sm:"block", lg:"none"}}} /> */}
        <img src="/images/redditFace.svg" className="image"/>
        <img src={src} className="image-text" />
    </div>
  )
}

export default Logo
