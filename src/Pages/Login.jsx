import React, { useContext, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthProvider";
const Login = () => {
  const location = useLocation();
  console.log(location)
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef()
  const handleGoogle = async () => {
   await googleSignIn();
    navigate('/')
  };
 useEffect(() => {
  if (location.state?.email) {
    navigate(location.pathname, { replace: true, state: null });
  }
}, [location, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successfull", {
          position: "top-center",
        })
        navigate("/", { replace: true, state: null });
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error("Email and Password did not mathced", {
          position: "top-center",
        });
      });
  };
  const handleForget = () => {
    const email = emailRef.current?.value;
    navigate('/forgetPassword', {state : {email}})
  }
  return (
    <div>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                for="email"
                class="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div class="text-sm">
                  <button

                   onClick={handleForget}
                    class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </button>
                </div>  
              </div>
              <div class="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
          <div className="my-4">
            <button
              onClick={handleGoogle}
              className="btn  bg-white border-gray-500 text-xl font-medium w-full"
            >
              <FcGoogle /> Google
            </button>
          </div>
          <p class="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?
            <Link
              to={"/signup"}
              class="font-semibold text-indigo-600 hover:text-indigo-500 ml-2"
            >
              Create a new account.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
