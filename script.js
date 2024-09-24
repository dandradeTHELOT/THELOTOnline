function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === "" || password === "") {
        errorMessage.textContent = "Todos los campos son obligatorios.";
        return false;
    }

    // Aquí podrías agregar más validaciones o hacer una llamada a la API de autenticación.
    errorMessage.textContent = ""; // Limpiar mensaje de error
    return true;
}
