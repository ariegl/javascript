import React from 'react';
import {useDraggable} from '@dnd-kit/core';

export function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
  } : undefined;

  
  return (
    <button className='py-2 my-1 px-4 mx-2 bg-green-600' ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}