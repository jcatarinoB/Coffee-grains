function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Aquí puedes agregar la lógica para autenticar al usuario.
        // Por ejemplo, enviar los datos a un servidor:
        // fetch('/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ username: username, password: password })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         // Redirigir al usuario a la página principal
        //         window.location.href = '/dashboard';
        //     } else {
        //         // Mostrar un mensaje de error
        //         errorMessage.innerText = 'Usuario o contraseña incorrectos.';
        //         errorMessage.style.display = 'block';
        //     }
        // });
        alert('Inicio de sesión exitoso'); // Simulación de inicio de sesión exitoso
    }
}