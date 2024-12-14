const registerForm = document.querySelector('#registerForm');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const confirmPasswordInput = document.querySelector('#confirmPassword');
    const errorMessage = document.querySelector('#error-message');
    const successMessage = document.querySelector('#success-message');

    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Limpiar mensajes anteriores
    errorMessage.textContent = '';
    successMessage.textContent = '';
    emailInput.style.border = '';
    passwordInput.style.border = '';
    confirmPasswordInput.style.border = '';

    // Validaciones
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Las contraseñas no coinciden.';
        errorMessage.style.color = 'red';
        passwordInput.style.border = '1px solid red';
        confirmPasswordInput.style.border = '1px solid red';
        return;
    }

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = Users.some(user => user.email === email);

    if (userExists) {
        errorMessage.textContent = 'El correo ya está registrado.';
        errorMessage.style.color = 'red';
        emailInput.style.border = '1px solid red';
        return;
    }

    // Registrar nuevo usuario
    Users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(Users));

    successMessage.textContent = 'Registro exitoso. Ahora puedes iniciar sesión.';
    successMessage.style.color = 'green';

    // Limpiar formulario
    registerForm.reset();

    // Redirigir al login después de un tiempo
    setTimeout(() => {
        window.location.href = '../html/login.html';
    }, 2000);
});
