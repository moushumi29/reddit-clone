import React, { useContext } from 'react'
import { DarkMode, UserLogedIn } from '../../App';

const SearchBar = () => {
  
  const { logedIn } = useContext(UserLogedIn);
  const { darkMode } = useContext(DarkMode);
    return (
          <div className="search-bar">
            
                <input className={`search-input-${(logedIn && !darkMode)? "light" :"dark"}`} placeholder='Search Reddit' />
         </div>
         )
}
          // <Box sx={{  bgcolor:"#04090A",}} >
    //   <Search  sx={{ flexGrow: 1, color:'white', fontWeight:100, fontSize:"10px", borderRadius:"17px", ml: 4
    // }} className={classes.myComponent}>
    //       <SearchIconWrapper>
    //         <SearchIcon sx={{color:"grey"}} />
    //       </SearchIconWrapper>
    //       <StyledInputBase
    //         placeholder="Search Reddit"
    //         inputProps={{ 'aria-label': 'search' }}
    //       />
    //     </Search>
  // </Box>

export default SearchBar;
