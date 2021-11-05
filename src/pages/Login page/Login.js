import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './login.css'

const Login = () => {
  const { signInUsingEmail, signInUsingGoogle } = useAuth();
  const history = useHistory();
  const location = useLocation()

  const uri = location.state?.from || "/";

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const cleanInputField = (id) => document.getElementById(id).value = '';

  const handleLogin = () => {
    signInUsingEmail(email, password)
      .then(res => {
        history.push(uri)
      })

  }

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then(res => {
        history.push(uri)
      })

  }

  return (
    <div className="login-form">
      <div className="shadow">
        <h2 style={{ color: '#f60' }}>Log in</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="your email" className="input-field" id="email" onBlur={handleEmail} />
          <br /><br />
          <input type="password" placeholder="password" className="input-field" id="password" onBlur={handlePassword} />
          <br /><br />
          {/* <p className="text-danger mb-1">{error}</p> */}
          <button className="btn-regular"
            type="submit"
          // onClick={handleLogin}
          >
            Continue
          </button>
        </form>
        <hr />
        <button className="google-btn" onClick={handleGoogleSignIn}>

          <p className="flex">
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="" />
            <span> Login with google  </span>
          </p>

        </button>
        <p>New user?</p>
        <button><Link to="/signup">Create account</Link></button>
      </div>

    </div>
  );
};

export default Login;