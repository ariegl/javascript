import { forwardRef, useRef, useState, useEffect } from "react";
import { data as emojiList } from "./data";
import EmojiButton from "./emojiButton";
import EmojiSearch from "./emojiSearch";

export default forwardRef(EmojiPicker);

export function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(emojiList);

  const containerRef = useRef(null);
  const buttonEmoji = useRef(null);

  useEffect(() => {
      window.addEventListener("click", function(e){
        if(!containerRef.current.contains(e.target) && !inputRef.current.contains(e.target)){
          setIsOpen(false);
          setEmojis(emojiList);
        }
      })
  }, [])

  function handleSearch(e) {
    const q = e.target.value.toLowerCase();

    console.log("El dato es:"+q);

    if (!!q) {
      const search = emojiList.filter((emoji) => {
        return (
          emoji.name.toLowerCase().includes(q) ||
          emoji.keywords.toLowerCase().includes(q)
        );
      });

      setEmojis(search);
      console.log(emojis);
    } else {
      setEmojis(emojiList);
    }
  }

  function EmojiPickerContainer() {}

  function handleClickOpen() {
    setIsOpen(!isOpen);
    inputRef.current.focus();
    buttonEmoji.current.innerText = "😄"
  }

  function handleOnClickEmoji(emoji) {
    const cursorPos = inputRef.current.selectionStart;
    const text = inputRef.current.value;

    const prev = text.slice(0,cursorPos);
    const next = text.slice(cursorPos)

    inputRef.current.value = prev + emoji.symbol + next;
    inputRef.current.selectionStart = cursorPos + emoji.symbol.length
    inputRef.current.selectionEnd = cursorPos + emoji.symbol.length
    inputRef.current.focus();
  }

  return (
    <div className="flex justify-center items-center flex-wrap" ref={containerRef}>
      <div className="w-full flex justify-center mt-8"><button ref={buttonEmoji} className={`rounded-2xl text-3xl p-2 ${!!isOpen ? 'bg-gray-400' : 'bg-gray-700'}`} onClick={handleClickOpen}>🙂</button></div>

      {isOpen ? (
        <div className="w-full flex justify-center mt-8 flex-wrap">
          <EmojiSearch onSearch={handleSearch} />
          <div className="w-full flex justify-center mt-5">
            {emojis.map((emoji) => (
              <EmojiButton key={emoji.symbol} emoji={emoji} onClick={handleOnClickEmoji} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
