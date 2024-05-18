const form = document.forms.main
let placeholder

form.addEventListener(
  'focus',
  (event) => {
    placeholder = event.target.getAttribute('placeholder')
    event.target.placeholder = ''
  },
  { capture: true }
)

form.addEventListener(
  'blur',
  (event) => {
    event.target.placeholder = placeholder
  },
  { capture: true }
)
