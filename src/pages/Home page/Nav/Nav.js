import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import logo from '../../../images/logo.png';

const Nav = () => {
  const history = useHistory();
  const { user, setUser, signingOut } = useAuth();

  const handleLoginButton = () => {
    history.push('/login');
  };


  const handleLogOut = () => {
    signingOut()
      .then(result => {
        setUser(null);
        history.push('/')
      })

  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top px-5 py-3">
      <div className="container-fluid">
        <Link className="navbar-brand me-5" to="/">
          <img src={logo} alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex align-items-center justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/destination">Destination</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
            {
              user &&
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/my-cart">My Cart</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/manage-orders">Manage All Orders</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-service">Add A New Service</Link>
                </li>
              </ul>
            }
          </ul>

          {
            user ? <div>

              <strong>{user.displayName}</strong>
              <button className="btn ms-3"
                style={{ backgroundColor: '#ff7f47', }}
                onClick={handleLogOut}>Log out</button>
            </div>

              :
              <button className="btn-regular mb-0"
                onClick={handleLoginButton}>Login</button>
          }

        </div>
      </div>
    </nav>
  );
};

export default Nav;