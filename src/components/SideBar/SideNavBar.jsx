import React, { useState } from 'react'
import { Link } from "react-router-dom";

const SideNavBar = () => {
return (
  <>
  <nav className='side-navbar'>
    <div className='scroll-box'>
    <ul className='scrollbox-inner'>
      <li><Link to="/"><i class="fa-solid fa-house"></i>Home</Link></li>
      <li><Link><i class="fa-solid fa-fire-flame-curved"></i>Popular</Link></li>
      <div className='text'></div>
      <li>TOPICS</li>
      <li><Link to="https://www.reddit.com/t/minecraft/"><i class="fa-solid fa-gamepad"></i>Gaming</Link></li>
      <li><Link to="https://www.reddit.com/t/premier_league/"><i class="fa-solid fa-basketball"></i>Sports</Link></li>
      <li><Link to="https://www.reddit.com/t/moderna/"><i class="fa-solid fa-chart-simple"></i>Business</Link></li>
      <li><Link to="https://www.reddit.com/t/bitcoin/"><i class="fa-solid fa-coins"></i>Crypto</Link></li>
      <li><Link to="https://www.reddit.com/t/the_real_housewives_of_atlanta/"><i class="fa-solid fa-tv"></i>Television</Link></li>
      <li><Link to="https://www.reddit.com/t/jamie_lee_curtis/"><i class="fa-regular fa-star"></i>Celebrity</Link></li>
      <li><Link to="https://www.reddit.com/t/animals_and_pets/"><i class="fa-solid fa-cat"></i>Animal and Pets</Link></li>
      <li><Link to="https://www.reddit.com/t/food_and_drink/"><i class="fa-solid fa-spoon"></i>Food and Drink</Link></li>
      <div className='text'></div>
      <li>RESOURCES</li>
      <li><Link to="https://www.redditinc.com/"><i class="fa-brands fa-reddit-alien"></i>About Reddit</Link></li>
      <li><Link to="https://accounts.reddit.com/adsregister?dest=https%3A%2F%2Fads.reddit.com%2F&referrer=https%3A%2F%2Fwww.reddit.com%2F&utm_source=web3x_consumer&utm_name=left_nav_cta"><i class="fa-solid fa-bullhorn"></i>Advertise</Link></li>
      <li><Link to="https://support.reddithelp.com/hc/en-us"><i class="fa-regular fa-circle-question"></i>Help</Link></li>
      <li><Link to="https://www.redditinc.com/blog"><i class="fa-solid fa-book-open"></i>Blog</Link></li>
      <li><Link to="https://www.redditinc.com/careers"><i class="fa-solid fa-wrench"></i>Careers</Link></li>
      <li><Link to="https://www.redditinc.com/press"><i class="fa-solid fa-microscope"></i>Press</Link></li>
      <div className='text'></div>
      <li><Link to="https://www.redditinc.com/policies/content-policy"><i class="fa-regular fa-paste"></i>Content Policy</Link></li>
      <li><Link to="https://www.reddit.com/policies/privacy-policy"><i class="fa-solid fa-scale-balanced"></i>Privacy Policy</Link></li>
      <li><Link to="https://www.redditinc.com/policies/user-agreement"><i class="fa-solid fa-newspaper"></i>User Agreement</Link></li>
      <li style={{fontSize:"10px", paddingTop:"10px"}}>Reddit, Inc. @ 2023. All rights reserved</li>
    </ul>
    
    </div>
   
  </nav>
  </>
)
}

export default SideNavBar
