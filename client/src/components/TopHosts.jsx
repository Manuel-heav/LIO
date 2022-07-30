import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./tophosts.css"
const TopHosts = () => {
  return (
    <div className="tophosts">
      <h2>Top Hosts</h2>
            <div className="card__top__container">
            <div className="card__top__left">
                <AccountCircleIcon fontSize='large' className="card__account__icon" />
                <p>John Doe</p>
            </div>
            <button>Follow</button>
            </div>
            <div className="card__top__container">
            <div className="card__top__left">
                <AccountCircleIcon fontSize='large' className="card__account__icon" />
                <p>Jane Doe</p>
            </div>
            <button>Follow</button>
            </div>
            <div className="card__top__container">
            <div className="card__top__left">
                <AccountCircleIcon fontSize='large' className="card__account__icon" />
                <p>Rick Grimes</p>
            </div>
            <button>Follow</button>
            </div>
            <div className="card__top__container">
            <div className="card__top__left">
                <AccountCircleIcon fontSize='large' className="card__account__icon" />
                <p>Otis Milburn</p>
            </div>
            <button>Follow</button>
            </div>
            <div className="card__top__container">
            <div className="card__top__left">
                <AccountCircleIcon fontSize='large' className="card__account__icon" />
                <p>Dwayne Johnson</p>
            </div>
            <button>Follow</button>
            </div>
            <div className="card__top__container">
            <div className="card__top__left">
                <AccountCircleIcon fontSize='large' className="card__account__icon" />
                <p>Kevin Hart</p>
            </div>
            <button>Follow</button>
            </div>
            <div className="card__top__container">
            <div className="card__top__left">
                <AccountCircleIcon fontSize='large' className="card__account__icon" />
                <p>The Lumineers</p>
            </div>
            <button>Follow</button>
            </div>

            <p style={{margin: "auto", color:"#6164FF", textAlign: "center", cursor: "pointer"}}>More</p>

    </div>
  )
}

export default TopHosts