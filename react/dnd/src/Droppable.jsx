import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
    width: "200px",
    height: "150px",
    background:"#101010",
    border:"3px solid white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}