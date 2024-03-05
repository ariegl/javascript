import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import {Droppable, DroppableTrashArea} from '../Droppable';
import {Draggable} from '../Draggable';

//EN ESTA VERSION 2, SE UTILIZARA UN ARRAY DE OBJETOS PARA CREAR LOS COMPONENTES DRAGGABLE Y DROPPABLE

function Dnd2() {
  const containers = ['A', 'B', 'C', 'D'];

  //CONTIENE LA DATA DE CADA ELEMENTO
  const [draggableItems, setDraggableItems] = useState([
    {id: 'draggable1', content: 'Drag me #1', parent: null, deleted: false},
    {id: 'draggable2', content: 'Drag me #2', parent: null, deleted: false},
    {id: 'draggable3', content: 'Drag me #3', parent: null, deleted: false},
    {id: 'draggable4', content: 'Drag me #4', parent: null, deleted: false},
    {id: 'draggable5', content: 'Drag me #5', parent: null, deleted: false},
  ]);


  const [parent, setParent] = useState(null);
  const [dragStart, setDragStart] = useState(false);

  const draggableMarkup = (
    <Draggable id="draggable"><span className='bg-slate-500 px-3 py-2'>Drag me</span></Draggable>
  );

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className='w-screen h-screen bg-slate-900 flex flex-wrap justify-center content-center overflow-hidden'>

        {/* TRASH AREA */}
        {
        dragStart === true ? (
            <DroppableTrashArea key="trash" id="trash">
                <button>TRASH</button>
            </DroppableTrashArea>
        )  : undefined
        }

        <div className='absolute bottom-0 right-0' style={{display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"2rem"}}>
          {draggableItems.map((item) => ((item.parent === null && item.deleted === false) ? <Draggable key={item.id} id={item.id}>{item.content}</Draggable> : null))}
        </div>
        {containers.map((id) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
  
          <Droppable key={id} id={id}>
            <div className='flex flex-col'>
                {draggableItems.map((item) => (item.parent === id ? <Draggable className="px-3 py-2 mx-2" key={"droppable_"+item.id} id={item.id}>{item.content}</Draggable> : null))}
            </div>
          </Droppable>
        ))}

      </div>
    </DndContext>
  );

  function handleDragStart(event) {
    setDragStart(true);
  }

  function handleDragEnd(event) {
    console.log("EVEEEENT:",event);
    const {over} = event;
    console.log(event.active.id);
    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`

    //ACTUALIZAR EL ESTADO DE LOS ELEMENTOS DRAGGABLE
    
    const updatedItems = draggableItems.map((item) => {
        if (item.id === event.active.id) {
            return {
                ...item,
                parent: over ? over.id : null
            }
        } else {
            return item;
        }
    });

    setDraggableItems(updatedItems);
    setDragStart(false);
  }
};

export default Dnd2