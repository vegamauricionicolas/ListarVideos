// console.log('funcionando');

window.onload = cargarDatos;
function cargarDatos() {
    try {
        var login = document.getElementById('login');

        login.innerHTML += `
            <h2>Identificarse</h2>
            <form id="formulario">
                <input type="text" pattern="[A-Za-z0-9]{1,10}" name="user" placeholder="Ingresa usuario" class="form-control my-3" required>
                <input type="password" pattern="[A-Za-z0-9]{1,20}" name="pass" placeholder="Ingresa contraseña" class="form-control my-3" required>
                <button class="btn btn-primary" type="submit">Enviar</button>
            </form>
            <div class="mt-3" id="respuesta">

            </div>
        `;
        enviarDatos();
    } catch (error) {
        console.error(error);
    }
}


function enviarDatos() {
    try {
        var formulario = document.getElementById('formulario');
        var respuesta = document.getElementById('respuesta');

        formulario.addEventListener('submit', function (e) {
            e.preventDefault();
            var datos = new FormData(formulario);

            datos.append('tarea', 'loguear');


            console.log("DATOS DEL FORMULARIO");
            console.log(datos.get('user'));
            console.log(datos.get('pass'));
            console.log(datos.get('tarea'));
            /*console.log(datos.get('titulo'));
             console.log(datos.get('enlace'));
             console.log(datos.get('descripcion'));*/

            fetch('http://localhost/scroll/usuarioapi.php', {
                method: 'POST',
                body: datos
            })
                    .then(res => res.json())
                    .then(data => {
                        console.log("RESPUESTA");
                        console.log(data);
                        switch (data) {
                            case 1:
                                console.log("ADMIN");
                                console.log(datos.get('user'));
                                sessionStorage.setItem('user', datos.get('user'));
                                sessionStorage.setItem('pass', datos.get('pass'));
                                sessionStorage.setItem('rol', 1);
                                document.location.href = "index.php";
                                respuesta.innerHTML = `
                            <div class="alert alert-primary" role="alert">
                                USUARIO  IDENTIFICADO
                            </div>
                                `;
                                break;
                            case 2:
                                sessionStorage.setItem('user', datos.get('user'));
                                sessionStorage.setItem('pass', datos.get('pass'));
                                sessionStorage.setItem('rol', 2);
                                document.location.href = "index.php";
                                respuesta.innerHTML = `
                            <div class="alert alert-primary" role="alert">
                                USUARIO  IDENTIFICADO
                            </div>
                                `;
                                break;
                            default:
                                respuesta.innerHTML = `
                            <div class="alert alert-danger" role="alert">
                                USUARIO O CONTRASEÑA INCORRECTOS
                            </div>
                                `;
                        }
                    });
        });
    } catch (error) {
        console.error(error);
    }
}