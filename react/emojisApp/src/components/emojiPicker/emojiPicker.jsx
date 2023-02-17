import { forwardRef, useRef, useState, useEffect } from "react";
import { data as emojiList } from "./data";
import EmojiButton from "./emojiButton";
import EmojiSearch from "./emojiSearch";

export default forwardRef(EmojiPicker);

export function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(emojiList);

  const containerRef = useRef(null);

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
    <div ref={containerRef}>
      <button onClick={handleClickOpen}>😃</button>

      {isOpen ? (
        <div>
          <EmojiSearch onSearch={handleSearch} />
          <div>
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
