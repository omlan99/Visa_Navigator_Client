import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VisaDetails = () => {
  const [allVisa, setAllVisa] = useState([]);
  const { id } = useParams();
  console.log(typeof id);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setAllVisa(data));
  }, []);
  const foundVisa = allVisa.find((visa) => visa.id == Number(id));
  console.log(foundVisa);

  const handleClick = () =>{
    document.getElementById("my_modal_1").showModal();
  }

  if (!foundVisa) {
    return <div>Visa is loading</div>;
  }
  return (
    <div className="grid grid-cols-2 gap-5">
      <div><img src={foundVisa.country_image} alt="" /></div>

      <div>
      <div className="py-2"><p><span className="font-medium ">Country :</span> {foundVisa.country_name}</p></div>
      <div className="py-2"><p><span className="font-medium ">Description :</span> {foundVisa.description}</p></div>
      <div className="py-2"><p><span className="font-medium ">Fees :</span> {foundVisa.fee}</p></div>
      <div className="py-2"><p><span className="font-medium ">Processing Time</span> : {foundVisa.processing_time}</p></div>
      <div className="py-2"><p><span className="font-medium ">Validity :</span> {foundVisa.validity}</p></div>
      <div className="py-2"><p><span className="font-medium ">Visa Type</span> : {foundVisa.visa_type}</p></div>
      <div className="py-2"><p><span className="font-medium ">Age Restriction</span> : {foundVisa.age_restriction}</p></div>
      <div className="py-2"><p><span className="font-medium ">Application Method</span> : {foundVisa.application_method}</p></div>
      <div className="py-2"><p><span className="font-medium ">Requirred Documents</span> : {foundVisa.
required_documents.map(document =><span>{document}, </span> )}</p></div>

      <button onClick={handleClick} className="btn w-full btn-primary">Apply for visa</button>
        </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <form action="">
                
            </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button  className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default VisaDetails;
