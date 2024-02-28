import React from 'react';
import moment from 'moment-timezone';

const TimeZoneForm = ({ selectedTimeZone, handleTimeZoneChange, handleAddTimeZone }) => {
  return (
    <div className="mb-8">
      <label className="text-lg font-semibold">Select Timezone</label>
      <div className="flex space-x-2">
        <select
          value={selectedTimeZone}
          onChange={handleTimeZoneChange}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="" disabled>Select a timezone</option>
          {moment.tz.names().map((zone) => (
            <option key={zone} value={zone}>{zone}</option>
          ))}
        </select>
        <button
          onClick={handleAddTimeZone}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Add Timezone
        </button>
      </div>
    </div>
  );
};

export default TimeZoneForm;
