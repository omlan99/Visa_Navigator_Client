import React from "react";

const VisaApplication = () => {
  return (
    <div className="m-4">
      <div className="flex px-3 py-6 items-center gap-5">
        <div className="">
          <img className="w-[200px]" src="https://i.ibb.co.com/bv3r4tG/au.webp" alt="" />
        </div>
        <div className="flex py-5 gap-3">
          <div >
            <p>country_name Australia</p>
            <p>age_restriction: 18,</p>
            <p>
              description: A visa allowing young people to work and travel in
              Australia for up to a year.,
            </p>
            <p>validity: 1 year,</p>
            
          </div>
          <div>
            <p>fee: 485,</p>
            <p>application_method: Online submission</p>
            <p>required_documents:</p>
            <p>processing_time: 15-30 days,</p>
            <p>visa_type: Working Holiday Visa,</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaApplication;
