import React, { useState } from 'react';
import { HiUserAdd } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AppointmentsCard from '../component/AppointmentsCard';


const Dashboard = () => {
  const [members, setMembers] = useState([
    { name: 'Brad Simmons', skills: 'HTML, JS, ReactJS', company: 'Intertico', progress: 65 },
    { name: 'Jessie Clarson', skills: 'C#, ASP.NET, MS SQL', company: 'Agoda', progress: 83 },
    { name: 'Lebron Wayde', skills: 'PHP, Laravel, VueJS', company: 'RoadGee', progress: 47 },
    { name: 'Natali Trump', skills: 'Python, ReactJS', company: 'The Hill', progress: 71 },
  ]);
  
  const [newMember, setNewMember] = useState({
    name: '',
    skills: '',
    company: '',
    progress: 0,
  });

  const [showForm, setShowForm] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({ ...prev, [name]: value }));
  };

  // Add new member to the list
  const handleAddMember = (e) => {
    e.preventDefault();
    setMembers([...members, newMember]);
    setNewMember({ name: '', skills: '', company: '', progress: 0 });
    setShowForm(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col gap-6">
      {/* Row 1: Appointments & Stock Analysis */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Appointments */}


        <div className="bg-white ">

          <div className="
           ">
            {<AppointmentsCard/>}
            
          </div>

          <div className="flex justify-between mt-4 text-gray-600">
            <div>
              <p className="text-xl font-semibold">65</p>
              <p className="text-sm">Waiting list</p>
            </div>
            <div>
              <p className="text-xl font-semibold">29</p>
              <p className="text-sm">Booked</p>
            </div>
            <div>
              <p className="text-xl font-semibold">2</p>
              <p className="text-sm">Booking cancelled</p>
            </div>
            <div>
              <p className="text-xl font-semibold">100</p>
              <p className="text-sm">Total</p>
            </div>
          </div>
        </div>

        {/* Stock Analysis */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-2/3">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-600">Stock Analysis</h2>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-500 text-white py-1 px-4 rounded-lg flex items-center"
            >
             <HiUserAdd className='mr-2 '/> New Member
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-2">More than 400+ new members</p>

          {/* Add Member Form */}
          {showForm && (
            <form onSubmit={handleAddMember} className="mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newMember.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="skills"
                placeholder="Skills"
                value={newMember.skills}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={newMember.company}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="number"
                name="progress"
                placeholder="Progress (%)"
                value={newMember.progress}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                min="0"
                max="100"
                required
              />
              <button type="submit" className="bg-green-500 text-white py-1 px-4 rounded-lg">
                Add Member
              </button>
            </form>
          )}

          <div className="mt-4 space-y-4">
            {/* Member Row */}
            {members.map((member, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.skills}</p>
                </div>
                <p className="w-1/4 text-sm text-gray-500">{member.company}</p>
                <div className="w-1/4">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${member.progress > 70 ? 'bg-green-500' : member.progress > 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${member.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <FaRegEdit className='size-[30px] border rounded p-[5px]  bg-gray-100  '/>
                  <MdDelete  className='size-[30px] border rounded p-[5px]  bg-gray-100  '/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Finance and New Customers */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Finance */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/2">
          <h2 className="text-lg font-semibold text-gray-600">Finance</h2>
          <p className="text-gray-500 text-sm">Outlines keep honest reviews</p>
          <div className="mt-6 flex justify-center">
            {/* Placeholder for chart */}
            <div className="bg-green-200 w-full h-24 rounded-lg"></div>
          </div>
          <div className="text-center mt-4 text-purple-600 text-2xl font-bold">$24,200</div>
        </div>

        {/* New Customers */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/2">
          <h2 className="text-lg font-semibold text-gray-600">New Customers</h2>
          <div className="mt-6 flex justify-center">
            {/* Placeholder for chart */}
            <div className="bg-blue-200 w-full h-24 rounded-lg"></div>
          </div>
          <div className="text-center mt-4 text-blue-600 text-2xl font-bold">8,345</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
