export function Write() {
    return (
        <>
            <input onChange={function(e){console.log(e.target.value)}}></input>
        </>
    )
}