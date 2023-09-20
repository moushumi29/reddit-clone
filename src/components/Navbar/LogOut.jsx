import React, { useContext, useState } from 'react'
import { UserLogedIn } from '../../App'
import Icons from './Icons';
import UserMenu from './UserMenu';
import UserMenuUpdated from './UserMenuUpdated';
import { Button, Modal, Tooltip, Box } from '@mui/material';
import { FaRedditSquare } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import { ChevronDownIcon } from '@chakra-ui/icons';


const LogOut = () => {
    const {logedIn, setLogedIn } = useContext(UserLogedIn);
    const [openSettingModal, setOpenSettingModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const username = sessionStorage.getItem("userInfo");
const info = JSON.parse(username);

    
  return (
    <div className='logout-container'>
      <Icons/>
      {/* <UserMenuUpdated/> */}
      <Tooltip title="Open settings">
            <Button onClick={()=>setOpenSettingModal(true)} sx={{ p: 0, textTransform: 'none' }}>
            <Box sx={{ p: '20px', borderBottom: '1px solid #d5d1d1', mt: '10px' }}>
      <div style={{ color:"#ddd", display:"flex",fontSize:"30px", alignItems:"center", cursor:"pointer", width:"150px"}}>
          <FaRedditSquare/>
          <div style={{display:"flex", flexDirection:"column", paddingLeft:"4px"}}>
            <span style={{color:"black", fontSize:"12px"}}>{info?.name}</span>
            <div style={{display:"flex", alignItems:"center"}}>
              <IoSparkles style={{color:"#FF4500", fontSize:"12px"}}/>
              <span style={{color:"black", fontSize:"12px"}}>1 karma</span>
            </div>
          </div>
        <ChevronDownIcon/>
      </div>
      </Box>
            </Button>
          </Tooltip>
          <Modal open={openSettingModal} onClose={()=>setOpenSettingModal(false)} sx={{ top: '50px' , left:"85%"}}>
            <UserMenuUpdated />
          </Modal>
      {/* <UserMenu/> */}
    </div>
  )
}

export default LogOut
