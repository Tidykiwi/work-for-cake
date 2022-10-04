//const palette1 = document.getElementById('palette-1')
const palette2 = document.getElementById('palette-2')
const palette3 = document.getElementById('palette-3')
const h1s = document.getElementsByTagName('h1')
const ps = document.getElementsByTagName('p')
const main = document.getElementById('main')
const contents = document.getElementsByClassName('content-container')
const projectCards = document.getElementsByClassName('card')
const flexItemOne = document.getElementById('intro-flex-item-1')
const flexItemTwo = document.getElementById('intro-flex-item-2')
const modalContent = document.getElementById('modal-content')
const modalContainer = document.getElementById('container-modal')
const buttons = document.getElementsByClassName('button')

document.getElementById("palette-1").addEventListener("click", changePaletteOne);

function changePaletteOne() {
    for (const h1 of h1s) {
        h1.style.color = '#253237'
    }
    for (const p of ps) {
        p.style.color = '#5c6b73'
    }

    main.style.backgroundColor = '#5c6b73'
    main.style.border = 'solid 5px #253237'

    for (const content of contents) {
        content.style.border = 'solid 10px #9db4c0'
        content.style.backgroundColor = '#e0fbfc'
    }

    for (const projectCard of projectCards) {
        projectCard.style.backgroundColor = '#c2dfe3'
    } 
    
    modalContent.style.backgroundColor = '#e0fbfc'
    modalContent.style.border = 'solid 10px #c2dfe3'
    modalContainer.style.backgroundColor = 'rgba(92, 107, 115, 0.9)'

    flexItemOne.style.backgroundColor = '#c2dfe3'
    flexItemTwo.style.backgroundColor = '#9db4c0'

    for (const button of buttons) {
        button.style.backgroundColor = '#5c6b73'
    }
    
}

function changePaletteTwo() {
    for (const h1 of h1s) {
        h1.style.color = '#1f363d'
    }
    for (const p of ps) {
        p.style.color = '#40798c'
    } 

    main.style.backgroundColor = '#40798c'
    main.style.border = 'solid 5px #1f363d'

    for (const content of contents) {
        content.style.border = 'solid 10px #70a9a1'
        content.style.backgroundColor = '#cfe0c3'
    }   

    for (const projectCard of projectCards) {
        projectCard.style.backgroundColor = '#9ec1a3'
    } 

    modalContent.style.backgroundColor = '#cfe0c3'
    modalContent.style.border = 'solid 10px #9ec1a3'
    modalContainer.style.backgroundColor = 'rgba(64, 121, 140, 0.8)'

    flexItemOne.style.backgroundColor = '#9ec1a3'
    flexItemTwo.style.backgroundColor = '#70a9a1'

    for (const button of buttons) {
        button.style.backgroundColor = '#40798c'
    }
    
}

function changePaletteThree() {
    for (const h1 of h1s) {
        h1.style.color = '#22223b'    
    }
    for (const p of ps) {
        p.style.color = '#4a4e69'
    } 

    main.style.backgroundColor = '#4a4e69'
    main.style.border = 'solid 5px #22223b'

    for (const content of contents) {
        content.style.border = 'solid 10px #9a8c98'
        content.style.backgroundColor = '#f2e9e4'    
    }

    for (const projectCard of projectCards) {
        projectCard.style.backgroundColor = '#c9ada7'
    } 

    modalContent.style.backgroundColor = '#f2e9e4'
    modalContent.style.border = 'solid 10px #c9ada7'
    modalContainer.style.backgroundColor = 'rgba(74, 78, 105, 0.8)'

    flexItemOne.style.backgroundColor = '#c9ada7'
    flexItemTwo.style.backgroundColor = '#9a8c98'

    for (const button of buttons) {
        button.style.backgroundColor = '#4a4e69'
    }
}
