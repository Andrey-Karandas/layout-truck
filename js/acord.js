document.addEventListener('click', (event) => {
  const arrow = event.target.closest('.column__arrow')
  if (arrow) {
    const id = arrow.getAttribute('data-id')
    document.querySelector(`[data-id="${id}"`).classList.toggle('active')
  }
})
