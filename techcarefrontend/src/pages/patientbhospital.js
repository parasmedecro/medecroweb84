import React from 'react';
import Header from './Header';


export default function Patientbhospital(){
  const data = [
    {
      id: 2137483,
      patientName: "Mr. Saket Kumar",
      doctor: "Dr. Kunal Kumar",
      time: "3pm",
      date: "14.09.2024",
    },
    {
        "id": 2137483,
        "patientName": "Mr. Rohan Kumar",
        "doctor": "Dr. Kunal Kumar",
        "time": "3pm",
        "date": "14.09.2024"
      },
      {
        "id": 2137484,
        "patientName": "Ms. Priya Sharma",
        "doctor": "Dr. Neha Gupta",
        "time": "4pm",
        "date": "14.09.2024"
      },
      {
        "id": 2137485,
        "patientName": "Mr. Saurav Singh",
        "doctor": "Dr. Rajesh Khanna",
        "time": "5pm",
        "date": "14.09.2024"
      },
      {
        "id": 2137486,
        "patientName": "Ms. Anjali Verma",
        "doctor": "Dr. Meera Nair",
        "time": "2pm",
        "date": "14.09.2024"
      },
      {
        "id": 2137487,
        "patientName": "Mr. Vikram Mehta",
        "doctor": "Dr. Amit Joshi",
        "time": "1pm",
        "date": "14.09.2024"
      },
      {
        "id": 2137488,
        "patientName": "Ms. Pooja Desai",
        "doctor": "Dr. Smita Patel",
        "time": "3:30pm",
        "date": "14.09.2024"
      },
      {
        "id": 2137489,
        "patientName": "Mr. Anil Yadav",
        "doctor": "Dr. Mohit Aggarwal",
        "time": "4:30pm",
        "date": "14.09.2024"
      },
      {
        "id": 2137490,
        "patientName": "Ms. Sneha Kulkarni",
        "doctor": "Dr. Priya Nair",
        "time": "2:30pm",
        "date": "14.09.2024"
      },
      {
        "id": 2137491,
        "patientName": "Mr. Rajat Agarwal",
        "doctor": "Dr. Sameer Shah",
        "time": "1:30pm",
        "date": "14.09.2024"
      },
      {
        "id": 2137492,
        "patientName": "Ms. Deepika Rao",
        "doctor": "Dr. Anjali Mehta",
        "time": "12pm",
        "date": "14.09.2024"
      }
    // Add more entries here as needed
  ];

  return (
    <div>
        <Header></Header>
    <div className="p-4">
      {/* Search and Filter Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center border border-gray-300 rounded-md">
          <input
            type="text"
            placeholder="Search Patient"
            className="px-4 py-2 border-none focus:outline-none"
          />
          <button className="px-4 py-2 bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.61 0 7.5 7.5 0 0010.61 0z"
              />
            </svg>
          </button>
        </div>
        <div>
          <select className="px-4 py-2 border border-gray-300 rounded-md">
            <option value="">Filter By</option>
            {/* Add more filter options */}
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-blue-500">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Patient Name</th>
              <th className="px-4 py-2">Doctor</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-blue-300 even:bg-blue-200">
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.patientName}</td>
                <td className="border px-4 py-2">{item.doctor}</td>
                <td className="border px-4 py-2">{item.time}</td>
                <td className="border px-4 py-2">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

