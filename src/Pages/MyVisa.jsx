import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa";
import { data } from "react-router-dom";

const MyVisa = () => {
  const { user } = useContext(AuthContext);
  const [myVisa, setMyVisa] = useState([]);
  const [selectedVisa, setSelectedVisa] = useState({})
  const [visaId, setVisaId] = useState([])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/myVisa?email=${user?.email}`)
      .then((res) => setMyVisa(res.data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
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
          text: "Your file has been deleted.",
          icon: "success",
        });
        axios
          .delete(`http://localhost:3000/delete/${id}`)
          .then((res) => setMyVisa(myVisa.filter((visa) => visa._id !== id)));
      }
    });
  };
  const handleUpdate = (id) => {

    setVisaId(id)
 
    document.getElementById("my_modal_3").showModal();
    axios.get(`http://localhost:3000/visa/${visaId}`)
    .then(res => {setSelectedVisa(res.data)})
  };
  // if(visaId){
  //   useEffect(()=> {

  //   } ,[visaId])
  // }
  // console.log(selectedVisa)
  
  const onSubmit = (data) => {  
      console.log(data)
      axios.patch(`http://localhost:3000/update/${visaId}`,data)
      .then(res => console.log(res.data))
      document.getElementById("my_modal_3").close();

  };
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 py-5">
        {myVisa.map((visa) => (
          <div className="card bg-base-100  shadow-xl border ">
            <figure className="px-10 pt-10 ">
              <img
                src={visa.country_image}
                alt="country Flag"
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
                <span className="font-semibold">Fee</span> : {visa.fee}
              </p>
              <p>
                <span className="font-semibold">Validity</span> :{" "}
                {visa.validity}
              </p>
              <div className="card-actions mx-auto my-2 flex">
                <button
                  onClick={() => handleUpdate(visa._id)}
                  className="btn btn-primary btn-wide"
                >
                  Updatae
                </button>
                <button
                  onClick={() => handleDelete(visa._id)}
                  className="btn btn-primary btn-wide"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form
              className="px-6 "
              onSubmit={handleSubmit((data) => onSubmit(data))}
            >
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country-name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Country Name
                    </label>
                    <div className="mt-2">
                      <input
                        defaultValue={selectedVisa.country_name}
                        id="country-name"
                        {...register("country_name", {
                          required: "Country Name is required",
                        })}
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country_img"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Country Image
                    </label>
                    <div className="mt-2">
                      <input
                        defaultValue={selectedVisa.country_image}
                        id="country_img"
                        {...register("country_image", {
                          required: "Image URL is required",
                        })}
                        type="url"
                        autoComplete=""
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="visaType"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Visa Type
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                      <select
                        id="visaType"
                        defaultValue={selectedVisa?.visa_type}
                        {...register("visa_type", {
                          required: "Visa Type is required",
                        })}
                        autoComplete="country-name"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      >
                        <option disabled selected>
                          Visa Type
                        </option>
                        <option>Tourist Visa</option>
                        <option>Student Visa</option>
                        <option>Work Visa</option>
                        <option>Working Holiday Visa</option>
                        <option>Business Visa</option>
                        <option>Medical Visa</option>
                      </select>
                      <FaChevronDown
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 ">
                    <label
                      htmlFor="age"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Age Restriction
                    </label>
                    <div className="mt-2">
                      <input
                        id="age"
                        defaultValue={selectedVisa.age_restriction}
                        {...register("age_restriction", {
                          required: "age restriction is required",
                        })}
                        type="number"
                        autoComplete="address-level2"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 ">
                    <label
                      htmlFor="processTime"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Processing TIme
                    </label>
                    <div className="mt-2">
                      <input
                        id="processTime"
                        defaultValue={selectedVisa.processing_time}
                        {...register("processing_time", {
                          required: "Processing Time is required",
                        })}
                        type="text"
                        autoComplete="address-level2"
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
                        defaultValue={selectedVisa.fee}
                        {...register("fee", { required: true })}
                        type="number"
                        autoComplete="address-level1"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="validity"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Validity
                    </label>
                    <div className="mt-2">
                      <input
                        id="validity"
                        defaultValue={selectedVisa.validity}
                        {...register("validity", { required: true })}
                        type="text"
                        autoComplete="postal-code"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Description
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        defaultValue ={selectedVisa?.description || ""}
                        {...register("description")}
                        rows={3}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                       
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="applicationMethod"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Application Method
                    </label>
                    <div className="mt-2">
                      <input
                        id="applicationMethod"
                        defaultValue={selectedVisa.application_method}
                        {...register("application_method")}
                        type="text"
                        autoComplete="street-address"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <fieldset>
                <legend className="text-sm/6 font-semibold text-gray-900">
                  Required_documents
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="comments"
                          value="valid passport"
                          // defaultChecked ={selectedVisa?.required_documents}
                          {...register("required_documents")}
                          type="checkbox"
                          aria-describedby="comments-description"
                          className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-[:checked]:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-[:indeterminate]:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-900"
                      >
                        Valid passport
                      </label>
                      {/* <p id="comments-description" className="text-gray-500">
                          Get notified when someones posts a comment on a posting.
                        </p> */}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="candidates"
                          value="visa application form"
                          {...register("required_documents")}
                          type="checkbox"
                          aria-describedby="candidates-description"
                          className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-[:checked]:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-[:indeterminate]:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-gray-900"
                      >
                        Visa application form
                      </label>
                      {/* <p id="candidates-description" className="text-gray-500">
                          Get notified when a candidate applies for a job.
                        </p> */}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-6 shrink-0 items-center">
                      <div className="group grid size-4 grid-cols-1">
                        <input
                          id="offers"
                          value="recent passport size photo"
                          {...register("required_documents")}
                          type="checkbox"
                          aria-describedby="offers-description"
                          className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          fill="none"
                          viewBox="0 0 14 14"
                          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                        >
                          <path
                            d="M3 8L6 11L11 3.5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-[:checked]:opacity-100"
                          />
                          <path
                            d="M3 7H11"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-0 group-has-[:indeterminate]:opacity-100"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm/6">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-900"
                      >
                        Recent passport-sized photograph
                      </label>
                      {/* <p id="offers-description" className="text-gray-500">
                          Get notified when a candidate accepts or rejects an offer.
                        </p> */}
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="flex justify-center py-12">
                <button className="btn btn-wide btn-primary ">
                  update Visa
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyVisa;
