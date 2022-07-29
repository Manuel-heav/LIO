import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import "./card.css"
const Card = () => {
  return (
    <div className="card">
        <div className="card__top__container">
            <div className="card__top__left">
                <AccountCircleIcon fontSize='large' className="card__account__icon" />
                <p>Host @manuelheav</p>
            </div>
            <p>few seconds ago</p>
        </div>
        <div className="card__main">
            <h2>This is a very safe space</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ab nisi voluptatem? Possimus autem voluptatibus, vero unde cupiditate porro dolorum dolorem officia provident obcaecati labore nostrum! Consequuntur est eos facilis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ab nisi voluptatem? Possimus autem voluptatibus, vero unde </p>
        </div>
        <hr style={{marginBottom: "20px"}}/>
        <div className="card__bottom__container">
            <PeopleIcon />
            <p>342 joined</p>
        </div>
   </div>
  )
}

export default Card