function verificarCredenciales() {

    let OK = document.getElementById

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validación email y contraseña
    if (email === "aast@gmail.com" && password === "123456") {
        // me salta el mensaje de exito con sweetAlert
        Swal.fire({
            icon: 'success',
            title: '¡Inicio de Sesión Exitoso!',
            text: 'Bienvenido, ' + email + '!',
            confirmButtonText: 'OK'
        }).then(function(){
            window.location.href = "menu.html";
       });
    } else {
        // me salta error con SweetAlert
        Swal.fire({
            icon: 'error',
            title: '¡Error de Inicio de Sesión!',
            text: 'Email o contraseña incorrectos. Por favor, inténtalo de nuevo.',
            confirmButtonText: 'OK'
        });
    }
}

function cerrarSesion(){
    document.getElementById('logoutBtn').addEventListener('click', function() {
        
        window.location.href = 'login.html';
    });
}

function redireccionIndex(){
    function redirectToPage() {
        window.location.href = "login.html";
    }
    document.getElementById("redirectionButton").addEventListener("click", redirectToPage);
}
