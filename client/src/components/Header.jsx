import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="header">
        <div className="header__wrapper">
          <div className="header__left__wrapper">
          <Link to="/"><h1 style={{color: "white"}}>Lio</h1></Link>  
            <div className="header__search__container">
              <input type="text" placeholder="Search..." />
              <SearchIcon fontSize='small'/>
            </div>
            <h2>Dashboard</h2>
            <h2>About</h2>
            <h2>Contact</h2>
          </div>
          <div className="header__account__container">
           <Link to="signup"><button>Join</button></Link>
            <Link to="login"><p>Login</p></Link>
          </div>
        </div>     
    </div>
  )
}

export default Header