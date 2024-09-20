

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginPopup = document.getElementById('loginPopup');
    const signupPopup = document.getElementById('signupPopup');
    const closeLogin = document.getElementById('closeLogin');
    const closeSignup = document.getElementById('closeSignup');
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');

    loginBtn.addEventListener('click', () => {
        loginPopup.style.display = 'flex';
    });

    signupBtn.addEventListener('click', () => {
        signupPopup.style.display = 'flex';
    });

    closeLogin.addEventListener('click', () => {
        loginPopup.style.display = 'none';
    });

    closeSignup.addEventListener('click', () => {
        signupPopup.style.display = 'none';
    });

    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginPopup.style.display = 'none';
        signupPopup.style.display = 'flex';
    });

    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupPopup.style.display = 'none';
        loginPopup.style.display = 'flex';
    });

    window.addEventListener('click', (event) => {
        if (event.target === loginPopup) {
            loginPopup.style.display = 'none';
        }
        if (event.target === signupPopup) {
            signupPopup.style.display = 'none';
        }
    });

    document.getElementById('loginForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        try {
            const response = await fetch('/signup_db/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `username=${username}&password=${password}`
            });

            const data = await response.text();

            if (response.ok) {
                alert(data);
            } else {
                alert('Login failed');
            }

            loginPopup.style.display = 'none';
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed');
        }
    });

    document.getElementById('signupForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = document.getElementById('signupUsername').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch('/signup_db/register.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `username=${username}&password=${password}`
            });

            const data = await response.text();

            if (response.ok) {
                alert(data);
            } else {
                alert('Signup failed');
            }

            signupPopup.style.display = 'none';
        } catch (error) {
            console.error('Error:', error);
            alert('Signup failed');
        }
    });

    forgotPasswordLink.addEventListener('click', async () => {
        const email = prompt("Please enter your email:");

        if (email) {
            try {
                const response = await fetch('/signup_db/forgot_password.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: `email=${email}`
                });

                const data = await response.text();

                if (response.ok) {
                    alert(data);
                } else {
                    alert('Password reset request failed');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Password reset request failed');
            }
        }
    });
});
