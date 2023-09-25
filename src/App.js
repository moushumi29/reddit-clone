import './App.css';
import './AppLight.css';
import Navbar from './components/Navbar/Navbar';
import LogInModal from './components/Modal/LogInModal';
import SignUpModal from './components/Modal/SignUpModal';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SideNavBar from './components/SideBar/SideNavBar';
import GoToTop from './pages/GoToTop';
import { createContext, useState } from 'react';
import LogedInNavbar from './components/Navbar/LogedInNavbar';
import Popular from './components/Popular/Popular';
import CommunityBody from './components/CommunityPage/CommunityBody';
import CommunityPage from './components/CommunityPage/CommunityPage';
import SubmitPost from './components/CommunityPage/SubmitPost';
import PremiumPage from './components/Premium/PremiumPage';
import ComingSoon from './pages/ComingSoon';
import PopularComponent from './components/Popular/PopularComponent';
import Notification from './pages/comigSoon/Notification';
import Message from './pages/comigSoon/Message';

export const ShowModalContext = createContext();
export const UserLogedIn = createContext();
export const DarkMode = createContext();

function App(){
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [logedIn, setLogedIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const logedInStyle = {
    backgroundColor:"#ddd",
    color: "black"
  };
  const notLogedInStyle = {
    backgroundColor: "#0B1416",
    color:"white"
  }
  if(!darkMode && logedIn){
    document.body.style.backgroundColor = "#ddd";
    document.body.style.color = "black"
  }else if(!logedIn){
    document.body.style.backgroundColor= "#0B1416";
    document.body.style.color = "white";
  }else{
    document.body.style.backgroundColor="black";
    document.body.style.color = "white";  
  }

  return (
    <div>
    <ShowModalContext.Provider value={{setShowLogInModal, setShowSignUpModal}}>
      <UserLogedIn.Provider value={{logedIn, setLogedIn}}>
      <DarkMode.Provider value={{darkMode, setDarkMode}}>
      {logedIn ? <LogedInNavbar/>: <Navbar/>}
      {/* {!logedIn && <Navbar/>} */}
    
    
    {showLogInModal && <LogInModal/>}
    {showSignUpModal && <SignUpModal/>}
    {!logedIn && <SideNavBar/>}
  
    <Routes>
      <Route path='/' element={<Home style={logedIn && !darkMode ? logedInStyle : notLogedInStyle}/>} />
      <Route path='/communityBody' element={<CommunityBody/>} />
      <Route path='/submitPost' element={<SubmitPost/>} />
      <Route path='/communityPage' element={<CommunityPage/>}/>
      <Route path='/premiumPage' element={<PremiumPage/>} />
      <Route path='/comingSoon' element={<ComingSoon/>} />
      <Route path='/popular' element={<PopularComponent/>} />
      <Route path='/notification' element={<Notification/>} />
      <Route path='/message' element={<Message/>} />
      <Route path='/login' element={<LogInModal/>}/>
      <Route path='/signUp' element={<SignUpModal/>}/>
    </Routes>
      {!logedIn && <Popular/>}
      <GoToTop/>
      </DarkMode.Provider>
      </UserLogedIn.Provider>
    </ShowModalContext.Provider>
      
    </div>

      
   
  );
}

export default App;
