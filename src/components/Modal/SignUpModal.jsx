import React, { useContext, useState } from 'react'
import { createPortal } from 'react-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import OathButtons from './OathButtons';
import axios from 'axios';
import { getHeaderWithProjectIDAndContent } from '../../utils/configs';
import { ShowModalContext, UserLogedIn } from '../../App';

const SignUpModal = () => {
  const {setShowLogInModal} = useContext(ShowModalContext);
  const {setShowSignUpModal} = useContext(ShowModalContext);
  const {setLogedIn} = useContext(UserLogedIn);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  // const [nameError, setErrorName] = useState('');
  const [passwordError, setErrorPassword] = useState('');
  const [emailError, setErrorEmail] = useState('');
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');
 
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    // console.log(userInfo)
  }

  const signUpInfo = async (userInfo) => {
    userInfo.appType = "reddit";
    console.log(userInfo);
    const headerConfig = getHeaderWithProjectIDAndContent();
    try{
      const res = await axios.post(
      "https://academics.newtonschool.co/api/v1/user/signup",
      userInfo,
      headerConfig
      );
      console.log("res", res);
      if(res.data.token){
        sessionStorage.setItem("authToken", res.data.token);
        sessionStorage.setItem("userInfo", JSON.stringify(res.data.data.user));
        setLogedIn(true);
      }
    }catch(err){
      if(err){
        // StorageError(err.response.data.message);
        console.log(err);
      }
    }
  }
  const handleSignupClick = (e) =>{
    e.preventDefault();
    const errorValues = Object.values(userInfo);
    const isEmptyVal = errorValues.some((el) => el === '');
    const {email, password} = userInfo;
    if(isEmptyVal){
      setMessage("All Fields must be filled");
      setColor('red')
    }else if(!email.includes('@')){
      setErrorEmail("Email is invalid");
      setMessage("");
      setColor('red')
    }else if(password.length < 4){
      setErrorEmail('');
      setErrorPassword("Password length must be greater than 4.");
      setColor('red');
    }
    else{
      setErrorEmail('');
      setErrorPassword('');
      setMessage('Congrats! You are successfully logged in.');
      setColor('green')
      signUpInfo(userInfo);
      navigate("/")
      setShowSignUpModal(false);
      console.log(signUpInfo);
    }

  }
  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //     signUpInfo(userInfo);
  //     navigate("/")
  //     setShowSignUpModal(false);
  //     console.log(signUpInfo);
  // };
   
  const handleClick = () =>{
    setShowSignUpModal(false);
    setShowLogInModal(true);
    
  }
  return createPortal((
    <div className="modal-container" >
      <div className="modal-wrapper" >
        <div className="title">Sign Up</div>
        <OathButtons />
        <div>OR</div>
        <form >
          <input name="name" type="text" placeholder="username" onChange={handleOnChange} required />
          <input name="email" type="email" placeholder="email" onChange={handleOnChange} required />
          {emailError && <p style={{color: color}}>{emailError}</p>}
          <input name="password" type="password" placeholder="password" onChange={handleOnChange} required />
          {passwordError && <p style={{color: color}}>{passwordError}</p>}
          {/* <input name="confirmPassword" type="password" placeholder="confirm password" onChange={handleOnChange} required /> */}
          {message && <p style={{ color: color, fontSize: "14px" }}>{message}</p>}
          {/* loading effect in button */}
          <button className="btn" type='submit' onClick={handleSignupClick}>Sign Up</button>
          <div>
            <span>Already a Redditor? <span className="signUp" onClick={handleClick}>LOG IN</span></span>
          </div>
        </form>
      </div>
    </div>





  ), document.getElementById('modal'));
}

export default SignUpModal;
