import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import VisaCard from "../Component/VisaCard";

const AllVisas = () => {
  const [allVisa, setAllVisa] = useState([]);
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000' )
    .then(res=>{
      console.log(res.data) 
      setAllVisa(res.data)})
   
  }, []);
  console.log(allVisa);
  const handleClick = (data)=>{
    user ? navigate(`/allvisa/${data}`) : navigate('/login')
    
   }
   const handleFilter = (value) =>{
    console.log(value)
    http://localhost:3000/myVisa?email=${user?.email}
    axios.get(`http://localhost:3000/type?type=${value}` )
    .then(res => {
      console.log(res.data)
      setAllVisa(res.data)
    })
   }
  return (
    <div>
      <h1 className="text-5xl text-center py-6 font-bold">All Visa</h1>
      <div>
   
<details className="dropdown ">
  <summary className="btn m-1">Filter By</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a  onClick={() =>handleFilter('Tourist Visa')}>Tourist Visa</a></li>
    <li><a  onClick={() =>handleFilter('Student Visa')}>Student Visa</a></li>
    <li><a  onClick={() =>handleFilter('Work Visa')}>Work Visa</a></li>
    <li><a  onClick={() =>handleFilter('Business Visa')}>Business Visa</a></li>
    <li><a  onClick={() =>handleFilter('Medical Visa')}>Medical Visa</a></li>
    <li><a  onClick={() =>handleFilter('Working Holidy Visa')}> Working Holidy Visa</a></li>
  </ul>
</details>
      </div>
      <div className="grid md:grid-cols-3  lg:grid-cols-4 gap-5 py-5">
        {allVisa.map((visa) => (
          <VisaCard visa={visa}></VisaCard>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
