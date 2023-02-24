import React, { useReducer, useEffect } from 'react';

const initialState = {
  x: 0,
  y: 0,
  color: 'red'
};

function reducer(state, action) {
  switch (action.type) {
    case 'move':
      return { ...state, x: action.payload.x, y: action.payload.y };
    case 'changeColor':
      return { ...state, color: action.payload.color };
    default:
      return state;
  }
}

function Circle() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let interval = setInterval(() => {
      dispatch({ type: 'changeColor', payload: { color: getRandomColor() } });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    dispatch({ type: 'move', payload: { x: e.clientX, y: e.clientY } });
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: state.x,
        top: state.y,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: state.color
      }}
      onMouseMove={handleMouseMove}
    />
  );
}

function getRandomColor() {
  const colors = ['red', 'green', 'blue', 'purple', 'orange'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default Circle;