import React from "react";
import { Link } from "react-router-dom";

const ResetPasswordCard = () => {
    return (
        <div>
            <h3 className="font-bold mt-5 text-[24px] mb-4">Verify Your Identity</h3>
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white p-6 max-w-md w-full shadow-lg">
                    <h4 className="text-gray-600 mb-6 text-center">
                        Please enter the OTP sent to your email/mobile. If you don't see it, check your spam folder.
                    </h4>
                    <span className="block text-gray-700 font-medium mb-6 text-center">Enter Verification Code</span>
                    <div className="flex justify-center gap-4 mb-6">
                        {/* Verification Code Inputs */}
                        {[...Array(4)].map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:border-[#BB5042] transition duration-200"
                                placeholder="-"
                            />
                        ))}
                    </div>
                    <Link to="http://localhost:5173/teacher/dashboard">
                        <button className="w-full bg-[#BB5042] text-white py-3 rounded-lg hover:bg-[#c6295c] transition duration-200 focus:outline-none focus:ring-4 focus:ring-[#d73166]/40">
                            Continue
                        </button>
                    </Link>
                    <div className=" text-center mt-6 mb-6"><span>Please click <a className=" text-green-500">Resend Code</a></span></div>
                </div>

            </div>
        </div>

    );
};

export default ResetPasswordCard;
