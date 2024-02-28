import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TimeZoneItem from './TimeZoneItem';

const TimeZoneList = ({ timeZones, handleRemoveTimeZone }) => {
  return (
    <Droppable droppableId="timezone-list" direction="vertical">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {timeZones.map((zone, index) => (
            <TimeZoneItem
              key={zone}
              timezone={zone}
              onRemove={handleRemoveTimeZone}
              index={index}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TimeZoneList;
