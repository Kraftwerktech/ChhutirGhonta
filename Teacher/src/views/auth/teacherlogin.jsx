import React, { useState } from 'react';
import logo from '../../assets/Teacher/logo1.png';
import teacherImage from '../../assets/Teacher/Teacherlogin.svg';
import { Link, useNavigate } from 'react-router-dom';
import { CiLock, CiUser } from "react-icons/ci";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Teacherlogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/v1/teacher-login', {
                username,
                password
            });

            if (response.data.success) {
                toast.success('Login successful!', {
                    position: "top-right",
                    autoClose: 2000, // 2 seconds
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    icon: '🟢', // Green dot for success
                });

                // Store token and navigate to the dashboard after toast
                localStorage.setItem('teacherToken', response.data.token);
                setTimeout(() => {
                    navigate('/teacher/dashboard');
                }, 2000); // Delay for user to see the toast message
            } else {
                toast.error(response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    icon: '❌', // Cross mark for error
                });
            }
        } catch (error) {
            toast.error('Login failed. Please check your credentials and try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                icon: '❌', // Cross mark for error
            });
        }
    };

    return (
        <div className="min-h-screen inset-0 bg-cover bg-[#A7BEAE]">
            <ToastContainer />
            <div className="absolute top-2 left-4 md:left-10 mt-3 mb-2 lg:left-14 pt-7">
                <img src={logo} alt="Logo" className="h-16 w-full" />
            </div>
            <div className="justify-center mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[50px] items-center">
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className='text-center justify-center items-center mb-8 w-[600px]'>
                            <h1 className="text-[55px] font-bold text-white mt-[120px]">
                                Hello, Teacher!
                            </h1>
                            <h2 className="text-[40px] font-extralight text-slate-200 mt-4">
                                Welcome to your <br /> Online Teacher’s Portal
                            </h2>
                        </div>
                        <img src={teacherImage} alt="Teacher Illustration" className="w-[523px] h-[464px] mt-2" />
                    </div>

                    <div className="bg-white rounded-l-[56px] gap-4 items-center shadow-lg ml-[60px] mt-[100px] p-20 flex flex-col justify-center">
                        <div className='w-[600px] h-[115px] items-center justify-center text-center'>
                            <h2 className="text-[39px] text-gray-700 mb-6 mt-5 font-bold">Login</h2>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div>
                                <label className="text-gray-700 text-[16px] mb-2 flex items-center">
                                    <CiUser className="text-[#BB5042] w-6 h-6 mr-2" />
                                    Username
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-[480px] mt-1 p-3 focus:border-[#BB5042] focus:outline-none border border-gray-300 rounded-lg mb-4"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-gray-700 text-[16px] mb-2 flex items-center">
                                    <CiLock className="text-[#BB5042] w-6 h-6 mr-2" />
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-[480px] mt-1 p-3 focus:border-[#BB5042] focus:outline-none border border-gray-300 rounded-lg mb-4"
                                    required
                                />
                            </div>
                            <Link to='/forget-password' className="text-[#0866FF] justify-end items-end ml-[350px] mt-2">
                                Forgot Password?
                            </Link>
                            <button
                                type="submit"
                                className="w-[480px] mt-10 h-[60px] mb-12 p-3 bg-[#BB5042] text-[20px] text-white text-center rounded-lg"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teacherlogin;
