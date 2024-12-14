const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const errorMessage = document.querySelector('#error-message'); // Contenedor para mostrar errores

    const email = emailInput.value;
    const password = passwordInput.value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.email === email && user.password === password);

    // Limpiar mensajes de error previos
    errorMessage.textContent = '';
    emailInput.style.border = '';
    passwordInput.style.border = '';

    if (!validUser) {
        // Mostrar mensaje de error
        errorMessage.textContent = 'Usuario y/o contraseña incorrectos!';
        errorMessage.style.color = 'red';

        // Cambiar el estilo de los inputs
        emailInput.style.border = '1px solid red';
        passwordInput.style.border = '1px solid red';
        return;
    }

    // Si es válido, guardar información de inicio de sesión en localStorage
    localStorage.setItem('login_success', JSON.stringify({ email: validUser.email }));

    // Redirigir a la página protegida
    window.location.href = '../html/inventario.html';
});
