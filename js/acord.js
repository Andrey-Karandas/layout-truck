const setClass = (name) =>
  document.querySelector(name).classList.toggle('active')

const getParent = (name) => event.target.closest(name)

const arrow1 = '.column__arrow_1'
const arrow2 = '.column__arrow_2'
const arrow3 = '.column__arrow_3'

document.addEventListener('click', (event) => {
  if (getParent(arrow1)) {
    setClass('.column__list_1')
    setClass(arrow1)
  } else if (getParent(arrow2)) {
    setClass('.column__list_2')
    setClass(arrow2)
  } else if (getParent(arrow3)) {
    setClass('.column__list_3')
    setClass(arrow3)
  }
})
