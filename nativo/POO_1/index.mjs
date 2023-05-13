import User from "./userClass.mjs";

let users = [];
const formLogin = document.getElementById("formLogin");
const btnShowUsers = document.getElementById("showUsers");
const loggedData = document.getElementById("loggedData");

function validateCredentials({username,password}) {
    return new Promise((resolve, reject) => {
        if(username === "ariel" && password === "123123") {
            users.push(new User("ariel","123456"));
            resolve("DATOS CORRECTOS");
        } else {
            reject("DATOS INCORRECTOS");
        }
    })
}

formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();

    let formData = new FormData(formLogin);

    let data = {
        username: formData.get("username"),
        password: formData.get("password")
    }

    let res = await validateCredentials(data);
    console.log("res:",res);

    let message = `${loggedData.value} 
    Logged: ${data.username} is joinned `;

    loggedData.value = message;
});

btnShowUsers.addEventListener("click", () => {
    console.log(users);
});
