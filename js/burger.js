const body = document.body
const obj = {
  menu: document.querySelector('.header__menu'),
  burger: document.querySelector('.header__burger'),
}

document.addEventListener('click', (event) => {
  event.preventDefault()
  if (event.target.closest('.header__burger')) {
    body.classList.toggle('lock')
    Object.keys(obj).forEach((item) => obj[item].classList.toggle('active'))
  } else if (event.target.closest('.menu__link')) {
    Object.keys(obj).forEach((item) => obj[item].classList.remove('active'))
    body.classList.remove('lock')
  }
})
