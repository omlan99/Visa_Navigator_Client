import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";


const AllVisas = () => {
  const [allVisa, setAllVisa] = useState([]);
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();

  useEffect(() => {
      axios.get('http://localhost:3000')
      .then(res=>{
        console.log(res.data) 
        setAllVisa(res.data)})
   
  }, []);
  console.log(allVisa);
  const handleClick = (data)=>{
    user ? navigate(`/allvisa/${data}`) : navigate('/login')
    
   }
   const handleFilter = (e) =>{
    console.log(e.target.value)

    // axios.get(`http://localhost:3000/type?type=${value}` )
    // .then(res => {
    //   console.log(res.data)
    //   setAllVisa(res.data)
    // })
   }
  return (
    <div>
      <h1 className="text-5xl text-center py-6 font-bold">All Visa</h1>
      <div>
   
{/* <details className="dropdown ">
  <summary className="btn m-1">Filter By</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow" open>
    <li><a  onClick={() =>handleFilter('Tourist Visa')}>Tourist Visa</a></li>
    <li><a  onClick={() =>handleFilter('Student Visa')}>Student Visa</a></li>
    <li><a  onClick={() =>handleFilter('Work Visa')}>Work Visa</a></li>
    <li><a  onClick={() =>handleFilter('Business Visa')}>Business Visa</a></li>
    <li><a  onClick={() =>handleFilter('Medical Visa')}>Medical Visa</a></li>
    <li><a  onClick={() =>handleFilter('Working Holiday Visa')}> Working Holidy Visa</a></li>
  </ul> 
</details>*/}
<select className="select select-bordered w-full max-w-xs" onCLick={handleFilter}>
    <option disabled selected>Visa Type</option>
    <option value={"Tourist Visa"}>Tourist Visa </option>
    <option value={"Student Visa"}>Student Visa</option>
    <option value={"Work Visa"}>Work Visa</option>
    <option value={"Business Visa"}>Business Visa</option>
    <option value={"Medical Visa"}>Medical Visa</option>
    <option value={"Working Holidy"}>Working Holidy Visa</option>
</select>

      </div>
      <div className="grid md:grid-cols-3  lg:grid-cols-4 gap-5 py-5">
        {allVisa.map((visa) => (
          <div className="card bg-base-100  shadow-xl border ">
          <figure className="px-10 pt-10 ">
            <img
              src={visa.country_image}
              alt="country flag"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body justify-start items-start ">
            <p>
              <span className="font-semibold">Country Name</span> :{" "}
              {visa.country_name}
            </p>
            <p>
              <span className="font-semibold">Visa Type</span> :{" "}
              {visa.visa_type}
            </p>
            <p>
              <span className="font-semibold">Proceessing Time</span> :{" "}
              {visa.processing_time}
            </p>
            <p>
              <span className="font-semibold">Validity</span> :{" "}
              {visa.fee}
            </p>
            <p>
              <span className="font-semibold">Validity</span> :{" "}
              {visa.validity}
            </p>
            <p>
              <span className="font-semibold">Application Method</span> :{" "}
              {visa.application_method}
            </p>
            <div className="card-actions mx-auto my-2">
              <button
                onClick={() => handleClick(visa._id)}
                className="btn btn-primary btn-wide"
              >
                See Details
              </button>
            </div>
          </div>
      
        </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
