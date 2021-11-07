import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';


const MyCart = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  console.log(user)

  useEffect(() => {
    if (user !== null) {
      fetch(`https://intense-wave-50783.herokuapp.com/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
          setOrders(data)
          console.log(data)
        })
    }


  }, []);


  const handleDeleteButton = (id) => {
    const permission = window.confirm('Are you sure? you want to cancel it');
    if (permission) {
      fetch(`https://intense-wave-50783.herokuapp.com/orders/${id}`, { method: 'DELETE', })
        .then(res => res.json())
        .then(result => {
          console.log(result)
          if (result.deletedCount > 0) {
            setOrders(orders.filter(order => order._id !== id))
          }
        })

    }


  }


  return (

    <div>
      {
        orders.map(order => <div key={order._id} className="d-flex justify-content-center">
          <h3>{order.order.name}</h3>

          {order.order.name && <button onClick={() => handleDeleteButton(order._id)}>X</button>}
        </div>)
      }

    </div>

  );
};

export default MyCart;