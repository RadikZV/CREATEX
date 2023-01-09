//  VALIDATION   
const form = document.querySelector(".form-sign-up")
form.passwordConfirmInput.addEventListener("input", function () {
    if (form.passwordConfirmInput.value != form.passwordInput.value) {
        form.passwordConfirmInput.setCustomValidity("Password and password confirmation do not match..");
        form.passwordInput.setCustomValidity("Password and password confirmation do not match..");
    }
    else {
        form.passwordConfirmInput.setCustomValidity("");
        form.passwordInput.setCustomValidity("");
    }
});