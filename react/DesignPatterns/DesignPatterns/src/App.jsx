import { useState } from 'react'
import { useFetchData } from './ComponentCompositionWithHoook/useFetchData'
import DataViewer from './ComponentCompositionWithHoook/DataViewer';
import StateWithReducers from './StateManagementWithReducers/StateWithReducers';
import './App.css'

function App() {

  const [data, loading, error] = useFetchData();

  return (
    <>
      <DataViewer data={data} loading={loading} error={error}/>
      <StateWithReducers/>
    </>
  )
}

export default App
