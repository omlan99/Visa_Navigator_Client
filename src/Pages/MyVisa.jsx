import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import axios from 'axios';

const MyVisa = () => {
    const {user} = useContext(AuthContext)
    const [myVisa, setMyVisa] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/myVisa?email=${user.email}`)
        .then(res => setMyVisa(res.data))
    },[])
    console.log(myVisa)
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
                <button onClick={() =>handleClick(visa._id)} className="btn btn-primary btn-wide">Delete</button >
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default MyVisa;