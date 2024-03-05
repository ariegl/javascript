import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import {Droppable} from '../Droppable';
import {Draggable} from '../Draggable';

function Dnd1() {
  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable"><span className='bg-slate-500 px-3 py-2'>Drag me</span></Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className='w-screen h-screen bg-slate-900 flex flex-wrap justify-center content-center'>
        <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"2rem"}}>
          {parent === null ? draggableMarkup : null}
        </div>
        {containers.map((id) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
  
          <Droppable key={id} id={id}>
            {parent === id ? draggableMarkup : <span className='text-white'>Drop here</span>}
          </Droppable>
        ))}
      </div>
    </DndContext>
  );

  function handleDragEnd(event) {
    const {over} = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
};

export default Dnd1