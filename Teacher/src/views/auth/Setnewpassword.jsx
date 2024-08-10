import React, { useState } from 'react';
import logo from '../../assets/Teacher/logo1.png'; // Ensure your logo path is correct
import teacherImage from '../../assets/Teacher/Teacherlogin.png'; // Ensure your image path is correct
import Login from './Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
function Setnewpassword() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-cover bg-[#A7BEAE] relative">
            <div className="absolute top-2 pl-14 pt-4">
                <div className='flex'>
                    <img src={logo} alt="Logo" className="h-14" />
                </div>
            </div>
            <div className="container mx-auto pl-10 pt-[80px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[50px] items-center">
                    <div className="col-span-12 lg:col-span-6 pl-10">
                        <h1 className="text-[50px] pl-32 lg:text-[55px] text-center text-white font-serif mb-4">
                            Hello Teacher
                        </h1>
                        <p className="font-serif font-extralight text-[25px] text-white text-center mb-4 pl-32">
                            Welcome to your Online Teacher's Portal
                        </p>
                        <div className="max-w-[60%] mx-auto gap-4">
                            <img src={teacherImage} alt="Teacher Illustration" className="h-full w-full" />
                        </div>
                    </div>
                    <div className="col-span-8 lg:col-span-5">
                        <Login />
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-20 rounded-lg shadow-lg w-full max-w-md mx-auto relative">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-serif font-bold mb-4 text-center">

                            Set New Password
                        </h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-serif mb-1">
                                    <span className="p-2">
                                        <FontAwesomeIcon icon={faLock} className="text-red-400" />
                                    </span>
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#d73166]"
                                    placeholder="Enter new password"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-serif mb-1">
                                    <span className="p-2">
                                        <FontAwesomeIcon icon={faLock} className="text-red-400" />
                                    </span>
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#d73166]"
                                    placeholder="Confirm new password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-8 bg-red-500 text-white font-serif py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-200"
                            >
                                Change Password
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Setnewpassword;
