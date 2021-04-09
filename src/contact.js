
function loadContact (){
    const contact = document.createElement('div')
    contact.classList.add('contact')
    contact.innerHTML = `
    <div class = box1>
        Contact Us:
        <ul>
            <li>06/30/666/6666</li>
            <li>lore.ipsum@gmail.com</li>
        </ul>
    </div>
    <div class = box2>
        Addres: 
        <ul>
            <li>Budapest, Kossuth Lajos utca 5.</li>
        </ul>
    </div>
    <div class = box3>
        Open:
        <ul>
            <li>M-F: 12.00 - 23.00</li>
            <li>Weekend: 11.00 - 01.00</li>
        </ul>
    </div>
    `
    document.querySelector('#content').appendChild(contact)
}

export {loadContact}