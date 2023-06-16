let names = [
  "Ariel",
  "Juan",
  "José Luis",
  "José",
  "Francisco",
  "Guadalupe",
  "María",
  "Juana",
  "Antonio",
  "Jesús",
  "MiguelÁngel",
  "Pedro",
  "Alejandro",
  "Manuel",
  "Margarita",
  "Roberto",
  "Fernando",
  "Daniel",
  "Carlos",
  "Jorge",
  "Ricardo",
  "Miguel",
  "Eduardo",
];

let users = [];
let posts = [];

function generateUser() {
  let max = names.length;
  let min = 0;

  let num = Math.floor(Math.random() * (max - min) + min);
  let nameGen = names[num];

  names.splice(num, 1);

  let password = "123";
  let email = nameGen + "@gmail.com";
  let phone = "646-123-1234";

  let object = {
    username: nameGen,
    password: password,
    email: email,
    phone: phone,
    __v: 0,
  };

  return object;
}

function generatePost() {
  let max = names.length;
  let min = 0;

  let num = Math.floor(Math.random() * (max - min) + min);
  let nameGen = names[num];

  let description = `Dolor fugiat aliqua voluptate non officia in esse velit enim. Do non veniam anim deserunt aliqua amet tempor non velit. Dolor in veniam incididunt incididunt tempor mollit non dolor id veniam occaecat. Irure esse magna minim consectetur ipsum officia anim. Sint aute magna ullamco laboris consectetur ex officia nostrud eiusmod consectetur Lorem. In veniam eiusmod tempor nisi fugiat eiusmod voluptate. Est do quis anim do magna commodo anim sunt non minim exercitation sint dolore. Occaecat sit ea incididunt velit sint minim exercitation et irure. Ullamco magna sunt adipisicing aliquip eiusmod laboris magna exercitation dolore Lorem.`;
  let date = new Date();
  let title = "Dolor Fugiat Aliqua Voluptate";

  //let comments = generateComments();
  //let likes = generateLikes();
  //GENERAR LIKES

  let object = {
    author: nameGen,
    title: title,
    description: description,
    date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
    image: "",
    commentsActive: true,
  };

  names.splice(num, 1);

  return object;
}

function generateComments() {
  let names = [
    "Ariel",
    "Juan",
    "José Luis",
    "José",
    "Francisco",
    "Guadalupe",
    "María",
    "Juana",
    "Antonio",
    "Jesús",
    "MiguelÁngel",
    "Pedro",
    "Alejandro",
    "Manuel",
    "Margarita",
    "Roberto",
    "Fernando",
    "Daniel",
    "Carlos",
    "Jorge",
    "Ricardo",
    "Miguel",
    "Eduardo",
  ];

  let randomNumb = Math.floor(Math.random() * (5 - 0) + 0);
  let comments = []; //array de objetos
  let min = 0;

  //Cantidad de comentarios a generar
  for (let count = 0; count < randomNumb; count++) {
    let max = names.length;
    let num = Math.floor(Math.random() * (max - min) + min);
    let nameGen = names[num];
    comments.push({
      user: nameGen,
      comment: "bla bla bla",
      date: "14/06/2023",
    });
    names.splice(num, 1);
  }

  return comments;
}

function generateLikes() {
  let names = [
    "Ariel",
    "Juan",
    "José Luis",
    "José",
    "Francisco",
    "Guadalupe",
    "María",
    "Juana",
    "Antonio",
    "Jesús",
    "MiguelÁngel",
    "Pedro",
    "Alejandro",
    "Manuel",
    "Margarita",
    "Roberto",
    "Fernando",
    "Daniel",
    "Carlos",
    "Jorge",
    "Ricardo",
    "Miguel",
    "Eduardo",
  ];

  randomNumb = Math.floor(Math.random() * (5 - 0) + 0);
  let likes = [];
  let min = 0;

  for (let count = 0; count < randomNumb; count++) {
    let max = names.length;
    let num = Math.floor(Math.random() * (max - min) + min);
    let nameGen = names[num];
    let like = nameGen;
    names.splice(num, 1);

    likes.push(like);
  }

  return likes;
}

//CANTIDAD DE POST'S
for (i = 1; i <= 4; i++) {
  let object = generatePost();
  posts.push(object);
  //users.push(object);
}

//console.log(posts);
console.log(JSON.stringify(posts));
