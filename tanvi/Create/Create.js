const validUsername = "user";
        const validPassword = "pass";

        function validateForm() {
            const username = document.getElementById('username').value;
            const email = document.getElementById('exampleFormControlInput1').value;
            const password = document.getElementById('inputPassword5').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const message = document.getElementById('message');

            message.textContent = "";

            if (username.trim() === "") {
                alert("Username is required.");
                return false;
            }
            if (email.trim() === "") {
                alert("Email is required.");
                return false;
            }
            if (password.trim() === "") {
                alert("Password is required.");
                return false;
            }
            if (confirmPassword.trim() === "") {
                alert("Confirm Password is required.");
                return false;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return false;
            }

            if (username === validUsername && password === validPassword) {
                alert('Successfully done with Application Submission');
                return true;
            } else {
                message.textContent = "Credentials do not match.";
                return false;
            }
        }

        function togglePasswordVisibility(fieldId) {
            const passwordField = document.getElementById(fieldId);
            const toggleIcon = document.querySelector(`#togglePasswordIcon${fieldId === 'inputPassword5' ? '1' : '2'}`);

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