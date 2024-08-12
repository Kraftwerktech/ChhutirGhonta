import React from 'react';
import { PiStudentDuotone } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { MdMenuBook } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { BsCalendarDate } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import { MdOutlineBloodtype } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import teacher from '../../assets/Teacher/teacher.jpg'

const TeacherProfile = () => {
  return (
    <div className='fixed'>
        <h3 className='pl-5 font-semibold text-[25px]'>Profile</h3>
         <div className="w-[1094px]  flex items-center justify-center bg-gray-50 py-5">
      <div className=" w-[1094px] h-[566px] bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">
        {/* Profile Image and Name */}
        <div className="flex flex-col  items-center md:items-start w-full md:w-1/3 bg-red-50 p-4">
        <div className='w-[220px] h-[250px]'>
        <img
            src={teacher} // Replace with your image path
            alt="Teacher"
            className="w-full h-full items-center rounded-t-lg  object-cover"
          />
          <div className='bg-[#BB5042] p-2 rounded-b-lg  text-center text-white'><h2 className="text-xl font-semibold  text-white">Mohammad Ibrahim</h2>
          <span className="text-sm">Assistant Teacher</span></div>
        </div>
          
          
        </div>

        {/* Profile Information */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-gray-600 font-medium flex gap-2">
            <span className='pt-1'><MdMenuBook className='h-5 w-5 text-[#BB5042]'/></span>
                Subject Name</h3>
            <p className="text-gray-800 mt-3">Math</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-medium flex gap-2">
            <span className='pt-1'><LiaChalkboardTeacherSolid className='h-5 w-5 text-[#BB5042]'/></span>
                Assigned Class</h3>
            <p className="text-gray-800 mt-3">IX</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-medium flex gap-2">
            <span className='pt-1'><BsCalendarDate className='h-5 w-5 text-[#BB5042]'/></span>
                Joining Date</h3>
            <p className="text-gray-800 mt-3">1 May 2009</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-medium flex gap-2">
            <span className='pt-1'><MdOutlineBloodtype className='h-5 w-5 text-[#BB5042]'/></span>
                Blood Group</h3>
            <p className="text-gray-800 mt-3">O+</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-medium flex gap-2">
            <span className='pt-1'><CiMobile2 className='h-5 w-5 text-[#BB5042]'/></span>
                Mobile Number</h3>
            <p className="text-gray-800 mt-3">01400000000</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-medium flex gap-2">
            <span className='pt-1'><TfiEmail className='h-5 w-5 text-[#BB5042]'/></span>
                Email</h3>
            <p className="text-gray-800 mt-3">kamrul@gmail.com</p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-gray-600 font-medium flex gap-2">
            <span className='pt-1'><CiLocationOn className='h-5 w-5 text-[#BB5042]'/></span>
                Address</h3>
            <p className="text-gray-800 mt-3">House # 20, Flat-5 D, Road # 11, Banani, Dhaka</p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-gray-600 font-medium flex gap-2">
                <span className='pt-1'><PiStudentDuotone className='h-5 w-5 text-[#BB5042]'/></span>
                <span> Education</span>
               </h3>
            <p className="text-gray-800 mt-3">
              M.A. English Lectures. Dhaka University, 1st Class
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default TeacherProfile;
