import React, { useState } from 'react';
import { FaList, FaBell, FaCaretDown } from 'react-icons/fa';
import { IoMdNotificationsOutline } from "react-icons/io";

import teacher from '../assets/Teacher/teacher.jpg';

const Header = ({ showSidebar, setShowSidebar }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='fixed mt-0 w-full py-5 px-2 lg:px-7 z-40'>
      <div className='ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[#F6F9F7] text-[#f2f4f6] px-5 transition-all'>
        <div 
          onClick={() => setShowSidebar(!showSidebar)} 
          className='w-[35px] flex lg:hidden h-[35px] rounded-sm bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 justify-center items-center cursor-pointer'
        >
          <span><FaList /></span>
        </div>

        <div className='hidden md:block'>
          <input 
            className='px-3 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' 
            type="text" 
            name='search' 
            placeholder='search' 
          />
        </div>

        <div className='flex justify-center items-center gap-8 relative'>
          {/* Notification Icon */}
          <div className='relative'>
            <IoMdNotificationsOutline className='text-xl cursor-pointer text-[#BB5042] w-7 h-7' />
            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex justify-center items-center'>
              3
            </span>
          </div>

          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center gap-3 relative'>
              <div className='flex justify-center items-center flex-col text-end'>
                <h2 className='text-sm text-[#000] font-bold'>Md Ibrahim</h2>
                <span className='text-[14px] text-gray-400 w-full font-normal'>Teacher</span>
              </div>
              <div className='flex items-center cursor-pointer' onClick={toggleDropdown}>
                <img 
                  className='w-[45px] h-[45px] rounded-full overflow-hidden border-2 border-gray-300'
                  src={teacher} 
                  alt="profile" 
                />
                <FaCaretDown className='text-xl text-[#000] ml-2' />
              </div>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className='absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2'>
                  <a href="http://localhost:5173/teacher/dashboard/teacher-profile" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                    Profile
                  </a>
                  <a href="http://localhost:5173/teacher/dashboard/reset-pass-profile" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                    Reset Password
                  </a>
                  <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                    Settings
                  </a>
                  <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
