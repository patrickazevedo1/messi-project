const contentBox = document.querySelectorAll('.section-accordion-container')
const button = document.querySelector('.toggle-button') 
const navigation = document.querySelector('.navigation-list')

contentBox.forEach( (item) => { 
    item.addEventListener('click' ,() => {
        item.classList.toggle('ativado')
    })
}) 

button.addEventListener('click', () => {
    navigation.classList.toggle('active')
})
