import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import moment from 'moment-timezone';

const TimeZoneItem = ({ timezone, onRemove, index }) => {
  return (
    <Draggable draggableId={timezone} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-4 rounded-md shadow-md mb-2 flex justify-between items-center"
        >
          <p className="text-xl font-semibold">{timezone}</p>
          <p className="text-lg">{moment().tz(timezone).format('h:mm A')}</p>
          <button
            onClick={() => onRemove(timezone)}
            className="text-red-500 hover:text-red-700 focus:outline-none"
          >
            Remove
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default TimeZoneItem;
