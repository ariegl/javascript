import React from 'react'
import {useRoute} from 'wouter'

function AcercaDe() {

    const [match] = useRoute("/acerca-de");

  return (
    match ? <div><h1 className='bg-blue-300'>Acerda de</h1></div> : null
  );
}

export default AcercaDe