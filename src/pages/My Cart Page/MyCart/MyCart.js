import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';


const MyCart = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  // console.log(user)

  useEffect(() => {
    fetch('https://intense-wave-50783.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setOrders(data.filter(order => order.Email === user?.email)))

  }, []);

  const handleDeleteButton = (name) => {

    fetch(`https://intense-wave-50783.herokuapp.com/orders/${name}`, { method: 'DELETE', })
      .then(res => res.json())
      .then(result => console.log(result))

  }


  return (
    <div>
      <div className="d-flex justify-content-center">
        <h3>{orders?.order?.name}</h3>
        {orders?.order?.name && <button onClick={() => handleDeleteButton(orders.order.name)}>X</button>}
      </div>
    </div>
  );
};

export default MyCart;