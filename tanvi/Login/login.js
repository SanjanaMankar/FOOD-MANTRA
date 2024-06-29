function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('inputPassword5').value;

    if (username.trim() === "") {
        alert("Username is required.");
        return false;
    }
    if (password.trim() === "") {
        alert("Password is required.");
        return false;
    }
    return true;
}

function togglePasswordVisibility(fieldId) {
    const passwordField = document.getElementById(fieldId);
    const toggleIcon = document.getElementById('togglePasswordIcon1');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}
