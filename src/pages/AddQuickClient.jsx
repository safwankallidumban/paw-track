import React, { useState } from "react";

export default function AddQuickClient() {
  const [formData, setFormData] = useState({
    employeeName: '',
    mondayShift: '',
    tuesdayShift: '',
    wednesdayShift: '',
    thursdayShift: '',
    fridayShift: '',
    saturdayShift: '',
    sundayShift: '',
    date: '',
  });

  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-6 m-10 p-20 border shadow-xl rounded-xl"
      >
        <div className="col-span-2">
          <div>
            <h1 className="text-xl font-semibold mb-6">Add Quick New Client</h1>
            <div className="h-[1.5px] bg-gray-200 "></div>
          </div>
        </div>

        <div className="col-span-1">
          <div>
            <label htmlFor="employeeName" className="text-sm font-medium">
              Employee Name
            </label>
            <input
              type="text"
              name="employeeName"
              className="w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.employeeName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="mondayShift" className="text-sm font-medium">
              Monday
            </label>
            <select
              name="mondayShift"
              className="w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.mondayShift}
              onChange={handleChange}
            >
              <option value="">Morning shift</option>
            </select>
          </div>

          <div>
            <label htmlFor="wednesdayShift" className="text-sm font-medium">
              Wednesday
            </label>
            <select
              name="wednesdayShift"
              className="w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.wednesdayShift}
              onChange={handleChange}
            >
              <option value="">Morning shift</option>
            </select>
          </div>

          <div>
            <label htmlFor="fridayShift" className="text-sm font-medium">
              Friday
            </label>
            <select
              name="fridayShift"
              className="w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.fridayShift}
              onChange={handleChange}
            >
              <option value="">Morning shift</option>
            </select>
          </div>

          <div>
            <label htmlFor="sundayShift" className="text-sm font-medium">
              Sunday
            </label>
            <select
              name="sundayShift"
              className="w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.sundayShift}
              onChange={handleChange}
            >
              <option value="">Morning shift</option>
            </select>
          </div>
        </div>

        <div className="col-span-1">
          <div>
            <label htmlFor="date" className="text-sm font-medium">
              Date
            </label>
            <input
              type="date"
              name="date"
              className="w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="tuesdayShift" className="text-sm font-medium">
              Tuesday
            </label>
            <select
              name="tuesdayShift"
              className="w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.tuesdayShift}
              onChange={handleChange}
            >
              <option value="">Morning shift</option>
            </select>
          </div>

          <div>
            <label htmlFor="thursdayShift" className="text-sm font-medium">
              Thursday
            </label>
            <select
              name="thursdayShift"
              className="w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.thursdayShift}
              onChange={handleChange}
            >
              <option value="">Morning shift</option>
            </select>
          </div>

          <div>
            <label htmlFor="saturdayShift" className="text-sm font-medium">
              Saturday
            </label>
            <select
              name="saturdayShift"
              className="w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.saturdayShift}
              onChange={handleChange}
            >
              <option value="">Morning shift</option>
            </select>
          </div>

          <div className="flex justify-end mt-10">
            <button
              type="submit"
              className="w-[150px] px-3 py-2 bg-[#9575DE] text-white rounded-sm mr-9"
            >
              Save
            </button>
            <button
              className="w-24 px-3 py-2 bg-gray-500 text-white rounded-sm"
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
