colorPicker = document.querySelector("#colorPicker");
btnCabello = document.querySelector("#btnCabello");
btnAudifonos = document.querySelector("#btnAudifonos");
btnCamisa = document.querySelector("#btnCamisa");
btnPantalones = document.querySelector("#btnPantalones");
btnPiel = document.querySelector("#btnPiel");



btnCabello.addEventListener("click",function(){
    $(".cabello").css("fill",colorPicker.value);
    $(".cejas").css("fill",colorPicker.value);
})

btnAudifonos.addEventListener("click",function(){
    $(".audifonos").css("fill",colorPicker.value);
})

btnCamisa.addEventListener("click",function(){
    $(".camisa").css("fill",colorPicker.value);
})

btnPantalones.addEventListener("click",function(){
    $(".pantalones").css("fill",colorPicker.value);
})

btnPiel.addEventListener("click",function(){
    $(".piel").css("fill",colorPicker.value);
})
