import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { Link } from 'react-router-dom';

// Dummy Data for 10 Days
const students = [
  {
    id: 1,
    date: '2024-08-12',
    day: 'Mon',
    first: { subject: 'Bangla', className: 'VI-A' },
    second: { subject: 'English', className: 'VII-C' },
    third: { subject: 'Math', className: 'V-B' },
    fourth: { subject: 'Physics', className: 'XI-A' },
    fifth: { subject: 'Chemistry', className: 'XII-C' },
    sixth: { subject: 'Biology', className: 'IX-A' }
  },
  {
    id: 2,
    date: '2024-08-13',
    day: 'Tue',
    first: { subject: 'Math', className: 'VI-A' },
    second: { subject: 'English', className: 'VII-C' },
    third: { subject: 'Physics', className: 'XI-B' },
    fourth: { subject: 'Chemistry', className: 'XII-A' },
    fifth: { subject: 'Bangla', className: 'X-D' },
    sixth: { subject: 'History', className: 'IX-A' }
  },
  {
    id: 3,
    date: '2024-08-14',
    day: 'Wed',
    first: { subject: 'Chemistry', className: 'XII-A' },
    second: { subject: 'Math', className: 'VI-B' },
    third: { subject: 'English', className: 'VII-C' },
    fourth: { subject: 'Bangla', className: 'V-D' },
    fifth: { subject: 'History', className: 'IX-A' },
    sixth: { subject: 'Physics', className: 'XI-C' }
  },
  {
    id: 4,
    date: '2024-08-15',
    day: 'Thu',
    first: { subject: 'Biology', className: 'IX-A' },
    second: { subject: 'Math', className: 'VI-D' },
    third: { subject: 'English', className: 'VII-A' },
    fourth: { subject: 'Physics', className: 'XI-C' },
    fifth: { subject: 'Bangla', className: 'V-A' },
    sixth: { subject: 'Chemistry', className: 'XII-C' }
  },
  {
    id: 5,
    date: '2024-08-16',
    day: 'Fri',
    first: { subject: 'Math', className: 'V-C' },
    second: { subject: 'English', className: 'VII-A' },
    third: { subject: 'Chemistry', className: 'XII-C' },
    fourth: { subject: 'Bangla', className: 'VI-C' },
    fifth: { subject: 'Physics', className: 'XI-A' },
    sixth: { subject: 'History', className: 'IX-B' }
  },
  {
    id: 6,
    date: '2024-08-17',
    day: 'Sat',
    first: { subject: 'Bangla', className: 'VI' },
    second: { subject: 'Math', className: 'VII' },
    third: { subject: 'Physics', className: 'XI' },
    fourth: { subject: 'Chemistry', className: 'XII' },
    fifth: { subject: 'Biology', className: 'IX' },
    sixth: { subject: 'English', className: 'V' }
  },
  {
    id: 7,
    date: '2024-08-18',
    day: 'Sun',
    first: { subject: 'History', className: 'IX' },
    second: { subject: 'Bangla', className: 'VI' },
    third: { subject: 'Math', className: 'VII' },
    fourth: { subject: 'English', className: 'V' },
    fifth: { subject: 'Physics', className: 'XI' },
    sixth: { subject: 'Chemistry', className: 'XII' }
  },
  {
    id: 8,
    date: '2024-08-19',
    day: 'Mon',
    first: { subject: 'Bangla', className: 'V' },
    second: { subject: 'Math', className: 'VI' },
    third: { subject: 'English', className: 'VII' },
    fourth: { subject: 'Physics', className: 'XI' },
    fifth: { subject: 'Chemistry', className: 'XII' },
    sixth: { subject: 'Biology', className: 'IX' }
  },
  {
    id: 9,
    date: '2024-08-20',
    day: 'Tue',
    first: { subject: 'Physics', className: 'XI-A' },
    second: { subject: 'Chemistry', className: 'XII-C' },
    third: { subject: 'Bangla', className: 'VI-D' },
    fourth: { subject: 'Math', className: 'VII-A' },
    fifth: { subject: 'History', className: 'IX-F' },
    sixth: { subject: 'English', className: 'V-C' }
  },
  {
    id: 10,
    date: '2024-08-21',
    day: 'Wed',
    first: { subject: 'English', className: 'VII-A' },
    second: { subject: 'Math', className: 'VI-C' },
    third: { subject: 'Bangla', className: 'V-A' },
    fourth: { subject: 'Physics', className: 'XI-B' },
    fifth: { subject: 'Chemistry', className: 'XII-A' },
    sixth: { subject: 'Biology', className: 'IX-C' }
  }
];

