import React, {useState} from 'react';
import "./App.css";
import {DndContext} from '@dnd-kit/core';

import {Droppable} from './Droppable';
import {Draggable} from './Draggable';
import Dnd1 from './versions/Dnd1';
import Dnd2 from './versions/Dnd2';

function App() {
  //INDICAR LA VERSION DEL COMPONENTE QUE QUEREMOS PROBAR
  return (
    <Dnd2></Dnd2>
  );
};

export default App