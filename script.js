const contentBox = document.querySelectorAll('.section-accordion-container')
const button = document.querySelector('button') 
const navLi = document.querySelectorAll('.header-div-nav-ul-li')
const imgNavBar = document.querySelector('.imgNavBar')

contentBox.forEach( (item) => { 
    item.addEventListener('click' ,() => {
        item.classList.toggle('ativado')
    })
}) 

function toggleImg () { 
    if (imgNavBar.getAttribute('src') == 'imgs/bars-solid.svg') {
        imgNavBar.setAttribute('src', 'imgs/chevron-down-solid.svg')
    } else { 
        imgNavBar.setAttribute('src', 'imgs/bars-solid.svg')
    }
}

button.addEventListener('click', () => { 
    document.querySelector('.header-div-navbar').classList.toggle('nav-bar-ativa')
    document.querySelector('main').classList.toggle('main-disabled')
    toggleImg()
})

navLi.forEach( (item) => {
    item.addEventListener('click', () => {
        document.querySelector('.header-div-navbar').classList.remove('nav-bar-ativa')
        document.querySelector('main').classList.remove('main-disabled')
        toggleImg()
    })
})