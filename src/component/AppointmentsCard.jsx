import React from 'react';

const AppointmentsCard = () => {
  return (
    <div className="max-w-sm p-4 bg-gradient-to-b from-teal-500 to-teal-200 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-white mb-4">Appointments</h3>
      
      {/* Bar chart representation */}
      <div className="flex items-end space-x-2 h-24 mb-6">
        {[40, 80, 60, 100, 70, 50, 90, 60].map((height, index) => (
          <div
            key={index}
            className="w-2 bg-white rounded-md"
            style={{ height: `${height}%` }}
          ></div>
        ))}
      </div>

      {/* Statistics */}
    
      
    </div>
  );
};

export default AppointmentsCard;
