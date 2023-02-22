let visorOcupped = false;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text",ev.target.id);
}

function drop(ev) {
    if (!visorOcupped) {
        let visor = document.getElementById('visor');
        let data = ev.dataTransfer.getData("text");
        visor.appendChild(document.getElementById(data));

        applyStylesOcupped();

        visorOcupped = true;
        console.log("finish");
    }else{
        console.log("occuped");
    }
}

function applyStylesOcupped(){
    let visorGlow = document.getElementById('visorGlow');
    let visor = document.getElementById('visor');
    let subtitle = document.getElementById('boxIcon');

    visorGlow.classList.remove('glowOff');
    visorGlow.classList.add('glowOn');

    subtitle.remove();
    visor.classList.add('visorOcupped');
}