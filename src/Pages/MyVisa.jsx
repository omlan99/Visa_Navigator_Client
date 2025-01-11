import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const MyVisa = () => {
    const {user} = useContext(AuthContext)
    const [myVisa, setMyVisa] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/myVisa?email=${user?.email}`)
        .then(res => setMyVisa(res.data))
    },[])
    console.log(user)
    const handleDelete = (id) => {
       
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
              
            });
            axios.delete(`http://localhost:3000/delete/${id}`)
            .then(res => setMyVisa(myVisa.filter(visa => visa._id !== id)))
          }
        });
        
    }
    return (
        <div>
            <div className="grid grid-cols-4 gap-5 py-5">
        {myVisa.map((visa) => (
          <div className="card bg-base-100  shadow-xl border ">
            <figure className="px-10 pt-10 ">
              <img
                src={visa.country_image}
                alt="country Flag"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body justify-start items-start ">

              <p><span className="font-semibold">Country Name</span> : {visa.country_name}</p>
              <p><span className="font-semibold">Visa Type</span> : {visa.visa_type}</p>
              <p><span className="font-semibold">Proceessing Time</span> : {visa.processing_time}</p>
              <p><span className="font-semibold">Fee</span> : {visa.fee}</p>
              <p><span className="font-semibold">Validity</span> : {visa.validity}</p>
              <div className="card-actions mx-auto my-2 flex">
                <button onClick={() =>handleClick(visa._id)} className="btn btn-primary btn-wide">Updatae</button >
                <button onClick={() =>handleDelete(visa._id)} className="btn btn-primary btn-wide">Delete</button >
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default MyVisa;