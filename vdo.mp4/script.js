function toggleNavbar() {
    const navbarLinks = document.getElementById('navbarLinks');
    if (navbarLinks.style.display === 'block') {
        navbarLinks.style.display = 'none';
    } else {
        navbarLinks.style.display = 'block';
    }
}

function showLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function showSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modals when clicking outside of them
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}
