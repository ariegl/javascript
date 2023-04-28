window.onmessage = (event) => {
    let container = document.getElementById("containerMsg");
    let parrafo = document.createElement("p");
    parrafo.innerText = event.data;
    container.appendChild(parrafo);
}