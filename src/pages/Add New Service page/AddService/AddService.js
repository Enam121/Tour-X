import React from 'react';
import { useForm } from 'react-hook-form';


const AddService = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    console.log(data)
    fetch('https://intense-wave-50783.herokuapp.com/services', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Added Successfully')
          reset();
        }
      })

  }

  return (
    <div>
      <h2>Add a new Service</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="col-md-5 detail-form">
        <input type="text" placeholder="Name" {...register("name", { required: true, maxLength: 80 })} />
        <br />
        <input type="text" placeholder="Description" {...register("desc", { required: true })} />
        <br />
        <input type="number" placeholder="Price" {...register("price", { required: true })} />
        <br />
        <input type="text" placeholder="Image Url" {...register("image", { required: true })} />
        <br />
        <input type="submit" value="Add" className="btn-regular" />

      </form>
    </div>
  );
};

export default AddService;