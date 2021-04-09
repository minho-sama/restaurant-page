function loadMenu(){
    const menu = document.createElement('div')
    menu.classList.add('menu')
    menu.innerHTML = `
    <img src = '../pesto/pesto1.jpg'>
    <label id = 'item1'>
    <p id = 'name'> Pesto </p>
        <p id = 'caption'> The authentic, creamy pesto made with fresh basil and love</p>
        <p class = 'price'> 1390 HUF </p>
    </label>

    <img src = '../pesto/pesto2.jpg'>
    <label id = 'item2'>
        <p id = 'name'> Pesto Deluxe </p>
        <p id = 'caption'> Premium pesto, for premium people </p>
        <p class = 'price'> 2190 HUF </p>
    </label>

    <img src = '../pesto/pesto3.jpg'>
    <label id = 'item3'>
        <p id = 'name'> Pesto Deluxe </p>
        <p id = 'caption'> Home-made pesto pasta </p>
        <p class = 'price'> 990 HUF</p>
    </label>

    <img src = '../pesto/pesto4.jpg'>
    <label id = 'item4'>
        <p id = 'name'> Red Pesto </p>
        <p id = 'caption'> Sun-dried tomato pesto from Italy</p>
        <p class = 'price'> 1890 HUF </p>
    </label>

    `
    document.querySelector('#content').appendChild(menu)
}

export {loadMenu}