window.addEventListener('load', () => {
    let btnOpen = document.getElementById("btnOpen");
    let btnSendMsg = document.getElementById("btnSendMsg");
    let toggleListTypeData = document.getElementById("selectMsgType");
    let windowLink = "";

    btnOpen.addEventListener('click', () => {
        windowLink = window.open("http://127.0.0.1:5501/listenPage/","_blank");
        console.log(windowLink);
    });

    btnSendMsg.addEventListener('click', () => {
        console.log(toggleListTypeData.value);
        let typeValue = toggleListTypeData.value;

        switch(typeValue) {
            case 'string':
                windowLink.postMessage("Mensaje desde la pagina numero 1","*");
                break;
            case 'object':
                windowLink.postMessage({user: {username:"ariel",email:"ariel@gmail.com"}},"*");
                break;
            case 'array':
                windowLink.postMessage(['a','b','c',2,5,7], "*");
                break;
            default:
                break;
        }

    });
})