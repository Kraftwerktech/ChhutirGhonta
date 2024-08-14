import React from 'react';
import logo from '../../assets/Teacher/logo1.png';
import teacherImage from '../../assets/Teacher/resetpass.svg';
import { Link } from 'react-router-dom';
import { CiLock} from "react-icons/ci";
function ForgetPasswordPage() {
    return (
        <div className="fixed inset-0 bg-cover bg-[#A7BEAE]">
            <div className="absolute top-2 left-4 md:left-10 lg:left-14 pt-4">
                <img src={logo} alt="Logo" className="h-8 md:h-10" />
            </div>
            <div className="container mx-auto mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[50px] items-center">
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="text-[38px] font-bold text-white mt-[83px]">
                         Password Recovery
                        </h1>
                        <p className="text-[22px] text-white mt-4">
                        Create a new password to recover your account
                        </p>
                        <img src={teacherImage} alt="Teacher Illustration" className="w-[438px] h-[438px] mt-8" />
                    </div>
                    <div className="bg-white rounded-l-[56px] shadow-lg ml-12 p-10 flex flex-col justify-center items-center">
                        <div className='w-[446px] h-[115px] items-center justify-center text-center'>
                        <h2 className="text-[24px] text-gray-700 mb-6 mt-10 font-bold">Reset Password</h2>
                        </div>
                         <div>
                         <label className="text-gray-700 mb-2 flex items-center">
          <CiLock className="text-[#BB5042] w-6 h-6 mr-2" />
          New Password
        </label>
        <input
                            type="password"
                            placeholder="New password"
                            className="w-[446px] p-3 border border-gray-300 rounded-lg mb-4"
                        />
                         </div>
                        <div>
                        <label className="text-gray-700 mb-2 flex items-center">
          <CiLock className="text-[#BB5042] w-6 h-6 mr-2" />
          Confrim Password
        </label>
        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-[446px] mt-2 p-3 border border-gray-300 rounded-lg mb-4"
                        />
                        </div>
                       
                        <Link to='/'>
                        <button className="w-[446px] mt-10 mb-12 p-3 bg-[#BB5042] text-white rounded-lg">
                            Confirm
                        </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgetPasswordPage;
