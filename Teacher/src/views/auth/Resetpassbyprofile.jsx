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
    <div className="mt-5">
      <h3 className=" font-bold text-[24px]">Change Password</h3>
      <div className="flex items-center mt-5 justify-center bg-gray-50">
        <div className="w-[560px] h-[350px] p-8 bg-white rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2 font-medium">
                <CiLock className="inline-block text-xl text-[#BB5042] mr-2" />
                New Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50 focus-within:ring-2 focus-within:ring-[#d73166]">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-3 rounded-lg bg-gray-50 text-gray-700 focus:outline-none"
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  className="p-3 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-500" />
                </button>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 mb-2 font-medium">
                <CiLock className="inline-block text-xl text-[#BB5042] mr-2" />
                Confirm New Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50 focus-within:ring-2 focus-within:ring-[#d73166]">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full p-3 rounded-lg bg-gray-50 text-gray-700 focus:outline-none"
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  className="p-3 focus:outline-none"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className="text-gray-500" />
                </button>
              </div>
            </div>
            <Link to="http://localhost:5173/teacher/dashboard/verifyidentybyprofile-pass-profile">
              <button className="w-full bg-[#BB5042] text-white py-3 rounded-lg hover:bg-[#c6295c] transition duration-200 focus:outline-none focus:ring-4 focus:ring-[#d73166]/40">
                Reset Password
              </button>
            </Link>

          </form>
          <div className="mt-6 text-center">
            <Link to="/login" className="text-sm text-blue-500 hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ResetPasswordCard;
