import React from 'react';

const VisaCard = ({visa}) => {
    const {country_image, country_name, visa_type, processing_time, validity} =visa
    return (
        <div className="card bg-base-100  shadow-xl border ">
        <figure className="px-10 pt-10 ">
          <img
            src={country_image}
            alt="country Flag"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body justify-start items-start ">

          <p><span className="font-semibold">Country Name</span> : {country_name}</p>
          <p><span className="font-semibold">Visa Type</span> : {visa_type}</p>
          <p><span className="font-semibold">Proceessing Time</span> : {processing_time}</p>
          <p><span className="font-semibold">Validity</span> : {validity}</p>
          <div className="card-actions mx-auto my-2">
            <button onClick={() =>handleClick(visa._id)} className="btn btn-primary w-full">See Details</button >
          </div>
        </div>
      </div>
    );
};

export default VisaCard;