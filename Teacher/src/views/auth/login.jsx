import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { CiLock, CiUser } from "react-icons/ci";

const RightSection = () => {
  return (
    <div className="col-span-6 pl-24 w-[732px] mb-10 h-[746px] lg:col-start-8 lg:col-end-13 p-4 bg-transparent flex justify-center items-center">
      <div className="bg-white w-[732px] p-8 md:p-10 lg:p-12 rounded-l-[56px] shadow-xl">
        <h2 className="text-2xl md:text-3xl mt-10 mb-5 font-bold text-center">
          Login
        </h2>
        <LoginForm />
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <form className="space-y-6 pl-24 pr-24 pb-12">
      <div className="w-[400px] items-center">
        <label className="text-gray-700 mb-2 flex items-center">
          <CiUser className="text-[#BB5042] w-6 h-6 mr-2" />
          User Name
        </label>
        <input
          type="text"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#d73166]"
          placeholder="Enter User Name"
        />
      </div>
      <div className="w-[400px] items-center">
        <label className="text-gray-700 mb-2 flex items-center">
          <CiLock className="text-[#BB5042] w-6 h-6 mr-2" />
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#d73166]"
          placeholder="Enter password"
        />
      </div>
      <div className="text-right">
        <a
          href="http://localhost:5173/forget-password"
          className="text-blue-500 pr-3 hover:underline"
        >
          Forgot Password?
        </a>
      </div>
      <div className="pt-3 w-[400px] items-center">
        <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-200">
          <Link to="http://localhost:5173/teacher/dashboard">Login</Link>
        </button>
      </div>
    </form>
  );
};

export default RightSection;
