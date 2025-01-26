import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const VisaDetails = () => {
  const { user } = useContext(AuthContext);

  const [foundVisa, setFoundVisa] = useState({});
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({});

  useEffect(() => {
    // axios.get(`http://localhost:3000/visa/${id}`)
    axios
      .get(`https://visa-navigator-server-drab.vercel.app/visa/${id}`)
      .then((res) => {
        setFoundVisa(res.data);
        reset({
          visaFee: res.data.fee,
          email: user?.email,
          applied_date: new Date().toISOString().split("T")[0],
        });
      });
  }, [id, reset, setFoundVisa]);

  const handleClick = () => {
    document.getElementById("my_modal_3").showModal();
  };

  if (!foundVisa) {
    return <div>Visa is loading</div>;
  }
  const { _id, ...foundVisaWithoutId } = foundVisa;
  const onSubmit = (data) => {
    const postingData = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      date: data.applied_date,
      ...foundVisaWithoutId,
    };
    // axios.post(`http://localhost:3000/application`, postingData)
    axios
      .post(
        `https://visa-navigator-server-drab.vercel.app/application`,
        postingData
      )
      .then((res) => {
        document.getElementById("my_modal_3").close();
        // console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your application is successful",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    // console.log(postingData);
    // console.log(foundVisa);
  };

  return (
    <div className="">
      <div className="flex justify-center my-5">
        <img src={foundVisa.country_image} alt="" />
      </div>

      <div className="space-y-4   ">
        <div className="py-2">
          <p>
            <span className="font-medium ">Country :</span>{" "}
            {foundVisa.country_name}
          </p>
        </div>
        <div className="py-2">
          <p>
            <span className="font-medium ">Description :</span>{" "}
            {foundVisa.description}
          </p>
        </div>
        <div className="py-2">
          <p>
            <span className="font-medium ">Fees :</span> {foundVisa.fee}
          </p>
        </div>
        <div className="py-2">
          <p>
            <span className="font-medium ">Processing Time</span> :{" "}
            {foundVisa.processing_time}
          </p>
        </div>
        <div className="py-2">
          <p>
            <span className="font-medium ">Validity :</span>{" "}
            {foundVisa.validity}
          </p>
        </div>
        <div className="py-2">
          <p>
            <span className="font-medium ">Visa Type</span> :{" "}
            {foundVisa.visa_type}
          </p>
        </div>
        <div className="py-2">
          <p>
            <span className="font-medium ">Age Restriction</span> :{" "}
            {foundVisa.age_restriction}
          </p>
        </div>
        <div className="py-2">
          <p>
            <span className="font-medium ">Application Method</span> :{" "}
            {foundVisa.application_method}
          </p>
        </div>
        <div className="py-2">
          <p>
            <span className="font-medium ">Requirred Documents</span> :{" "}
            {foundVisa.required_documents?.map((document, index) => (
              <span key={index}>{document}, </span>
            ))}
          </p>
        </div>

        <button onClick={handleClick} className="btn w-full btn-primary">
          Apply for visa
        </button>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        id="first-name"
                        {...register("firstName", { required: true })}
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        {...register("lastName", { required: true })}
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        readOnly
                        {...register("email")}
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="date"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Applied Date
                    </label>
                    <div className="mt-2">
                      <input
                        id="date"
                        {...register("applied_date", { required: true })}
                        type="date"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="fee"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Fee
                    </label>
                    <div className="mt-2">
                      <input
                        id="fee"
                        {...register("visaFee")}
                        // defaultValue={foundVisa.fee}

                        type="number"
                        autoComplete="address-level1"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center py-3">
              <button
                type="submit"
                className="rounded-md btn-wide bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Apply
              </button>
            </div>
            {/* <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        
      </div> */}
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default VisaDetails;
