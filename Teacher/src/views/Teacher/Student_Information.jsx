import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdExpandMore } from "react-icons/md";

// Dummy Data
const students = [
  {
    id: 1,
    picture: 'https://randomuser.me/api/portraits/men/32.jpg',
    studentId: 'S101',
    name: 'John Doe',
    class: 'IX',
    section: 'A',
    roll: '12'
  },
  {
    id: 2,
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    studentId: 'S102',
    name: 'Jane Smith',
    class: 'IX',
    section: 'A',
    roll: '13'
  },
  {
    id: 3,
    picture: 'https://randomuser.me/api/portraits/men/85.jpg',
    studentId: 'S103',
    name: 'Sam Johnson',
    class: 'IX',
    section: 'B',
    roll: '14'
  },
  {
    id: 4,
    picture: 'https://randomuser.me/api/portraits/women/65.jpg',
    studentId: 'S104',
    name: 'Emily Davis',
    class: 'IX',
    section: 'C',
    roll: '15'
  },
  {
    id: 5,
    picture: 'https://randomuser.me/api/portraits/women/65.jpg',
    studentId: 'S104',
    name: 'Emily Davis',
    class: 'IX',
    section: 'C',
    roll: '15'
  },
  {
    id: 6,
    picture: 'https://randomuser.me/api/portraits/women/65.jpg',
    studentId: 'S104',
    name: 'Emily Davis',
    class: 'IX',
    section: 'C',
    roll: '15'
  },
  {
    id: 7,
    picture: 'https://randomuser.me/api/portraits/women/65.jpg',
    studentId: 'S104',
    name: 'Emily Davis',
    class: 'IX',
    section: 'C',
    roll: '15'
  },
  {
    id: 8,
    picture: 'https://randomuser.me/api/portraits/women/65.jpg',
    studentId: 'S104',
    name: 'Emily Davis',
    class: 'IX',
    section: 'C',
    roll: '15'
  },
  {
    id: 9,
    picture: 'https://randomuser.me/api/portraits/women/65.jpg',
    studentId: 'S104',
    name: 'Emily Davis',
    class: 'IX',
    section: 'C',
    roll: '15'
  },
  {
    id: 10,
    picture: 'https://randomuser.me/api/portraits/women/65.jpg',
    studentId: 'S104',
    name: 'Emily Davis',
    class: 'IX',
    section: 'C',
    roll: '15'
  },
];

const itemsPerPage = 10;

function StudentInformation() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(students.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const displayedStudents = students.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="pl-8 pr-8 pb-6 mt-0">
      <h3 className="text-lg font-semibold mb-6">Student Directory</h3>
      
      <div className="w-full bg-white mr-4 pb-4 mt-0 shadow-sm rounded-lg">
        <div className="flex flex-wrap gap-6 justify-between">
          {/* First Input */}
          <input 
            className="px-5 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[384px]" 
            type="text" 
            name="search" 
            placeholder="Search by Student Name or Student ID" 
          />
          
          {/* Dropdown Select Options */}
          <div className="relative w-full md:w-[152px]">
            <select 
              className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-10"
            >
              <option value="">Select Class</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              {/* Add more options as needed */}
            </select>
            <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
          
          <div className="relative w-full md:w-[152px]">
            <select 
              className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-10"
            >
              <option value="">Select Section</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
              {/* Add more options as needed */}
            </select>
            <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
          
          <div className="relative w-full md:w-[152px]">
            <select 
              className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-10"
            >
              <option value="">Select Subject</option>
              <option value="Bangla">Bangla</option>
              <option value="English">English</option>
              <option value="Math">Math</option>
              {/* Add more options as needed */}
            </select>
            <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
          
          {/* Last Input with Search Button */}
          <button 
            className="px-5 py-2 bg-[#BB5042] text-white rounded-md w-full md:w-auto"
          >
            Search
          </button>
          
          <span className="font-semibold text-[17px]">Total Number of Students: 535</span>
        </div>
      </div>

      {/* Student Table */}
      <div className="w-full bg-white p-1 shadow-sm rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-[#E8E8E8]">
              <tr className="text-left text-sm uppercase text-[#465049]">
                <th className="px-4 py-2">SL</th>
                <th className="px-4 py-2">Picture</th>
                <th className="px-4 py-2">Student ID</th>
                <th className="px-4 py-2">Student Name</th>
                <th className="px-4 py-2">Class</th>
                <th className="px-4 py-2">Section</th>
                <th className="px-4 py-2">Roll</th>
              </tr>
            </thead>
            <tbody>
              {displayedStudents.map((student, index) => (
                <tr key={student.id} className="border-b text-sm text-gray-700">
                  <td className="px-4 py-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="px-4 py-2">
                    <img
                      src={student.picture}
                      alt={student.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2">{student.studentId}</td>
                  <td className="px-4 py-2">
                    <a className='text-[#0318CF] hover:text-[#BB5042]' href='http://localhost:5173/teacher/dashboard/student-dir'>{student.name}</a>
                   </td>
                  <td className="px-4 py-2">{student.class}</td>
                  <td className="px-4 py-2">{student.section}</td>
                  <td className="px-4 py-2">{student.roll}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-4">
          <div className="flex items-center space-x-2">
            <button 
              onClick={handlePrevPage} 
              className="px-4 py-2 bg-transparent border-[#BB5042] border-[1px] text-gray-700 rounded-md"
              disabled={currentPage === 1}
            >
              <MdKeyboardArrowLeft className='w-[12px] h-6'/>
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageClick(i + 1)}
                className={`px-4 py-2 ${currentPage === i + 1 ? 'bg-[#BB5042] text-white' : 'bg-transparent border-[#BB5042] border-[1px] text-gray-700'} rounded-md`}
              >
                {i + 1}
              </button>
            ))}

            <button 
              onClick={handleNextPage} 
              className="px-4 py-2 bg-transparent border-[#BB5042] border-[1px] text-gray-700 rounded-md"
              disabled={currentPage === totalPages}
            >
              <MdKeyboardArrowRight className='w-[12px] h-6'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentInformation;
