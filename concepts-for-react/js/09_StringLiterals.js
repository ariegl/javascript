const myButton = document.createElement("button");
myButton.innerText = "This is my button";

const skinButton = {
    background: '#DAF7A6',
    color: '#000',
    weight: 'bold',
    border: '3px solid #999999',
    cursor: 'pointer',
    padding: '5px 10px',
    borderHover: '3px solid #DAF7A6',
    margin: '0px 10px',
}

const isAuthorized = true;

myButton.style = `
    background: ${isAuthorized ? skinButton.background : 'red'};
    color: ${skinButton.color};
    weight: ${skinButton.weight};
    border: ${skinButton.border};
    cursor: ${skinButton.cursor};
    padding: ${skinButton.padding};
    margin. ${skinButton.margin};
`

document.body.append(myButton);