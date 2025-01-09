import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";

const AllVisas = () => {
  const [allVisa, setAllVisa] = useState([]);
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000' )
    .then(res=>{
      console.log(res.data) 
      setAllVisa(res.data)})
   
  }, []);
  console.log(allVisa);
  const handleClick = (data)=>{
    user ? navigate(`/allvisa/${data}`) : navigate('/login')
    
   }
   const handleFilter = (value) =>{
    console.log('button Clicked')
    console.log(value.target.value)
   }
  return (
    <div>
      <h1 className="text-5xl text-center py-6 font-bold">All Visa</h1>
      <div>
   
<details className="dropdown ">
  <summary className="btn m-1">Filter By</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a  onClick={(e) =>handleFilter(e)}>Tourist Visa</a></li>
    <li><a  onClick={(e) =>handleFilter(e)}>Student Visa</a></li>
    <li><a  onClick={(e) =>handleFilter(e)}>Work Visa</a></li>
    <li><a  onClick={(e) =>handleFilter(e)}>Business Visa</a></li>
    <li><a  onClick={(e) =>handleFilter(e)}>Medical Visa</a></li>
    <li><a  onClick={(e) =>handleFilter(e)}> Working Holidy Visa</a></li>
  </ul>
</details>
      </div>
      <div className="grid grid-cols-4 gap-5 py-5">
        {allVisa.map((visa) => (
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
              <p><span className="font-semibold">Validity</span> : {visa.validity}</p>
              <div className="card-actions mx-auto my-2">
                <button onClick={() =>handleClick(visa._id)} className="btn btn-primary btn-wide">See Details</button >
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
