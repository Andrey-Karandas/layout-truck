const body = document.body
const headerBody = document.querySelector('.header__body')

document.addEventListener('click', (event) => {
  event.preventDefault()
  if (event.target.closest('.header__burger')) {
    body.classList.toggle('lock')
    headerBody.classList.toggle('active')
  }
})