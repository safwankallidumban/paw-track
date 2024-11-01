import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function PetRegistration() {
  
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState('');
  const [selected, setSelected] = useState('');
  const [formData, setFormData] = useState({
    petId: '',
    patientName: '',
    ownerId: '',
    ownerName: '',
    day: '',
    month: '',
    year: '',
    age: '',
    weight: '',
    weightUnit: '',
    species: '',
    gender: '',
    bloodType: '',
    patientPhoto: null,
    breed: '',
    color: '',
    status: '',
    identificationMark: '',
    petMood: '',
    additionalNotes: '',
    membershipId: '',
    reasonForVisit: '',
    insuranceDetails: '',
  });

  console.log(formData)

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send formData to an API
    console.log('Form Submitted:', formData);
  };
  
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 101 }, (_, i) => new Date().getFullYear() - i);
  const Age = Array.from({ length: 50 }, (_, i) => i + 1);

  const handleCheckboxChange = (value) => {
    setSelected(selected === value ? '' : value); // Toggle selection
  };

  return (
    <div className='h-screen'>
      <form action="" className='grid grid-cols-2 gap-6 m-10 p-20 border shadow-xl rounded-xl'>
        
        <div className='col-span-2'>
          <h2 className='text-3xl font-bold text-center mb-8'>Pet Registration</h2>
        </div>
        
        <div className='col-span-1'>
          <div>
            <label htmlFor="" className='text-sm font-medium'>Pet id</label>
            <input type="number" className='w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm'  name="petId" 
              value={formData.petId} 
              onChange={handleChange} />
          </div>

          

          <div>
            <label htmlFor="" className='text-sm font-medium'>Patient Name</label>
            <input type="text" className='w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm'
             name="patientName" 
             value={formData.patientName} 
             onChange={handleChange}  />
          </div>
        </div>

        <div className='col-span-1'>

        <div className=''>
            <label htmlFor="" className='text-sm font-medium'>Owner Id</label>
            <input type="number" className='w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm' 
             name="ownerId" 
             value={formData.ownerId} 
             onChange={handleChange}/>
          </div>
          
          <div className=''>
            <label htmlFor="" className='text-sm font-medium'>Owner Name</label>
            <input type="text" className='w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm' 
             name="ownerName" 
             value={formData.ownerName} 
             onChange={handleChange}/>
          </div>


        </div>

        <div className='col-span-2 '>
          <div className="flex space-x-10">
            <label htmlFor="" className='text-sm font-medium flex items-center w-[100px] mb-4'>Birth Date</label>

            <select name="day" value={formData.day} onChange={handleChange} className='border w-1/4 p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm'>
              <option value="">Day</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>

            <select name="month" value={formData.month} onChange={handleChange} className='border w-1/4 p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm'>
              <option value="">Month</option>
              {months.map((month, index) => (
                <option key={month} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>

            <select name="year" value={formData.year} onChange={handleChange} className='border w-1/4 p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm'>
              <option value="">Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <label htmlFor="" className='flex items-center mb-4'>OR</label>

            <select name="age" value={formData.age} onChange={handleChange}className='border w-1/4 p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm'>
              <option value="">Age</option>
              {Age.map((age) => (
                <option key={age}>{age}</option>
              ))}
            </select>
          </div>
        </div>

        <div className='col-span-2'>
          <div className='flex'>
            <div className='mr-20'>
              <label htmlFor="" className='text-sm font-medium'>Weight</label><br />
              <input type="number" className='border p-1 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm' />
            </div>

            <div className='flex space-x-10'>
              {['Kg', 'Gm', 'Lb', 'Oz'].map((unit) => (
                <div key={unit}>
                  <label htmlFor={`weightUnit-${unit}`} className='text-sm font-medium flex justify-center'>{unit}</label>
                  <input 
                    type="radio" 
                    name="weightUnit" 
                    id={`weightUnit-${unit}`} 
                    value={unit.toLowerCase()} 
                    checked={formData.weightUnit === unit.toLowerCase()} 
                    onChange={handleChange} 
                    className='circular-checkbox' 
                  />
                </div>
              ))}
            </div>
        

          </div>
        </div>

        <div className='col-span-1'>
          <div>
            <label htmlFor="" className='text-sm font-medium'>Species</label>
            <select name="species" value={formData.species} onChange={handleChange} className='w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm'>
            <option value="">Select Species</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
          </select>

          </div>

          <div>
            <label htmlFor="" className='text-sm font-medium'>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} id="" className='w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm'>
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="" className='text-sm font-medium'>Blood Type</label>
            <select name="bloodType" value={formData.bloodType} onChange={handleChange} className='w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm'>
            <option value="">Select Blood Type</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
          </select>
          </div>

          <div>
            <label htmlFor="" className='text-sm font-medium'>Patient Photo</label>
            <div className="flex justify-center border rounded bg-[#F7F3FF]">
              <label 
                htmlFor="file-upload" 
                className="cursor-pointer text-black  py-2 px-4 rounded-sm">
                Choose File
              </label>
              <input 
               id="patientPhoto" 
               type="file" 
               name="patientPhoto"
               onChange={handleChange}
                className="hidden" 
              />
            </div>
          </div>
        </div>

        <div className='col-span-1'>
          <div>
            <label htmlFor="" className='text-sm font-medium'>Breed</label>
            <select name="breed" value={formData.breed} onChange={handleChange} className='w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm'>
            <option value="">Select Breed</option>
            <option value="labrador">Labrador</option>
            <option value="siamese">Siamese</option>
          </select>
          </div>

          <div>
            <label htmlFor="" className='text-sm font-medium'>Color</label>
            <select name="color" value={formData.color} onChange={handleChange} className='w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm'>
            <option value="">Select Color</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
          </select>
          </div>

          <div>
            <label htmlFor="" className='text-sm font-medium'>Status</label>
            <select name="status" value={formData.status} onChange={handleChange} className='w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm'>
            <option value="">Select Status</option>
            <option value="healthy">Healthy</option>
            <option value="sick">Sick</option>
          </select>
          </div>

          <div>
            <label htmlFor="" className='text-sm font-medium'>Identification Mark</label>
            <input type="text" 
            name="identificationMark"
            value={formData.identificationMark} 
            onChange={handleChange} className='w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm' />
          </div>
        </div>

        <div className='col-span-2'>
          <div className='flex'>
            <div className='items-center mr-20'>
              <label htmlFor="" className='text-sm font-medium'>Pet Mood</label>
            </div>

            <div className='flex space-x-10 '>
            {['Aggressive', 'Very Friendly', 'Not Friendly', 'Friendly', 'Nervous'].map((mood) => (
              <div className=' justify-center' key={mood}>
                <div className='flex justify-center'><input 
                  type="radio" 
                  id={`mood-${mood}`} 
                  name="petMood" 
                  value={mood.toLowerCase()}
                  checked={formData.petMood === mood.toLowerCase()} 
                  onChange={handleChange} 
                  className='circular-checkbox' 
                /></div>
                <div><label htmlFor={`mood-${mood}`} className='text-sm font-medium'>{mood}</label></div>
              </div>
            ))}
          </div>

           
          </div>
        </div>

        <div className='col-span-1'>
          <div>
            <label htmlFor="" className='text-sm font-medium'>Additional Notes</label>
            <input  type="text" 
            name="additionalNotes" 
            value={formData.additionalNotes} 
            onChange={handleChange}  className='w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm' />
          </div>

          <div>
            <label htmlFor="" className='text-sm font-medium'>Membership Id</label>
            <input  type="text" 
            name="membershipId" 
            value={formData.membershipId} 
            onChange={handleChange} className='w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm' />
          </div>
        </div>

        <div className='col-span-1'>
          <div>
            <label htmlFor="" className='text-sm font-medium'>Reason For Visit</label>
            <input type="text" 
            name="reasonForVisit" 
            value={formData.reasonForVisit} 
            onChange={handleChange}  className='w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm' />
          </div>

          <div>
            <label htmlFor="" className='text-sm font-medium'>Insurance Details</label>
            <input  type="text" 
            name="insuranceDetails" 
            value={formData.insuranceDetails} 
            onChange={handleChange} className='w-full border p-1 mb-4 focus:ring focus:ring-blue-500 bg-[#F7F3FF] rounded-sm' />
          </div>
        </div>
      </form>
    </div>
  );
} 