import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
  return (
    <div className="header">
        <div className="header__wrapper">
          <div className="header__left__wrapper">
            <h1>Lio</h1>
            <div className="header__search__container">
              <input type="text" placeholder="Search..." />
              <SearchIcon fontSize='small'/>
            </div>
          </div>
          <div className="header__account__container">
           <AccountCircleIcon fontSize='large' />
            <p>Login</p>
          </div>
        </div>     
    </div>
  )
}

export default Header