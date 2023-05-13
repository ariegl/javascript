import User from "./userClass.mjs";

const credentials = [
    {
        user: "admin",
        password: "admin123",
    },
    {
        user:"root",
        password:"root123",
    },
    {
        user:"user",
        password:"user123",
    },
    {
        user: "ariel",
        password:"ariel123",
    }
]

let users = [];
const formLogin = document.getElementById("formLogin");
const btnShowUsers = document.getElementById("showUsers");
const loggedData = document.getElementById("loggedData");

function validateCredentials({username,password}) {
    return new Promise((resolve, reject) => {

        const founded = credentials.filter(element => {
            if(element.user === username && element.password === password) {
                return element;
            }
        })

        if(founded.length > 0) {
            users.push(new User(username,password));
            resolve({status: 200, message: "Correcto"});
        } else {
            resolve({status: 400, message: "Incorrecto"});
        }
    })
}

formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();

    //Obtenemos el formulario
    let formData = new FormData(formLogin);

    let data = {
        username: formData.get("username"),
        password: formData.get("password")
    }

    //verificamos las credenciales
    let res = await validateCredentials(data);
    console.log(res);

    //Construimos un nuevo mensaje para el notificador
    let pre = document.createElement("pre");
    pre.setAttribute("data-prefix","$");
    let code = document.createElement("code");

    if(res.status === 200) {
        code.classList.add("text-success")
        code.textContent = `New user - ${data.username} is joinned`;
    } else {
        code.textContent = `Fail - ${data.username} invalid user credentials`;
        code.classList.add("text-error");
    }

    pre.appendChild(code);
    loggedData.appendChild(pre);

});

btnShowUsers.addEventListener("click", () => {
    console.log(users);
});
