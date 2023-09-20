import React, { useContext } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { UserLogedIn } from '../../App';

const LogoNotLogedIn = () => {
    const { logedIn } = useContext(UserLogedIn)
 
  let src =  "/images/redditText.svg";
 
  
  return (
    <div className="logo-img">
          {/* <MenuIcon sx={{color: "white", display: {sm:"block", lg:"none"}}} /> */}
        <img src="/images/redditFace.svg" className="image"/>
        <img src={src} className="image-text" />
    </div>
  )
}

export default LogoNotLogedIn