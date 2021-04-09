const content = document.querySelector('#content')

function loadTitle(){
    const title = document.createElement('div')
    title.classList.add('titleBar')
    title.innerHTML = `
    <img id = 'pesto' src = "../pestoIcon.jpg" alt = "pesto"></img>
    <h1 id = "title">Pesto Paradise</h1>
    `
    content.appendChild(title)
    }


function loadNavbar (){
    const navbar = document.createElement('div')
    navbar.classList.add('navbar')
    navbar.innerHTML = `
    <li id = "home">Home</li>
    <li id = "menu">Menu</li>
    <li id = "contact" >Contact</li>
    `;
    content.appendChild(navbar)

}

export {loadTitle, loadNavbar} 

