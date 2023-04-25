let progressbar = document.querySelector("#progressbar");

const loading = async () => {
    await loadingOne();
    console.log("ENTRASTE");
    progressbar.classList.add("w-25");
    await loadingTwo();
    progressbar.classList.add("w-50");
    
}

const loadingOne = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("LOADED");
            resolve();
        },4000);
    })
}

const loadingTwo = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("LOADED #2");
            resolve();
        },1500);
    })
}

loading();