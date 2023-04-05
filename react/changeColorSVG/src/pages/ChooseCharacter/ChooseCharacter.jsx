import React, {useRef} from 'react'
import GridCharacter from './GridCharacter/GridCharacter';
import ViewCharacter from './ViewCharacter/ViewCharacter';

function ChooseCharacter() {

  return (
    <div id="ChooseCharacterView" className='h-screen w-full grid grid-cols-12'>
      <div className='col-span-6 bg-gray-100 flex justify-center items-center flex-wrap'>
        <ViewCharacter/>
      </div>
      <div className='col-span-6 bg-green-300'>
        <GridCharacter/>
      </div>
    </div>
  )
}

export default ChooseCharacter