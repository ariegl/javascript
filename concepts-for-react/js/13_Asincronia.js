const lista = document.createElement('ul');

//UTILIZANDO PROMESAS
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function(response){
//         return response.json();
//         //console.log(response);
//     }).then(function (data){
//         data.forEach(function(element) {
//             const li = document.createElement('li');
//             li.innerText = element.title;
//             lista.append(li);
//         });

//         document.body.append(lista);
//     })

//UTILIZANDO ASYNC AWAIT
async function loadData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    console.log(data);

    data.forEach(function (element) {
        const li = document.createElement('li');
        li.innerText = element.title;
        lista.append(li);
    });

    document.body.append(lista);
}

loadData();
