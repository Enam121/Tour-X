import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ServiceCart = ({ service }) => {
  const [id, setId] = useState([]);

  const { _id, image, name, price } = service;

  const handleonMouseOver = () => {
    setId(service.id);

  }

  const handleonMouseOut = () => {
    setId('');

  }

  const url = `/detail/${_id}`

  return (
    <div className="col-md-4" >

      <Link to={url}>

        <div className="service-img"
          onMouseOver={handleonMouseOver}
          onMouseOut={handleonMouseOut}
          style={id === service.id ? { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0,0,0,0.3)), url(${image})`, transition: '22s linear' } :
            { backgroundImage: `url(${image})` }

          } >

          <div className="title text-justify">
            <h3 id="avenger" className="text-white ">{name}</h3>
            <p id={id === service.id ? "d-block" : "d-none"} className="desc text-light "> For more Book & information
              Please click the image
            </p>
            <p className="fs-4 text-white">${price}</p>
          </div>

        </div>
      </Link>
    </div >

  );
};

export default ServiceCart;
