import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './detail.css'


const Detail = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  const { user } = useAuth()

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    data.order = service;

    fetch('https://intense-wave-50783.herokuapp.com/orders', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          alert('Successfully booked')
        }
      })
    reset()

  };
  // console.log(errors);

  useEffect(() => {
    fetch(`https://intense-wave-50783.herokuapp.com/services/${id}`)
      .then(res => res.json())
      .then(data => setService(data))
  }, [])


  useEffect(() => {


  }, []);


  return (
    <div className="container my-5">
      <div className="row ">
        <p className="col-md-6 detail">{service.desc}</p>

        <form onSubmit={handleSubmit(onSubmit)} className="col-md-5 detail-form">
          <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} defaultValue={user?.displayName} />
          <br />
          <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} defaultValue={user.email} />
          <br />
          <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
          <br />
          <input type="date" {...register("Date", { required: true })} />
          <br />
          <input type="text" placeholder="Number of trickets" {...register("trickets", { required: true })} />

          <br />
          <input type="submit" value="BOOK NOW" className="btn-regular" />
        </form>
      </div>
    </div>
  );
};

export default Detail;