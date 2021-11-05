import React from 'react';
import { useEffect, useState } from 'react';
import ServiceCart from '../../Shared/ServiceCart/ServiceCart';

const Destination = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('https://intense-wave-50783.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div className="container my-5">
      <div className=" row g-4">
        {
          services.map(service => <ServiceCart key={service.id} service={service} />)
        }
      </div>
    </div>
  );
};

export default Destination;