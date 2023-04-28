let globalIframe = "";

window.addEventListener('online', (event) => {
    console.log("status:",event);
})

if (navigator.onLine) {
    const targetOrigin = "http://127.0.0.1:5500/sendPage/";
    const windowMessageButton = document.querySelector("#sendMessage");

    windowMessageButton.addEventListener("click", () => {
        const iframeDestino = document.getElementById("listenIframe").contentWindow;
        iframeDestino.postMessage("Hello from Window #1", targetOrigin);
    });

} else {
    console.log("offline");
}

function openClient () {
    let containerFrame = document.getElementById("containerFrame");
    
    let iframe = document.createElement("iframe");
    iframe.src = "http://127.0.0.1:5500/listenPage/index.html";
    iframe.setAttribute("id","listenIframe");
    iframe.setAttribute("width","50%");

    containerFrame.appendChild(iframe);

    //let tab = window.open(iframe.src, '_blank');
    //tab.focus();
}