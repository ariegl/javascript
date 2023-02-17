import { forwardRef, useState } from "react";
import { data as emojiList } from "./data";
import EmojiSearch from "./emojiSearch";

export default forwardRef(EmojiPicker);

export function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(emojiList);

  function handleSearch(e) {
    const q = e.target.value.toLowerCase();

    if (!!q) {
      const search = emojiList.filter((emoji) => {
        return (
          emoji.name.toLowerCase().includes(q) ||
          emoji.keywords.toLowerCase().includes(q)
        );
      });

      setEmojis(search);
    } else {
      setEmojis(emojiList);
    }
  }

  function EmojiPickerContainer() {}

  function handleClickOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={handleClickOpen}>😃</button>

      {isOpen ? (
        <div>
          <EmojiSearch onSearch={handleSearch} />
          <div>
            {emojiList.map((emoji) => (
              <div key={emoji.symbol}>{emoji.symbol}</div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