const itemsPerPage = 5;

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
    <div className="pl-8 pr-8 pb-8 mt-1">
      <h3 className="text-lg font-bold text-[25px] text-[#151515] mb-6">My Routine</h3>

      {/* Routine Table */}
      <div className="w-full bg-white p-1 shadow-sm rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full h-[104px] table-auto">
            <thead className="bg-[#E8E8E8]">
              <tr className="text-left text-sm text-[#465049]">
                <th className="px-4 py-2">
                  <Link to="http://localhost:5173/teacher/dashboard/routineCalender" className='w-16 h-16'>
                  <CiCalendar className="w-16 h-16 text-[#BB5042]" />
                  </Link>
                 
                </th>
                <th className="px-4 py-2">
                  <span className="text-[25px]">1st</span>
                  <p className="text-gray-400">
                    10:00 am<br />
                    10:45 am
                  </p>
                </th>
                <th className="px-4 py-2">
                  <span className="text-[25px]">2nd</span>
                  <p className="text-gray-400">
                    11:00 am<br />
                    11:45 am
                  </p>
                </th>
                <th className="px-4 py-2">
                  <span className="text-[25px]">3rd</span>
                  <p className="text-gray-400">
                    12:00 pm<br />
                    12:45 pm
                  </p>
                </th>
                <th className="px-4 py-2">
                  <span className="text-[25px]">4th</span>
                  <p className="text-gray-400">
                    01:00 pm<br />
                    01:45 pm
                  </p>
                </th>
                <th className="px-4 py-2">
                  <span className="text-[25px]">5th</span>
                  <p className="text-gray-400">
                    02:00 pm<br />
                    02:45 pm
                  </p>
                </th>
                <th className="px-4 py-2">
                  <span className="text-[25px]">6th</span>
                  <p className="text-gray-400">
                    03:00 pm<br />
                    03:45 pm
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedStudents.map((student) => (
                <tr key={student.id} className="border-b text-sm text-gray-700">
                  <td className="px-4 py-2 flex gap-2 items-center">
                    <div
                      className="w-16 h-16 rounded-md flex flex-col items-center justify-center text-white"
                      style={{
                        backgroundColor: student.id % 2 === 0 ? '#BB5042' : '#008080',
                      }}
                    >
                      <div className="font-bold">{student.id}</div>
                      <div className="text-center font-bold mt-2">{student.day}</div>
                    </div>
                  </td>
                  <td className="px-4 py-2 font-bold  text-[#BB5042]">
                    {student.first.subject}
                    <p className="text-xs text-gray-500">{student.first.className}</p>
                  </td>
                  <td className="px-4 py-2 font-bold  text-[#BB5042]">
                    {student.second.subject}
                    <p className="text-xs text-gray-500">{student.second.className}</p>
                  </td>
                  <td className="px-4 py-2 font-bold  text-[#BB5042]">
                    {student.third.subject}
                    <p className="text-xs text-gray-500">{student.third.className}</p>
                  </td>
                  <td className="px-4 py-2 font-bold  text-[#BB5042]">
                    {student.fourth.subject}
                    <p className="text-xs text-gray-500">{student.fourth.className}</p>
                  </td>
                  <td className="px-4 py-2 font-bold  text-[#BB5042]">
                    {student.fifth.subject}
                    <p className="text-xs text-gray-500">{student.fifth.className}</p>
                  </td>
                  <td className="px-4 py-2 font-bold  text-[#BB5042]">
                    {student.sixth.subject}
                    <p className="text-xs text-gray-500">{student.sixth.className}</p>
                  </td>
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
              <MdKeyboardArrowLeft className="w-[12px] h-6" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageClick(i + 1)}
                className={`px-4 py-2 ${
                  currentPage === i + 1
                    ? 'bg-[#BB5042] text-white'
                    : 'bg-transparent border-[#BB5042] border-[1px] text-gray-700'
                } rounded-md`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              className="px-4 py-2 bg-transparent border-[#BB5042] border-[1px] text-gray-700 rounded-md"
              disabled={currentPage === totalPages}
            >
              <MdKeyboardArrowRight className="w-[12px] h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentInformation;
