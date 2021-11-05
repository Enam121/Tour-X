import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
  const { signUpUsingEmail, signInUsingGoogle } = useAuth();

  const history = useHistory();
  const location = useLocation()
  const uri = location.state?.from.pathname;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const cleanInputField = (id) => document.getElementById(id).value = '';

  const handleSignup = () => {
    signUpUsingEmail(email, password)
      .then(res => {
        history.push(uri);

      })
  }

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then(res => {
        history.push(uri);

      })
  }

  return (
    <div className="login-form">
      <div className="shadow">
        <h2 style={{ color: '#f60' }}>Create Account</h2>
        <form onSubmit={handleSignup}>
          <input type="text" name="" placeholder="Enter your name" className="input-field" id="name" />
          <br /><br />
          <input type="email" placeholder="Enter your email address" className="input-field" id="email" onBlur={handleEmail} />
          <br /><br />
          <input type="password" name="" placeholder="password (at least 6 charecter)" className="input-field" id="password" onBlur={handlePassword} />
          <br /><br />
          <input type="password" name="" placeholder="Re-enter-password " className="input-field" id="re-enter-password" />
          <br /><br />
          {/* <p className="text-danger mb-1">{error}</p> */}
          <button className="btn-regular " type="submit"
          >
            Submit
          </button>
        </form>
        <hr />
        <button className="google-btn" onClick={handleGoogleSignIn}>
          <p className="flex">
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="" />

            <span> Signup with google  </span>
          </p>
        </button>
        <p>Already have an account? <Link to="/login">Please login</Link>
        </p>
      </div>

    </div>
  );
};

export default Signup;