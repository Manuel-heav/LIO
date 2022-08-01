import React from 'react'

const Login = () => {
  return (
    <div className="login">
      <h1>Lio</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Passsword" />
      <button>Login</button>
      <p>Don't have an account? Sign up</p>
    </div>
  )
}

export default Login