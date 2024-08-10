import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const RightSection = () => {
  return (
    <div className="col-span-6 lg:col-start-8 lg:col-end-13 p-4 bg-transparent">
      <div className="bg-white p-6 md:p-10 lg:p-12  rounded-3xl shadow-xl">
        <h2 className="text-2xl md:text-3xl mt-10 font-serif font-bold mb-6 text-center">
        Forgot Your Password?
        </h2>
        <p className="pt-5 pl-4 pr-4 text-gray-400 pb-5 text-center font-serif">Please enter the email address or mobile number associated with your account. We'll send you a One-Time Password (OTP) to reset your password.</p>
        <LoginForm />
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2 font-serif">
          Email or Mobile Number

        </label>
        <div className="flex items-center border-2 border-gray-400 rounded-xl mt-1 focus-within:ring-2 focus-within:ring-[#d73166]">
          <input
            type="text"
            className="w-full rounded-xl p-2 focus:outline-none"
            placeholder="Enter Email or Mobile Number"
          />
        </div>
      </div>
      
      <div className="pt-10">
        <button className="w-full bg-red-500  text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-200">
        <a href="/verified">Submit</a>
      </button>
      
      
      </div>
      
    </form>
  );
};

export default RightSection;
