// loginFunction.js

function loginWithDiscord() {
    // Redirect to Discord OAuth login page
    window.location.href = 'your-discord-oauth-url';
}

function loginWithMicrosoft() {
    // Redirect to Microsoft OAuth login page
    window.location.href = 'your-microsoft-oauth-url';
}

function loginWithGoogle() {
    // Redirect to Google OAuth login page
    window.location.href = 'your-google-oauth-url';
}

// Add event listener to traditional login form
document.getElementById('traditionalLoginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Implement logic for traditional login (send data to your server)
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
    // Send data to your server for authentication
});

