const modal = document.querySelector('.search-model')
const modalBtn = document.querySelector('.icon_search')
const modalClose = modal.querySelector('.search-close-switch')
const searchInput = document.querySelector('#search-input')

modalBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
})

searchInput.addEventListener('input', (e) => {
    console.log(searchInput.value)
})