// Login validation
const VALID_USERNAME = 'faletehan1313';
const VALID_PASSWORD = '1313';
const SESSION_KEY = 'pusatdokumen_authenticated';

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorMessageDiv = document.getElementById('errorMessage');
    
    // Clear previous error message
    errorMessageDiv.textContent = '';
    
    // Validate credentials
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        // Store authentication in sessionStorage
        sessionStorage.setItem(SESSION_KEY, 'true');
        
        // Redirect to main page
        window.location.href = 'index.html';
    } else {
        // Show error message
        errorMessageDiv.textContent = 'Username atau password salah!';
        
        // Clear password field
        document.getElementById('password').value = '';
        
        // Focus on username field
        document.getElementById('username').focus();
    }
}

// Check if user is already logged in when login page loads
window.addEventListener('load', function() {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
        // User is already logged in, redirect to index
        window.location.href = 'index.html';
    }
});

// Allow Enter key to submit form
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleLogin(event);
        }
    });
});
