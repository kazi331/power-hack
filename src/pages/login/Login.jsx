import { useEffect, useState } from "react";
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { eyeOff, eyeOn, spinnerIcon } from "../../components/icons";
import auth from '../../firebase.init';
import './login.css';

const Login = () => {

  let navigate = useNavigate();
  let location = useLocation();
  const [showPass, setShowPass] = useState(false);
  const [lUser, lLoading, lError] = useAuthState(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => signInWithEmailAndPassword(data.email, data.password);

  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (guser || lUser || user) {
      navigate(from, { replace: true });
    }
  }, [guser, lUser, user])


  if (error) {
    if (error.message.includes('auth/wrong-password')) {
      error.message = 'Invalid credentials'
    }
    if (error.message.includes('auth/user-not-found')) {
      error.message = 'User Not Found!'
    }
    toast.error(error.message);
    // console.log(error)
  }
  if (gerror) console.log(gerror);
  if (lLoading) return (<div className=" w-full text-center py-24">
    {spinnerIcon}user is loading...
  </div>)



  return (
    <div>
      <div className="flex h-max mt-20 justify-center items-center">
        <div className="w-96 bg-gray-600 py-10 rounded shadow-xl text-gray-300">
          <div className="text-center">
            <h2 className="text-center font-bold text-2xl mb-2">Account Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid justify-center gap-3 ">
              {/* email with label warning*/}
              <label className="label pb-0 flex justify-between">
                <span className="label-text">Your Email</span>
                <div>
                  {/*  error msg as label  */}
                  {errors.email?.type === "required" && (
                    <span className="text-sm text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="text-sm text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Provide a valid email",
                  },
                })}
                type="email"
                placeholder="Email"
                className="w-full bg-gray-700 rounded text-base outline-none  py-1 px-3"
              />

              {/* password  */}
              <label className="label pb-0 flex justify-between">
                <span className="label-text">Password</span>
                {/* label for password error message  */}
                <div>
                  {errors.password?.type === "required" && (
                    <span className="text-sm text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-sm text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </div>
              </label>
              <div>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Minimum six characters",
                    },
                  })}
                  type={`${showPass ? 'text' : 'password'}`}
                  placeholder="Password"
                  className="w-full bg-gray-700 rounded text-base outline-none  py-1 px-3"
                  autoComplete="off"

                />
                <span className="eye" onClick={() => {
                  setShowPass(!showPass);
                }}>
                  {showPass ? eyeOff : eyeOn}
                </span>
              </div>

              <button className="bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4">
                {loading && spinnerIcon} Login
              </button>
              <p className="text-sm text-center my-3">
                New to Power Hack? {" "}
                <Link to="/register" className="text-blue-400">
                  Create new account
                </Link>
              </p>
            </form>

            {/* sign in with google  */}

            <button
              onClick={() => signInWithGoogle()}
              className="w-8/12 bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
            >
              {gloading && spinnerIcon} Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
