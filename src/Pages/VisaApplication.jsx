import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const VisaApplication = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const email = user?.email || ""
  const [loading, setLoading] =useState(true)
  useEffect(() => {
    if(!email) return;

    setLoading(true)
    axios
      // .get(`http://localhost:3000/application?email=${email}`)
      .get(`https://visa-navigator-server-drab.vercel.app/application?email=${email}`)
      .then((res) => {
        setApplications(res.data);
        
      })
      .catch((err) => console.error("Error fetching applications:", err));
      setLoading(false)
  }, [email]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete your application?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your application has been deleted.",
          icon: "success",
        });
        axios
          // .delete(`http://localhost:3000/application/${id}`)
          .delete(`https://visa-navigator-server-drab.vercel.app/application/${id}`)
          .then((res) => setApplications(applications.filter((visa) => visa._id !== id)));
      }
    });
  };

  return (
    <div className="m-4">
      {
        loading ? <><div className="text-center" ><span className="loading loading-infinity loading-lg"></span></div></> : <> <h3 className="text-xl text-center my-5">My All Applications</h3>
        <div className="grid md:grid-cols-3  lg:grid-cols-4 gap-5 py-5">
        {
        // applications.length > 0 ? (
          applications.map((application, index) => (
            <div key={index} className="card bg-base-100 shadow-xl border">
              <figure className="px-10 pt-10 ">
                <img
                  src={application.country_image}
                  alt="country flag"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body justify-start items-start ">
                <p>
                  <span className="font-semibold">Applicant's Name </span> :{" "}
                  {application.firstName} {application.lastName}
                </p>
                <p>
                  <span className="font-semibold">Applicant's Email </span> :{" "}
                  {application.email}
                </p>
                <p>
                  <span className="font-semibold">Country Name</span> :{" "}
                  {application.country_name}
                </p>
                <p>
                  <span className="font-semibold">Visa Type</span> :{" "}
                  {application.visa_type}
                </p>
                <p>
                  <span className="font-semibold">Processing Time</span> :{" "}
                  {application.processing_time}
                </p>
                <p>
                  <span className="font-semibold">Fee</span> : {application.fee}
                </p>
                <p>
                  <span className="font-semibold">Validity</span> :{" "}
                  {application.validity}
                </p>
                <p>
                  <span className="font-semibold">Application Method</span> :{" "}
                  {application.application_method}
                </p>
  
                <div className="card-actions mx-auto my-2">
                  <button onClick={() => handleDelete(application._id)} className="btn btn-primary btn-wide">Cancel</button>
                </div>
              </div>
            </div>
        //   ))
        // ) : (
        //   <p className="text-center">No applications found.</p>
        ))} 
        </div></>
      }
     
    </div>
  );
};

export default VisaApplication;
