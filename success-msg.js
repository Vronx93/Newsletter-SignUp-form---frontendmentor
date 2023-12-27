const emailValue = localStorage.getItem('email-value')
const emailThanksMessage = document.getElementById('email-thanks-message')
const dismissBtn = document.getElementById('dismiss-btn')

function renderEmail() {
    emailThanksMessage.textContent = emailValue
}

renderEmail()

dismissBtn.addEventListener('click', function() {
    window.location.href = 'https://github.io/Vronx93/Newsletter-SignUp-form---frontendmentor/blob/main/index.html'
})
