import React, { useState } from 'react'
import CommunityModal from './CommunityModal'
import { GrAdd } from 'react-icons/gr';

const Communities = () => {
    const [open, setOpen] = useState(false);
  return (
    <div>
      <CommunityModal open={open} handleClose={()=>setOpen(false)}/>
      <li onClick={() => setOpen(true)} className='list-dropdown'>
      <div style={{display:"flex", width:"200px", alignItems:"center"}}>
        <GrAdd/>
        Create Community
      </div>
      </li>
    </div>
  )
}

export default Communities
