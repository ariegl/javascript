import { useState } from "react"

export default function EmojiSearch({onSearch}) {

    const [value,setValue] = useState('');

    function handleChange(e){
        setValue(e.target.value)
        onSearch(e)
    }

    return(
        <input className="rounded-xl pl-4 bg-gray-800 py-0.5" type="text" onChange={handleChange} placeholder="Buscador de emojis" value={value}></input>
    )
}