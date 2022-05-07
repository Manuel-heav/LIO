import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className="login">
        <div className="login__container">
            <h1>LIO</h1>
            <form>
                <label>Username</label>
                <input type="text" name="username" placeholder="Enter Username..." />
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter Password..." />
                <button>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login