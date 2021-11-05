import React, { useState, useEffect } from 'react';
import img from '../../../images/pic-5.png';
import ServiceCart from '../../Shared/ServiceCart/ServiceCart';
import Subscribe from '../Subscribe/Subscribe';
import './home.css'


const Home = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('https://intense-wave-50783.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>

      {/* banner */}
      <div className="banner">
        <div>
          <h3 className="text-white fs-1 pt-5">Welcome Welcome..</h3>
        </div>
      </div>
      {/* home intro */}
      <div className="container d-flex align-items-center margin">
        <div>
          <img src={img} alt="" />
        </div>
        <div className=" text-start ms-5">
          <h2 className=" mb-4 lh-sm" style={{ fontSize: '50px' }}>A Simply Perfect <br /> Place To Get Lost</h2>
          <p className="fs-5 ">Treat yourself with a journey to your inner self. Visit a mystique Tibet and start your spiritual adventure. We promise, you’ll enjoy every step you make.</p>
          <button className="btn btn-secondary py-2 px-4">See more</button>
        </div>
      </div>

      {/* service */}
      <div className="container my-5">
        <div className=" row g-4">
          {
            services.map(service => <ServiceCart key={service.id} service={service} />)
          }
        </div>
      </div>

      <Subscribe />

    </div>
  );
};

export default Home;