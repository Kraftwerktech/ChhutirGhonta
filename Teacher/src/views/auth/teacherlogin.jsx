import React from 'react';
import logo from '../../assets/Teacher/logo1.png'; // Ensure your logo path is correct
import teacherImage from '../../assets/Teacher/Teacherlogin.png'; // Ensure your image path is correct
import Login from './Login';

function LoginPage() {
    return (
        <div className="fixed bg-cover bg-[#A7BEAE]">
            <div className="absolute top-2 pl-14 pt-4">
                <div className='flex'>
                    <img src={logo} alt="Logo" className="h-10 items-center" />
                </div>
            </div>
            <div className="container mx-auto pl-10 mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[50px] items-center">
                    <div className="col-span-12 w-[523px] h-[705px] lg:col-span-6 pl-10">
                        <h1 className="text-[50px] lg:text-[55px] items-center text-center text-white mb-4">
                            Hello, Teacher!
                        </h1>
                        <p className="font-extralight text-[40px] text-white text-center mb-4 items-center">
                            Welcome to your Online Teacher's Portal
                        </p>
                        <div className="max-w-[100%] mx-auto gap-4">
                            <img src={teacherImage} alt="Teacher Illustration" className="h-full items-center w-full" />
                        </div>
                    </div>
                    <div className="col-span-8 lg:col-span-5">
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
