/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = permiso();

function permiso(){
    var rol = sessionStorage.getItem('rol');
    if(rol === '1'){
        cargarDatos();
    }else{
        document.location.href = "accesodenegado.php";
    }
}
function cargarDatos() {
    try {
        var videos = document.getElementById('crear');
        videos.innerHTML += `
            <form id="formulario">
                <label>Nombre de la iglesia</label>
                <input type="text" pattern="[A-Za-z0-9]{1,50}" name="nombre" value="" placeholder="" class="form-control my-3" required>
                <label>Correo Electrónico</label>
                <input type="email" pattern="[A-Za-z0-9_-]{1,20}" name="email" value="" placeholder="" class="form-control my-3" required>
                <label>Usuario</label>
                <input type="text" pattern="[A-Za-z]{1,20}" name="user" value="" placeholder="" class="form-control my-3" required>
                <label>Ingresar contraseña</label>
                <input type="password" pattern="[A-Za-z0-9]{1,20}" name="pass" value="" placeholder="" class="form-control my-3" required>
                <label>Ingresar contraseña nuevamente</label>
                <input type="password" pattern="[A-Za-z0-9]{1,20}" name="pass2" value="" placeholder="" class="form-control my-3" required>
                <button id="boton" class="btn btn-primary" type="submit">Enviar</button>
            </form>    
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
            datos.append('tarea', 'crear');
            datos.append('creador', 'mauricio');
            datos.append('rol', 'productor');
            console.log("DATOS DEL FORMULARIO");
            /*console.log(datos.get('nombre'));
            console.log(datos.get('email'));
            console.log(datos.get('user'));
            console.log(datos.get('pass'));
            console.log(datos.get('pass2'));
            console.log(datos.get('tarea'));
            console.log(datos.get('creador'));
            console.log(datos.get('rol'));*/
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
                        if (data === 1) {
                            respuesta.innerHTML = `
                <div class="alert alert-primary" role="alert">
                    CREACIÓN EXITOSA
                </div>
                `;
                        } else {
                            respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ERROR AL CREAR
                </div>
                `;
                        }
                    });
        });
    } catch (error) {
        console.error(error);
    }
}