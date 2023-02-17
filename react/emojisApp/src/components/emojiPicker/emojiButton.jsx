export default function EmojiButton({emoji, onClick}) {

    function handleClick() {
        onClick(emoji)
    }

    return(
        <button className="text-xl" onClick={handleClick}>{emoji.symbol}</button>
    )
}