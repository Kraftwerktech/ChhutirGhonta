import React, { useState } from "react";

const RightSection = () => {
  return (
    <div className="col-span-6 lg:col-start-8 lg:col-end-13 p-4 bg-transparent">
      <div className="bg-white p-6 md:p-10 lg:p-12 rounded-3xl shadow-xl">
        <h2 className="text-2xl md:text-3xl mt-7 font-serif font-bold mb-6 text-center">
          Verify Your Identity
        </h2>
        <p className="pt-4  text-gray-400 pb-4 text-center font-serif">
          Please check your email and mobile for an OTP to verify your identity. If you don’t see it, check your spam or junk mail folder.
        </p>
        <LoginForm />
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  return (
    <form>
      <div className="mb-4">
        <label className="block text-center mb-4 text-gray-700  font-serif">
          Enter Verification Code
        </label>
        <div className="flex justify-center gap-2">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-12 h-12 text-center border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d73166]"
            />
          ))}
        </div>
      </div>

      <div className="pt-10">
        <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-200">
          <a href="/setnewpass">Submit</a>
        </button>
        <div className="mt-8 text-center pl-0 pr-0 mr-0 ml-0 text-[15px]">
          <p>If you didn’t receive the verification code within 10 sec, please click</p>
          <a href="/setnewpass" className="text-blue-500 mt-2">Resend Code</a>
        </div>
      </div>
    </form>
  );
};

export default RightSection;
