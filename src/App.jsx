import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TimeZoneList from './components/TimeZoneList';
import TimeZoneForm from './components/TimeZoneForm';
import Cali from './components/Cali';
const App = () => {

  
  const [selectedTimeZone, setSelectedTimeZone] = useState('');
  const [timeZones, setTimeZones] = useState(() => {
    const storedTimeZones = localStorage.getItem('timeZones');
    return storedTimeZones ? JSON.parse(storedTimeZones) : ['Asia/Kolkata', 'America/New_York'];
  });

  useEffect(() => {
    
    localStorage.setItem('timeZones', JSON.stringify(timeZones));
  }, [timeZones]);

  const handleTimeZoneChange = (event) => {
    const timezone = event.target.value;
    setSelectedTimeZone(timezone);
  };

  const handleAddTimeZone = () => {
    if (selectedTimeZone && !timeZones.includes(selectedTimeZone)) {
      setTimeZones([...timeZones, selectedTimeZone]);
      setSelectedTimeZone('');
    }
  };
  const reverseTimeZones = () => {
    setTimeZones([...timeZones].reverse());
  };

  const handleRemoveTimeZone = (timezone) => {
    setTimeZones(timeZones.filter((zone) => zone !== timezone));
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedTimeZones = [...timeZones];
    const [movedZone] = updatedTimeZones.splice(result.source.index, 1);
    updatedTimeZones.splice(result.destination.index, 0, movedZone);
    setTimeZones(updatedTimeZones);
  };

  return (
    
    <div className="container mx-auto mt-8 p-8">
      <Cali/>
      <TimeZoneForm
        selectedTimeZone={selectedTimeZone}
        handleTimeZoneChange={handleTimeZoneChange}
        handleAddTimeZone={handleAddTimeZone}
      />
        <button
        onClick={reverseTimeZones}
        className="flex flex-row gap-4 bg-blue-600 text-white p-2 rounded-md hover:bg-purple-700 focus:outline-none mt-4"
      >Sort <img src='/sort.png' className='w-6 '/></button>

      <DragDropContext onDragEnd={onDragEnd}>
        <TimeZoneList timeZones={timeZones} handleRemoveTimeZone={handleRemoveTimeZone} />
      </DragDropContext>

    </div>
  );
};

export default App;
