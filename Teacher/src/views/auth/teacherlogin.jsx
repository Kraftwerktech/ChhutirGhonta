import React from 'react';
import logo from '../../assets/Teacher/logo1.png';
import teacherImage from '../../assets/Teacher/Teacherlogin.png';
import Login from './Login';

function LoginPage() {
    return (
        <div className="fixed inset-0 bg-cover bg-[#A7BEAE]">
            <div className="absolute top-2 left-4 md:left-10 lg:left-14 pt-4">
                <div className='flex'>
                    <img src={logo} alt="Logo" className="h-8 md:h-10 items-center" />
                </div>
            </div>
            <div className="container mx-auto px-4 lg:px-10 ml-40 mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px] lg:gap-[50px] items-center">
                    <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-start">
                        <div className="w-full max-w-[500px] lg:max-w-[523px] h-auto lg:h-[705px]">
                            <h1 className="text-[40px] md:text-[50px] lg:text-[55px] text-center lg:text-left text-white mb-4">
                                Hello, Teacher!
                            </h1>
                            <p className="font-extralight text-[24px] md:text-[30px] lg:text-[40px] text-center lg:text-left text-white mb-4">
                                Welcome to your Online Teacher's Portal
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <img src={teacherImage} alt="Teacher Illustration" className="w-full max-w-[100%] h-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end">
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
