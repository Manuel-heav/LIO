import React from 'react'
import { Link } from 'react-router-dom'
import "./signup.css"
const Signup = () => {
  return (
    <div className="signup">
      <div className="signup__container">
      <h1>Lio</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Passsword" />
      <button>Signup</button>
      <Link to="/signup"><p>Have an account?</p></Link>
      </div>
    </div>
  )
}

export default Signup