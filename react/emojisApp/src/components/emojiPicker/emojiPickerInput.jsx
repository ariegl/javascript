import { useRef } from "react";
import EmojiPicker from "./emojiPicker";

export default function EmojiPickerInput() {

    const refInput = useRef();

    function handleClick() {
        refInput.current.focus();
    }

    return(
        <div className="flex justify-center items-center flex-wrap">
            <span className="text-yellow-400 font-bold text-6xl w-full text-center py-8">Emoji<span className="text-white px-4">Picker</span></span>
            <div className="w-full flex justify-center"><input className="w-2/5 rounded-2xl pl-5 py-2 font-bold " ref={refInput} type="text" /></div>
            <EmojiPicker ref={refInput}/>
        </div>
    )
}