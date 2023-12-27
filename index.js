const emailInput = document.getElementById('email')
const invalidEmailMsg = document.getElementById('invalid-email-msg')
const emailForm = document.querySelector('.email-form')

function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/
  return regex.test(email)
}

emailForm.addEventListener('submit', function(event) {
event.preventDefault()
const emailValue = emailInput.value
const emailValueTrim = emailValue.trim()

if (validateEmail(emailValueTrim)) {
    localStorage.setItem('email-value', emailValue)
    invalidEmailMsg.classList.add('hidden')
    window.location.href = 'https://vronx93.github.io/Newsletter-SignUp-form---frontendmentor/blob/main/success-msg.html'
    } else {
    invalidEmailMsg.classList.remove('hidden')
}
})

