import React, { useContext } from 'react';
import { ShowModalContext, UserLogedIn } from '../../App';
import LogOut from './LogOut';

const RightContent = () => {

  const {setShowLogInModal} = useContext(ShowModalContext);
  const {setShowSignUpModal} = useContext(ShowModalContext);
  const { logedIn } = useContext(UserLogedIn);
  return (
    
    <>
    
      {!logedIn ? <div className='contact-container' >
{/*        
          <button className="btn"><Link to="/login" style={{textDecoration:"none", color:"white"}}>Log In</Link></button>
          <button className="btn"><Link to="/signUp" style={{textDecoration:"none", color:"white"}}>Sign Up</Link></button> */}
          <button className="btn" onClick={()=>setShowLogInModal(true)}>Log In</button>
          <button className="btn" onClick={()=>setShowSignUpModal(true)}>Sign Up</button>
       
        {/* <Button  display={{ base: "none", sm: "flex"}} mr={2} onClick={()=>setModalLogIn(true)}>Log In</Button>
        {modalLogIn &&  <LogInModal close={setModalLogIn}/>}
        <Button id="btn" display={{ base: "none", sm: "flex"}} mr={2} onClick={()=>setModalSignUp(true)}>Sign up</Button>
        {modalSignUp && <SignUpModal close={setModalSignUp}/>} */}
      </div> : <LogOut/>}
      </>
  )
}

export default RightContent
