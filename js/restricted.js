// Verificar si el usuario está autenticado
const loginSuccess = JSON.parse(localStorage.getItem('login_success'));

if (!loginSuccess) {
    // Redirigir al login si no está autenticado
    window.location.href = '../html/login.html';
} else {
    // Configurar el botón de cerrar sesión
    const logoutButton = document.querySelector('#logoutButton');
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('login_success'); // Eliminar datos de la sesión
        window.location.href = '../html/login.html'; // Redirigir al login
    });
}
