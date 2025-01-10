import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
  import { FaChevronDown } from "react-icons/fa6";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthProvider";

const AddVisa = () => {
  const {user} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const AllData = {...data, email : user.email}
    console.log(AllData)
    try{
      const response = await axios.post('http://localhost:5000/addedVisa', AllData);
      console.log(AllData);
      Swal.fire({
        title: "Visa Added Succesfully",
        icon: "success"
      });
      reset()
    }
    catch(error){
      console.log("Error submitting form",error.message)
    }
    
  };

  return (
    <div className="space-y-12 ">
      <h1 className="text-5xl text-center py-6 font-bold">Add a new Visa</h1>
      <form className="px-6 " onSubmit={handleSubmit(onSubmit)}>
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
                  placeholder="Country Name"
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
                  placeholder="Image URL "
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
                htmlFor="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Visa Type
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="country"
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
                  {...register("description" )}
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="street-address"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Application Method
              </label>
              <div className="mt-2">
                <input
                  id="street-address"
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
                <label htmlFor="comments" className="font-medium text-gray-900">
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
                <label htmlFor="offers" className="font-medium text-gray-900">
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
          <button className="btn btn-wide btn-primary ">Add Visa</button>
        </div>
      </form>
    </div>
  );
};

export default AddVisa;
