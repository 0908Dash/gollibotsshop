// loginFunction.js

function loginWithDiscord() {
    // Redirect to Discord OAuth login page
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1156597666680160376&response_type=code&redirect_uri=https%3A%2F%2Fgollibot.gollicraft.com%2Fauth%2Fcallback%2Findex.html&scope=identify+email+connections+guilds';
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

