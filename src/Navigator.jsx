import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navigator.css';
import {faArrowAltCircleRight, faArrowRight,faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';

  let icon = document.querySelector(".icon")
  let nav = document.querySelector(".nav-container")
  let menu = document.querySelector(".menu")

// icon.addEventListener("click", function(){
//     nav.classList.toggle(".navhide")
//     menu.classList.toggle("vMenu")
//     // console.log('activated')
// })


function Navigator() {
  let [showMenu, setShowMenu] = useState(true);
  let [showNav, setShowNav] = useState(true);

  function toggleMenu(){
    setShowMenu(showMenu => !showMenu);
    setShowNav(showNav => !showNav);
  }

let toggleClassCheck = showMenu ? 'active': '';
let toggleClassCheck2 = showNav ? 'active': '';

  return (
    <div className={`nav-container${toggleClassCheck2}`}>
        <div className='navbar'>
          <ul className={`menu${toggleClassCheck}`}>
          <li><Link to='/eco-living/'>Home</Link></li>
            <li><Link to='/eco-living/about'>About</Link></li>
            <li><Link to='/eco-living/contact'>Contact</Link></li>
          </ul>
          <div className='icon'>
          <FontAwesomeIcon icon={faArrowRightToBracket} onClick={toggleMenu}> </FontAwesomeIcon>
          </div>
        </div>
      

    </div>
  );
}

export default Navigator;
