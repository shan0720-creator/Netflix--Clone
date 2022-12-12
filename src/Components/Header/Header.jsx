import React from 'react'
import logo from "../../logo.png";
import {Link} from "react-router-dom";
import {ImSearch} from "react-icons/im";




const Header = () => {
  
   
    
  return (
    <nav className="header">
     <img src={logo} alt="logo" /> 
     <div>
        <Link to = "/tvshows">TV shows</Link>
        <Link to = "/Movies">Movies</Link>
        <Link to = "/Recently Added">Recently Added</Link>
        <Link to = "/My List">My List</Link>
        
     </div>
     <ImSearch/>
    </nav>
  )

  };
export default Header