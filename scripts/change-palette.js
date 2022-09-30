//const palette1 = document.getElementById('palette-1')
const palette2 = document.getElementById('palette-2')
const palette3 = document.getElementById('palette-3')
const h1s = document.getElementsByTagName('h1')
const ps = document.getElementsByTagName('p')
const main = document.getElementById('main')
const homeContent = document.getElementById('home-content')
const projectCards = document.getElementsByClassName('card')
const gridItemOne = document.getElementById('intro-grid-item-1')
const gridItemTwo = document.getElementById('intro-grid-item-2')

document.getElementById("palette-1").addEventListener("click", changePaletteOne);

function changePaletteOne() {
    for (const h1 of h1s) {
        h1.style.color = '#253237'
    }
    for (const p of ps) {
        p.style.color = '#5c6b73'
    }

    main.style.backgroundColor = '#5c6b73'
    main.style.border = 'solid 10px #253237'

    homeContent.style.border = 'solid 10px #9db4c0'

    for (const projectCard of projectCards) {
        projectCard.style.backgroundColor = '#c2dfe3'
    } 

    homeContent.style.backgroundColor = '#e0fbfc'

    gridItemOne.style.backgroundColor = '#c2dfe3'
    gridItemTwo.style.backgroundColor = '#9db4c0'
}

function changePaletteTwo() {
    for (const h1 of h1s) {
        h1.style.color = '#1f363d'
    }
    for (const p of ps) {
        p.style.color = '#40798c'
    } 

    main.style.backgroundColor = '#40798c'
    main.style.border = 'solid 10px #1f363d'

    homeContent.style.border = 'solid 10px #70a9a1'

    for (const projectCard of projectCards) {
        projectCard.style.backgroundColor = '#9ec1a3'
    } 

    homeContent.style.backgroundColor = '#cfe0c3'

    gridItemOne.style.backgroundColor = '#9ec1a3'
    gridItemTwo.style.backgroundColor = '#70a9a1'
}

function changePaletteThree() {
    for (const h1 of h1s) {
        h1.style.color = '#22223b'    
    }
    for (const p of ps) {
        p.style.color = '#4a4e69'
    } 

    main.style.backgroundColor = '#4a4e69'
    main.style.border = 'solid 10px #22223b'

    homeContent.style.border = 'solid 10px #9a8c98'

    for (const projectCard of projectCards) {
        projectCard.style.backgroundColor = '#c9ada7'
    } 

    homeContent.style.backgroundColor = '#f2e9e4'

    gridItemOne.style.backgroundColor = '#c9ada7'
    gridItemTwo.style.backgroundColor = '#9a8c98'
}
