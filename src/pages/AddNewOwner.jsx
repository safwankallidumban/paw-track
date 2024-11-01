import React, { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";

export default function AddNewOwner() {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    clinic: '',
    ownerId: '',
    firstName: '',
    occupation: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    ownerNote: '',
    title: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    guardian: '',
    relationship: '',
    guardianContact: '',
    additionalNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
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
        <div className="col-span-1">
          <div className="">
            <label htmlFor="clinic" className="text-sm font-medium">
              Your Clinic / Refferings
            </label>
            <select
              name="clinic"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.clinic}
              onChange={handleChange}
            >
              <option value="">clinics</option>
            </select>
          </div>

          <div>
            <label htmlFor="ownerId" className="text-sm font-medium">
              Owner id/ Name
            </label>
            <input
              type="text"
              name="ownerId"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.ownerId}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="occupation" className="text-sm font-medium">
              Occupation
            </label>
            <input
              type="text"
              name="occupation"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.occupation}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="address1" className="text-sm font-medium">
              Address Line 1
            </label>
            <input
              type="text"
              name="address1"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.address1}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="address2" className="text-sm font-medium">
              Address Line 2
            </label>
            <input
              type="text"
              name="address2"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.address2}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="city" className="text-sm font-medium">
              City
            </label>
            <input
              type="text"
              name="city"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="state" className="text-sm font-medium">
              State / Province
            </label>
            <input
              type="text"
              name="state"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="zipCode" className="text-sm font-medium">
              Zip Code
            </label>
            <input
              type="number"
              name="zipCode"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="ownerNote" className="text-sm font-medium">
              Owner Note
            </label>
            <input
              type="text"
              name="ownerNote"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm h-20"
              value={formData.ownerNote}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="col-span-1 pt-[73.5px]">
          <div className="">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <select
              name="title"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.title}
              onChange={handleChange}
            >
              <option value="">Select</option>
            </select>
          </div>

          <div>
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="mobileNumber" className="text-sm font-medium">
              Mobile Number
            </label>
            <input
              type="number"
              name="mobileNumber"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email id
            </label>
            <input
              type="email"
              name="email"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="guardian" className="text-sm font-medium">
              Guardian / Spouse
            </label>
            <input
              type="text"
              name="guardian"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.guardian}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="relationship" className="text-sm font-medium">
              Relationship
            </label>
            <input
              type="text"
              name="relationship"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.relationship}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="guardianContact" className="text-sm font-medium">
              Guardian / Spouse Contact Number
            </label>
            <input
              type="number"
              name="guardianContact"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.guardianContact}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="additionalNumber" className="text-sm font-medium">
              Additional Number
            </label>
            <input
              type="text"
              name="additionalNumber"
              className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm"
              value={formData.additionalNumber}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="document" className="text-sm font-medium">
              Document Upload
            </label>
            <div className="w-full border p-1 mb-4 focus:ring-0 focus:ring-blue-500 bg-[#F7F3FF] rounded-sm h-20 flex justify-center items-center">
              <input
                type="file"
                name="document"
                id="File-upload"
                className="hidden"
                ref={fileInputRef}
                onChange={(e) => handleChange({ target: { name: 'document', value: e.target.files[0] } })}
              />
              <FiUpload className="size-7" onClick={handleUploadClick} />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-[150px] px-3 py-2 bg-[#9575DE] text-white rounded-md mr-9"
            >
              Save
            </button>
            <button
              type="button"
              className="w-24 px-3 py-2 bg-gray-500 text-white rounded-md"
              onClick={() => setFormData({})}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
