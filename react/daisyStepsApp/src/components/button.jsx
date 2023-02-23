export default function Button() {
    return (
        <button ref={btnNext} onClick={() => setCount(count + 1)} className="btn">Hello daisyUI</button>
    )
}