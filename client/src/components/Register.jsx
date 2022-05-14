import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className="login">
      <div className="login__header">
        <h1>LIO</h1>
        <div className="login__btn__container">
          <button className="widerBtn">Log In</button>
        </div>
      </div>
      <div className="main__container">
        <div className="login__container">
            <h1>Register for LIO</h1>
            <h2>you are anonymous.</h2>
            <form>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <button>Register</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login