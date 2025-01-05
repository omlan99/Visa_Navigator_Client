import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllVisas = () => {
  const [allVisa, setAllVisa] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        setAllVisa(data);
      });
  }, []);
  console.log(allVisa);
  return (
    <div>
      <h1 className="text-5xl text-center py-6 font-bold">All Visa</h1>

      <div className="grid grid-cols-4 gap-5 py-24">
        {allVisa.map((visa) => (
          <div className="card bg-base-100  shadow-xl border ">
            <figure className="px-10 pt-10 ">
              <img
                src={visa.country_image}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body justify-start items-start ">

              <p><span className="font-semibold">Country Name</span> : {visa.country_name}</p>
              <p><span className="font-semibold">Visa Type</span> : {visa.visa_type}</p>
              <p><span className="font-semibold">Proceessing Time</span> : {visa.processing_time}</p>
              <p><span className="font-semibold">Validity</span> : {visa.validity}</p>
              <div className="card-actions mx-auto my-2">
                <Link to={'/details'} className="btn btn-primary btn-wide">See Details</Link >
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
