import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";


const ResetPasswordCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[560px] max-w-md p-16 bg-white rounded-md fixed bg-fixed shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Reset Password</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-serif">
              <span className="p-2">
                <CiLock  className="text-red-400" />
              </span>
              New Password
            </label>
            <div className="flex items-center border-2 border-gray-400 rounded-xl mt-1 focus-within:ring-2 focus-within:ring-[#d73166]">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-xl p-2 focus:outline-none"
                placeholder="Enter new password"
              />
              <button
                type="button"
                className="p-2 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-zinc-400" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-serif">
              <span className="p-2">
                <CiLock  className="text-red-400" />
              </span>
              Confirm New Password
            </label>
            <div className="flex items-center border-2 border-gray-400 rounded-xl mt-1 focus-within:ring-2 focus-within:ring-[#d73166]">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full rounded-xl p-2 focus:outline-none"
                placeholder="Confirm new password"
              />
              <button
                type="button"
                className="p-2 focus:outline-none"
                onClick={toggleConfirmPasswordVisibility}
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className="text-zinc-400" />
              </button>
            </div>
          </div>
          <div className="pt-6">
            <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-200">
              Reset Password
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-500 hover:underline font-serif">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordCard;
