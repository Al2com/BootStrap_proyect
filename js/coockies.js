function aceptarCookies() {
    // Guardar en localStorage que el usuario aceptó las cookies
    localStorage.setItem('cookies-aceptadas', 'true');
    // Ocultar la ventana de cookies
    var ventanaCookies = document.querySelector('.ventana-cookies');
    ventanaCookies.style.display = 'none';
}

// Mostrar la ventana de cookies sólo si el usuario no las ha aceptado previamente
var cookiesAceptadas = localStorage.getItem('cookies-aceptadas');
if (!cookiesAceptadas) {
    var ventanaCookies = document.querySelector('.ventana-cookies');
    ventanaCookies.style.display = 'flex';
}

// Este código muestra una ventana de cookies en la parte inferior de la pantalla, con un fondo semitransparente, un mensaje y un botón "Aceptar". Cuando el usuario hace clic en el botón "Aceptar", se guarda en el almacenamiento local del navegador que el usuario aceptó las cookies, y la ventana se oculta. Si el usuario ya ha aceptado las cookies previamente, la ventana no se muestra.

