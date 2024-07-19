document.getElementById('register-form').addEventListener('submit', function(event) {
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
        event.preventDefault();
        alert('Passwords do not match.');
    } else {
        localStorage.setItem('registeredEmail', document.getElementById('register-email').value);
        localStorage.setItem('registeredPassword', password);

        window.location.href = 'logform.html';
    }
});

document.querySelectorAll('.inputBox input').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            this.classList.add('filled');
        } else {
            this.classList.remove('filled');
        }
    });
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const registeredEmail = localStorage.getItem('registeredEmail');
    const registeredPassword = localStorage.getItem('registeredPassword');

    if (email === registeredEmail && password === registeredPassword) {
        localStorage.setItem('loggedIn', 'true');
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password.');
    }
});

document.querySelectorAll('label').forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, index) => `<span style="transition-delay: ${index * 50}ms">${letter}</span>`)
        .join('');
});