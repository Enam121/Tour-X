import React from 'react';
import { useHistory } from 'react-router';
import './notFound.css'

const NotFound = () => {
  const history = useHistory();

  const handleBackToHomeButton = () => {
    history.push('/home')
  }

  return (
    <div className="container">

      <div className="d-flex align-items-center">
        <div className="">
          <h1 className="w-75 fs-1 text-start mb-4" >Error Page 404</h1>
          <p className="w-75 fs-5 text-start " >The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.</p>
          <div className="w-75 mt-5">
            <button className="btn btn-light btn-outline-dark   rounded-pill py-3 px-5 ms-0"
              onClick={handleBackToHomeButton}
            >
              BACK TO HOME
            </button>
          </div>
        </div>
        <div className="err-banner "></div>
      </div>

    </div>

  );
};

export default NotFound;