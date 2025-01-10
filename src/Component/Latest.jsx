import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

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
      <div className="flex justify-center py-5">
        <Link to={'/allvisa'} className="btn btn-primary btn-wide">See All VIsa</Link>
      </div>
    </div>
  );
};

export default Latest;
