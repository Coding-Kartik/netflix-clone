import React, { useEffect , useRef } from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import { logout } from '../../firebase'
import { getAuth } from 'firebase/auth'


const Navbar = () => {

  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll Y:', window.scrollY);
      if (window.scrollY >= 80) {
        console.log('Adding nav-dark class');
        navRef.current.classList.add('nav-dark');
      } else {
        console.log('Removing nav-dark class');
        navRef.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <div ref ={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt ="hello"/>
        <ul>
          <li>Home</li>
          <li>TV Show</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
    <div className="navbar-right">
      <img src={search_icon} alt= "" className='icons'/>
      <p>icon</p>
      <img src={bell_icon} alt= "" className='icon'/>
      <div className="navbar-profile">
      <img src={profile_img} alt= "" className='profile'/>   
      <img src={caret_icon} alt= "" />

      <div className="dropdown">
      <p onClick={()=>{logout()}}>Sign out of  Netflix</p>

      </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar