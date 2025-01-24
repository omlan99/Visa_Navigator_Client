import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const VisaApplication = () => {
  const {user} = useContext(AuthContext)
  const [applications, setApplications] = useState()
   useEffect(() =>{
      axios.get(`http://localhost:3000/application?email=${user?.email}`)
      .then(res => {
        console.log(res.data)
        setApplications(res.data)
      })
   } , [])
  return (
    <div className="m-4">
      <h3 className="text-xl text-center my-5">My All Applications</h3>
      {
        applications.map(application =>{
          
        })
      }
    </div>
  );
};

export default VisaApplication;
