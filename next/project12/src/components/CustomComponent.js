import React, {useContext, useRef} from 'react'
import { CustomContext } from '@/providers/CustomProvider';

function CustomComponent() {

	const {customState, setCustomState} = useContext(CustomContext);

	const inputText = useRef(null);

	const handleUpdateText = () => {
		const text = inputText.current.value;
		setCustomState(text);
	}

  return (
    <div>
			<h1 className='text-4xl py-4'>{customState}</h1>
			<input type="text" className='bg-slate-200' ref={inputText}/>
			<button onClick={handleUpdateText}>ACTUALIZAR</button>
		</div>
  )
}

export default CustomComponent