const myAsyncFunctionWithPromise = async () => {
    let myPromise = new Promise((resolve,reject) => {
        let myData = "data success";

        if(myData === "data success") resolve("Complete");
        else reject("Fail data");
    })

    console.log(await myPromise);
}

const time = (ms) => {
    return new Promise((resolve,reject) => {
        let next = true;

        if (next) {
            setTimeout(resolve,ms);
        } else {
            setTimeout(reject,ms);
        }
    })
}

const mySecondAsyncFunction = async () => {
    try{
        console.log("LOADING...");

        await time(5000);
        console.log("LOADED");
    
        console.log("FINISHED");
    }

    catch(error){
        console.log("ERROR:",error);
    }
}

mySecondAsyncFunction();
//myAsyncFunctionWithPromise();