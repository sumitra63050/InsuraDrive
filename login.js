document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupFields = document.getElementById('signupFields');
    const forgotPassword = document.getElementById('forgotPassword');
    const toggleLink = document.getElementById('toggleLink');
    const toggleText = document.getElementById('toggleText');
    const loginSignupMessage = document.getElementById('login-signup-message');

    let isSignup = false;

    toggleLink.addEventListener('click', function(e) {
        e.preventDefault();
        isSignup = !isSignup;

        if (isSignup) {
            signupFields.style.display = 'block';
            forgotPassword.style.display = 'none';
            toggleText.textContent = 'Already have an account?';
            toggleLink.textContent = 'Log in';
            loginForm.querySelector('button[type="submit"]').textContent = 'Sign up';
            loginSignupMessage.textContent = 'Create your account to access more features.';
        } else {
            signupFields.style.display = 'none';
            forgotPassword.style.display = 'flex';
            toggleText.textContent = 'Don\'t have an account?';
            toggleLink.textContent = 'Sign up';
            loginForm.querySelector('button[type="submit"]').textContent = 'Log in';
            loginSignupMessage.textContent = 'Access your driving insights and rewards';
        }
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const username = isSignup ? document.getElementById('username').value : null;

        if (isSignup) {
            // Simulate signup process (replace with actual API call)
            console.log('Signing up with:', { email, password });
            alert('Signup successful!');
        } else {
            // Simulate login process (replace with actual API call)
            console.log('Logging in with:', { email, password });
            alert('Login successful!');
        }

        // Clear form fields after submission
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        if (isSignup) {
            document.getElementById('username').value = '';
        }
    });
});