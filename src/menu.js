function loadMenu(){
    const menu = document.createElement('div')
    menu.classList.add('menu')
    menu.innerHTML = `
    <h1>FOOD FOOD FOOD</h1>
    `
    document.querySelector('#content').appendChild(menu)
}

export {loadMenu}