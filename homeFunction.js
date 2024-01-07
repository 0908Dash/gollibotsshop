// homeFunction.js

// Mock user data, replace this with your actual user authentication logic
const user = {
    isLoggedIn: false, // Set to true if the user is logged in
    username: "JohnDoe", // User's username
    profilePicture: "path/to/profile.jpg" // User's profile picture
};

document.addEventListener("DOMContentLoaded", function () {
    const dashboardNavItem = document.getElementById("dashboard");
    const userNavItem = document.getElementById("user");

    // Check if the user is logged in
    if (user.isLoggedIn) {
        // If logged in, update the dashboard item to show
        dashboardNavItem.style.display = "list-item";

        // Update the user item to show the profile picture and settings
        userNavItem.innerHTML = `<a href="#"><img src="${user.profilePicture}" alt="Profile Picture"></a><div id="settings">Settings</div>`;
    } else {
        // If not logged in, hide the dashboard item
        dashboardNavItem.style.display = "none";

        // Update the user item to show the login link
        userNavItem.innerHTML = `<a href="./pages/login.html">Login</a>`;
    }
});
