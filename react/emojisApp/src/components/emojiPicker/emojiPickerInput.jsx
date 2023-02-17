import { useRef } from "react";
import EmojiPicker from "./emojiPicker";

export default function EmojiPickerInput() {

    const refInput = useRef();

    function handleClick() {
        refInput.current.focus();
    }

    return(
        <div>
            <input ref={refInput} type="text" />
            <EmojiPicker ref={refInput}/>
        </div>
    )
}