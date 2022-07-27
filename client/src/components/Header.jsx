import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
  return (
    <div className="header">
        <div className="header__wrapper">
          <h1>Lio</h1>
          <div className="header__search__container">
            <SearchIcon fontSize='small'/>
            <input type="text" />
          </div>
          <AccountCircleIcon />
        </div>     
    </div>
  )
}

export default Header