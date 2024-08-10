import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const RightSection = () => {
  return (
    <div className="col-span-6 lg:col-start-8 lg:col-end-13 p-4 bg-transparent">
      <div className="bg-white p-6 md:p-10 lg:p-12  rounded-3xl shadow-xl">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-center">
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
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2 font-serif">
        <span className="p-2">
            <FontAwesomeIcon icon={faUser} className="text-red-400" />
          </span>
          User Name

        </label>
        <div className="flex items-center border-2 border-gray-400 rounded-xl mt-1 focus-within:ring-2 focus-within:ring-[#d73166]">
          <input
            type="text"
            className="w-full rounded-xl p-2 focus:outline-none"
            placeholder="Enter User Name"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2 font-serif">
        <span className="p-2">
            <FontAwesomeIcon icon={faLock}  className="text-red-400"/>
          </span>
            Password
           </label>
        <div className="flex items-center border-2 border-gray-400 rounded-xl mt-1 focus-within:ring-2 focus-within:ring-[#d73166]">
         
          <input
            type={showPassword ? "text" : "password"}
            className="w-full rounded-xl p-2 font-serif focus:outline-none"
            placeholder="Enter password"
          />
          <button
            type="button"
            className="p-2 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="  text-zinc-400" />
          </button>
        </div>
      </div>
      <div className="mb-4 mt-2 text-right">
        <a href="http://localhost:5173/forget-password" className="text-blue-500 hover:underline font-serif">
          Forgot Password?
        </a>
      </div>
      <div className="pt-10">
      <button className="w-full bg-red-500  text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-200">
        <Link to='http://localhost:5173/teacher/dashboard'>Login</Link>
      </button>
      </div>
      
    </form>
  );
};

export default RightSection;
