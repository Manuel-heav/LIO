import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./tophosts.css"
const TopHosts = () => {
  return (
    <div className="tophosts">
            <div className="card__top__container">
            <div className="card__top__left">
                <AccountCircleIcon fontSize='large' className="card__account__icon" />
                <p>Host @manuelheav</p>
            </div>
            <p>few seconds ago</p>
        </div>
    </div>
  )
}

export default TopHosts