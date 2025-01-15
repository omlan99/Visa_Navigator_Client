import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import VisaCard from "./VisaCard";

const Latest = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
  const [allVisa, setAllVisa] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/?limit=6")
      .then((res) => res.json())
      .then((data) => {

        setAllVisa(data)
      });
  }, []);
  console.log(allVisa);
  const handleClick = (data)=>{
    user ? navigate(`/allvisa/${data}`) : navigate('/login')
    
   }
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 py-24">
        {allVisa.map((visa) => (
          <VisaCard visa={visa}></VisaCard>
        ))}
      </div>
      <div className="flex justify-center py-5">
        <Link to={'/allvisa'} className="btn btn-primary btn-wide">See All VIsa</Link>
      </div>
    </div>
  );
};

export default Latest;
