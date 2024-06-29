function validateForm() {
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const contactno = document.getElementById('contactno').value.trim();
    const message = document.getElementById('message').value.trim();

    if (firstname === "") {
        alert("First Name is required.");
        return false;
    }
    if (lastname === "") {
        alert("Last Name is required.");
        return false;
    }
    if (email === "") {
        alert("Email is required.");
        return false;
    }
    if (contactno === "") {
        alert("Contact No. is required.");
        return false;
    }
    if (message === "") {
        alert("Message is required.");
        return false;
    }

    return true;
}
