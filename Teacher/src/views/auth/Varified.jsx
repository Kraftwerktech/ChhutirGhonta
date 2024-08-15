import React, { useState } from 'react';
import logo from '../../assets/Teacher/logo1.png';
import teacherImage from '../../assets/Teacher/fofgetpass.svg';
import { Link } from 'react-router-dom';

function VerifyOTPPage() {
    const [otp, setOtp] = useState(["", "", "", ""]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Move to next input field
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <div className="fixed inset-0 bg-cover bg-[#A7BEAE]">
            <div className="absolute top-2 left-4 md:left-10 lg:left-14 pt-4">
                <img src={logo} alt="Logo" className="h-8 md:h-10" />
            </div>
            <div className="container mx-auto mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[50px] items-center">
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="text-[38px] font-bold text-white mt-[83px]">
                            Verify Your Identity
                        </h1>
                        <p className="text-[22px] text-white mt-4">
                            Please enter the 4-digit OTP sent to your email or mobile number.
                        </p>
                        <img src={teacherImage} alt="Teacher Illustration" className="w-[438px] h-[438px] mt-8" />
                    </div>
                    <div className="bg-white rounded-l-[56px] shadow-lg ml-12 p-10 flex flex-col justify-center items-center">
                        <div className='w-[446px] h-[115px] items-center justify-center text-center'>
                            <h2 className="text-[24px] text-gray-700 mb-6 mt-10 font-bold">Enter OTP</h2>
                            <span>Please enter the 4-digit OTP code you received.</span>
                        </div>
                        <div className="flex space-x-4 mt-8 mb-4">
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    className="w-12 h-12 text-center border-[1px]  rounded-lg focus:border-[#BB5042] focus:outline-none text-[24px]"
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                />
                            ))}
                        </div>
                        <Link to='/setnewpass'>
                            <button className="w-[446px] mt-10 mb-12 p-3 bg-[#BB5042] text-white rounded-lg">
                                Verify OTP
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerifyOTPPage;
