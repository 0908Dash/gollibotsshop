// loginFunction.js

// Function to handle traditional login form submission
document.getElementById('LoginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const emailOrUsername = formData.get('emailOrUsername');
    const password = formData.get('password');

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ emailOrUsername, password })
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }

        const result = await response.text();
        console.log(result); // For debugging, you can replace this with appropriate UI handling
        alert('Login successful'); // Example: Display a success message
        window.location.href = '/dashboard'; // Redirect to dashboard or another page
    } catch (error) {
        console.error('Error during login:', error);
        alert('Failed to login. Please check your credentials and try again.');
    }
});

// Function to initiate OAuth login with Discord
function loginWithDiscord() {
    // Redirect to Discord OAuth login page
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=1156597666680160376&response_type=code&redirect_uri=https%3A%2F%2Fgollibot.gollicraft.com%2Fcallback&scope=email+identify+connections+guilds';
}
