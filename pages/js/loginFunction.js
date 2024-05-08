// loginFunction.js

function loginWithDiscord() {
    // Redirect to Discord OAuth login page
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=1156597666680160376&response_type=code&redirect_uri=https%3A%2F%2F3nx3l3gk-1118.use2.devtunnels.ms%2Fauth%2Fdiscord%2Fcallback&scope=identify+guilds+email+guilds.members.read+connections+openid';
}

// Add event listener to traditional login form
document.getElementById('traditionalLoginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Implement logic for traditional login (send data to your server)
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
    // Send data to your server for authentication

    fetch('/login') // send username and password to server for auth checking 
});

