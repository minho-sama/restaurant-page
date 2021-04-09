function loadHome (){
    const home = document.createElement('div')
    home.classList.add('home')
    home.innerHTML = `
    <p>Our mission is bullshit Our mission is bullshit</p>
    <p>Our mission is bullshit Our mission is bullshit Our mission is bullshit</p>
    <p>Our mission is bullshit Our mission is bullshit</p>
    `
    document.querySelector('#content').appendChild(home)
}

export {loadHome}
