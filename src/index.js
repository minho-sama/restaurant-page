// végén budget app alapján rendezni h szebb legyen? az a baj mindig selectelni kell újra a home contentet meg ilyenek....
//az is lehet h mindegyikhez ugyanazt az eventet rakom be, csak mást kell betölteniük aszerint h mi van a classList-ben

// import {loadContacts} from './contact.js'

import {loadTitle, loadNavbar} from './navbar.js'
import {loadHome} from './home.js'
import {loadContact} from './contact.js'
import {loadMenu} from './menu.js'
loadTitle()
loadNavbar()
loadHome()

//tab scwitching logic
const content = document.querySelector('#content')

class UI {
    static contactEvent(){

        const contact = document.querySelector('#contact');
        contact.addEventListener('click', () => {

            const menuContent = document.querySelector('.menu')
            const homeContent = document.querySelector('.home')
            const contactContent = document.querySelector('.contact')

        if (content.lastChild.classList == 'menu'){
            content.removeChild(menuContent)
        }
        else if(content.lastChild.classList == 'home'){
            content.removeChild(homeContent)
        }
        else if(content.lastChild.classList == 'contact'){
            content.removeChild(contactContent)
        }

        loadContact()
        })
    }   
    static menuEvent(){
        const menu = document.querySelector('#menu');
        menu.addEventListener('click', () => {
            
            const menuContent = document.querySelector('.menu')
            const homeContent = document.querySelector('.home')
            const contactContent = document.querySelector('.contact')

        if (content.lastChild.classList == 'menu'){
            content.removeChild(menuContent)
        }
        else if(content.lastChild.classList == 'home'){
            content.removeChild(homeContent)
        }
        else if(content.lastChild.classList == 'contact'){
            content.removeChild(contactContent)
        }

            loadMenu() 
        })
    }   
    static homeEvent(){
        const home = document.querySelector('#home');
        home.addEventListener('click', () => {

            const menuContent = document.querySelector('.menu')
            const homeContent = document.querySelector('.home')
            const contactContent = document.querySelector('.contact')

        if (content.lastChild.classList == 'menu'){
            content.removeChild(menuContent)
        }
        else if(content.lastChild.classList == 'home'){
            content.removeChild(homeContent)
        }
        else if(content.lastChild.classList == 'contact'){
            content.removeChild(contactContent)
        }

            loadHome() 
        })
    }   
}

UI.contactEvent()
UI.menuEvent()
UI.homeEvent()







