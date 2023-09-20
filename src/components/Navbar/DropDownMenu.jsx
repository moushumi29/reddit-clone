import React, { useEffect, useRef, useState } from 'react';
import {TiHome} from "react-icons/ti"
import { IoChevronDown } from 'react-icons/io5';
import Communities from '../Modal/CommunityModal/Communities';
import { useNavigate } from 'react-router-dom';

export default function DropDownMenu() {
 const [open, setOpen] = useState(false);
  const homeMenuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(()=>{
    const hideModal = (e) =>{
      if(homeMenuRef.current?.contains(e.target)){
        return;
      }
      setOpen(false);
    };
    document.addEventListener("click", hideModal);
    return () =>{
      document.removeEventListener("click", hideModal);
    }
  }, [])

  return (
 
      <div onClick={()=>{
      setOpen(true)
    }} ref={homeMenuRef}>
      <div className="dropdown-container" onClick={()=>navigate("/")}>
        <div style={{display:"flex"}}>
          <TiHome style={{fontSize:"22px", marginRight:"12px"}}/>
          <div className="home-text" >
            Home
          </div>
        </div>
        <IoChevronDown style={{marginLeft:"20px"}}/>
      </div>
      {open &&
      <ul>
        <Communities/>
      </ul>}
    </div> 
     
  );
}
