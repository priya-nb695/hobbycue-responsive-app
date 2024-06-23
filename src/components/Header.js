// import React from 'react';
// import { FaSearch, FaCompass, FaHeart, FaRegBookmark, FaRegBell } from 'react-icons/fa';

// import HobbyCueLogo from '../Icons/HobbyCueLogo.png'
// import Bookmark from '../Icons/Bookmark.png'
// import Search from '../Icons/Search.png'
// import Explore from '../Icons/Explore.png'
// import Notifications from '../Icons/Notifications.png'
// import Hobbies from '../Icons/Hobbies.png'
// import ShoppingCart from '../Icons/ShoppingCart.png'
// import ArrowExpand from '../Icons/ArrowExpand.png'

// function () {
//   return (
//     <header className="d-flex justify-content-between align-items-center py-3 px-3">
//       <div className="d-flex align-items-center ">
      
       
      
//         <img src={HobbyCueLogo} alt="Logo" />
//         <div className="input-group ms-3">
//           <input type="text" className="form-control" placeholder="Search here" aria-label="Search here" />
//           <span className="input-group-text p-0">
//           <img src={Search} alt="Search" className="icon" />
//           </span>
//         </div>
//       </div>
//       <nav>
//         <ul className="nav ">
//           <li className="nav-item dropdown d-flex align-items-center">
//           <img src={Explore} alt="Explore" className="icon" />
//             <a className="nav-link dropdown-toggle" href="#" id="exploreDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Explore
//             </a>
            
//             <ul className="dropdown-menu" aria-labelledby="exploreDropdown">
//               <li><a className="dropdown-item" href="#">Explore Item 1</a></li>
//               <li><a className="dropdown-item" href="#">Explore Item 2</a></li>
//               <li><a className="dropdown-item" href="#">Explore Item 3</a></li>
//             </ul>
//           </li>
//           <li className="nav-item dropdown d-flex align-items-center">
//           <img src={Hobbies} alt="Hobbies" className="icon" />
//             <a className="nav-link dropdown-toggle" href="#" id="hobbiesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Hobbies
//             </a>
//             <ul className="dropdown-menu" aria-labelledby="hobbiesDropdown">
//               <li><a className="dropdown-item" href="#">Hobby 1</a></li>
//               <li><a className="dropdown-item" href="#">Hobby 2</a></li>
//               <li><a className="dropdown-item" href="#">Hobby 3</a></li>
//             </ul>
//           </li>
//           <li className="nav-item">
          
//             <a className="nav-link" href="#">
//                 <img src={} alt="Bookmark" className="icon" /></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//                 <img src={} alt="Notifications" className="icon" /></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//                 <img src={ShoppingCart} alt="ShoppingCart" className="icon" /></a>
//           </li>
//           <li className="nav-item">
             
//             {/* <button type="button" class="btn-link-button">Sign In</button> */}
//             <button type="button" class="btn-link-button">Sign In</button>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default ;








import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import HobbyCueLogo from '../Icons/HobbyCueLogo.png';
import Bookmark from '../Icons/Bookmark.png';
import Search from '../Icons/Search.png';
import Explore from '../Icons/Explore.png';
import Notifications from '../Icons/Notifications.png';
import Hobbies from '../Icons/Hobbies.png';
import Menubar from '../Icons/Menubar.png';
import IconSearch from '../Icons/IconSearch.png';
import ShoppingCart from '../Icons/ShoppingCart.png';
import ArrowExpand from '../Icons/ArrowExpand.png' ;

//import ArrowExpand from '../Icons/ArrowExpand.png';


function Header() {
    const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
    const [isHobbiesDropdownOpen, setIsHobbiesDropdownOpen] = useState(false);
  
    const toggleExploreDropdown = () => {
      setIsExploreDropdownOpen(!isExploreDropdownOpen);
    };
  
    const toggleHobbiesDropdown = () => {
      setIsHobbiesDropdownOpen(!isHobbiesDropdownOpen);
    };
  return (
    <header className="d-flex justify-content-between align-items-center py-3 px-3 header">
      <div className="d-flex align-items-center">
        <img src={HobbyCueLogo} alt="Logo"  />

        <div className="input-group ms-3 search-bar">
          <input type="text" className="form-control" placeholder="Search here" aria-label="Search here" />
          <span className="input-group-text p-0">
            <img src={Search} alt="Search" className="icon search-icon" />
          </span>
        </div>
      </div>
      <nav className="d-none d-md-flex">
        <ul className="nav header-nav">
          <li className="nav-item dropdown d-flex align-items-center">
            <img src={Explore} alt="Explore" className="icon" />
            <a className="nav-link " href="#" id="exploreDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Explore
            </a>
            <img src={ArrowExpand} alt="ArrowExpand" className="icon"   onClick={toggleExploreDropdown}/>
            {/* <ul className="dropdown-menu" aria-labelledby="exploreDropdown"> */}
            <ul className={`dropdown-menu ${isExploreDropdownOpen ? 'show' : ''}`} aria-labelledby="exploreDropdown">
              <li><a className="dropdown-item" href="#">People-Community</a></li>
              <li><a className="dropdown-item" href="#">Places-Venus</a></li>
              <li><a className="dropdown-item" href="#">Programs-Events</a></li>
              <li><a className="dropdown-item" href="#">Blogs</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown d-flex align-items-center">
            <img src={Hobbies} alt="Hobbies" className="icon" />
            <a className="nav-link" href="#" id="hobbiesDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded={isHobbiesDropdownOpen ? 'true' : 'false' }>
              Hobbies
            </a>
            <img src={ArrowExpand} alt="ArrowExpand" className="icon" onClick={toggleHobbiesDropdown} />
            <ul className={`dropdown-menu ${isHobbiesDropdownOpen ? 'show' : ''}`} aria-labelledby="hobbiesDropdown">
              <li><a className="dropdown-item" href="#">Hobby 1</a></li>
              <li><a className="dropdown-item" href="#">Hobby 2</a></li>
              <li><a className="dropdown-item" href="#">Hobby 3</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src={Bookmark} alt="Bookmark" className="icon" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src={Notifications} alt="Notifications" className="icon" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src={ShoppingCart} alt="ShoppingCart" className="icon" />
            </a>
          </li>
          <li className="nav-item">
            <button type="button" className="btn-link-button">Sign In</button>
          </li>
        </ul>
      </nav>
      <div className="d-flex d-md-none align-items-center">
        <img src={IconSearch} alt="IconSearch" className="icon small-serach" />
        <img src={Notifications} alt="Notifications" className="icon" />
        <img src={Menubar} alt="Menubar" className="icon" />
        
      </div>
    </header>
  );
}

export default Header;