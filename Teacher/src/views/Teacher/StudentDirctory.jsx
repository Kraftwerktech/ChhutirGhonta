import React from 'react';
import { PiStudentDuotone } from "react-icons/pi";
import { FaAddressCard } from "react-icons/fa";
import { BsFiletypePdf } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import { CiMobile2, CiLocationOn } from "react-icons/ci";
import { MdOutlineBloodtype } from "react-icons/md";
import { TbFileCertificate } from "react-icons/tb";
import { FaStarAndCrescent } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
import { ImWoman } from "react-icons/im";

import teacher from '../../assets/Teacher/student.jpeg';

const StudentDirectory = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <h3 className='pl-5 font-semibold text-[25px] mb-6'>Student Information</h3>
      <div className="flex items-center justify-center bg-gray-50 py-5">
        <div className="w-full max-w-[1200px] bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6">
          {/* Profile Image and Name */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3 p-4">
            <div className='w-[220px] h-[250px]'>
              <img
                src={teacher}
                alt="Teacher"
                className="w-full h-full rounded-t-lg object-cover"
              />
              <div className='bg-[#BB5042] p-2 text-center text-white'>
                <h2 className="text-xl font-semibold">Marceline Avila</h2>
              </div>
              <div className='bg-[#BB5042] p-2 mt-0.5 text-center text-white'>
                <span className="text-sm">Class-VIII</span>
              </div>
              <div className='bg-[#BB5042] p-2 mt-0.5 text-center text-white'>
                <span className="text-sm">Section - D</span>
              </div>
              <div className='bg-[#BB5042] p-2 mt-0.5 rounded-b-lg text-center text-white'>
                <span className="text-sm">Roll - 01</span>
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-gray-600 font-medium flex gap-2">
                <PiStudentDuotone className='h-5 w-5 text-[#BB5042]' />
                Student ID
              </h3>
              <p className="text-gray-800 mt-2">2322343513</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium flex gap-2">
                <BsCalendarDate className='h-5 w-5 text-[#BB5042]' />
                Date of Birth
              </h3>
              <p className="text-gray-800 mt-2">1 May 2009</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium flex gap-2">
                <TbFileCertificate className='h-5 w-5 text-[#BB5042]' />
                Birth Certificate Number
              </h3>
              <p className="text-gray-800 mt-2">3438459493738</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium flex gap-2">
                <FaStarAndCrescent className='h-5 w-5 text-[#BB5042]' />
                Religion
              </h3>
              <p className="text-gray-800 mt-2">Islam</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium flex gap-2">
                <MdOutlineBloodtype className='h-5 w-5 text-[#BB5042]' />
                Blood Group
              </h3>
              <p className="text-gray-800 mt-2">A+</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium flex gap-2">
                <IoIosMan className='h-5 w-5 text-[#BB5042]' />
                Father's Name
              </h3>
              <p className="text-gray-800 mt-2">Mr. Islam</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium flex gap-2">
                <ImWoman className='h-5 w-5 text-[#BB5042]' />
                Mother's Name
              </h3>
              <p className="text-gray-800 mt-2">Mrs. Islam</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium flex gap-2">
                <CiMobile2 className='h-5 w-5 text-[#BB5042]' />
                Father's Mobile Number
              </h3>
              <p className="text-gray-800 mt-2">01846738532</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium flex gap-2">
                <CiMobile2 className='h-5 w-5 text-[#BB5042]' />
                Mother's Mobile Number
              </h3>
              <p className="text-gray-800 mt-2">017356467383</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium flex gap-2">
                <FaAddressCard className='h-5 w-5 text-[#BB5042]' />
                Father’s NID Number
              </h3>
              <p className="text-gray-800 mt-2">74839973427292</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium flex gap-2">
                <FaAddressCard className='h-5 w-5 text-[#BB5042]' />
                Mother's NID Number
              </h3>
              <p className="text-gray-800 mt-2">45983290420055</p>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-gray-600 font-medium flex gap-2">
                <CiLocationOn className='h-5 w-5 text-[#BB5042]' />
                Address
              </h3>
              <p className="text-gray-800 mt-2">House # 20, Flat-5 D, Road # 11, Banani, Dhaka</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10'>
        {/* Academic Report */}
        <div className='mb-8'>
          <div className='bg-[#A7BEAE] p-4 text-[20px] font-bold text-white'>
            <h3>Academic Report</h3>
          </div>
          <div className='bg-[#F6F9F7] p-4'>
            <table className="min-w-full table-auto">
              <thead className="bg-[#E4EBE6]">
                <tr className="text-left text-sm text-[#465049]">
                  <th className="px-4 py-2">SL</th>
                  <th className="px-4 py-2">Class</th>
                  <th className="px-4 py-2">Grade</th>
                  <th className="px-4 py-2">Rank</th>
                  <th className="px-4 py-2">Total Marks</th>
                  <th className="px-4 py-2">Achievement</th>
                  <th className="px-4 py-2">Report Card</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">VII</td>
                  <td className="px-4 py-2">A+</td>
                  <td className="px-4 py-2">5th</td>
                  <td className="px-4 py-2">550/600</td>
                  <td className="px-4 py-2">Excellent</td>
                  <td className="px-4 py-2 pl-10">
                    <BsFiletypePdf className="text-red-500 w-8 h-8 cursor-pointer" />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">VI</td>
                  <td className="px-4 py-2">A</td>
                  <td className="px-4 py-2">7th</td>
                  <td className="px-4 py-2">530/600</td>
                  <td className="px-4 py-2">Very Good</td>
                  <td className="px-4 py-2 pl-10">
                    <BsFiletypePdf className="text-red-500 w-8 h-8 cursor-pointer" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Medical Information */}
        <div className='mb-8'>
          <div className='bg-[#A7BEAE] p-4 text-[20px] font-bold text-white'>
            <h3>Medical Information</h3>
          </div>
          <div className='bg-[#F6F9F7] p-4'>
            <table className="min-w-full table-auto">
              <thead className="bg-[#E4EBE6]">
                <tr className="text-left text-sm text-[#465049]">
                  <th className="px-4 py-2">SL</th>
                  <th className="px-4 py-2">Name of Disease</th>
                  <th className="px-4 py-2">Descriptions</th>
                  <th className="px-4 py-2">Report Card</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">Asthma</td>
                  <td className="px-4 py-2">Chronic condition managed by medication</td>
                  <td className="px-4 py-2 pl-10">
                    <BsFiletypePdf className="text-red-500 w-8 h-8 cursor-pointer" />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">Allergy</td>
                  <td className="px-4 py-2">Allergic to peanuts</td>
                  <td className="px-4 py-2 pl-10">
                    <BsFiletypePdf className="text-red-500 w-8 h-8  cursor-pointer" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDirectory;
