// console.log('funcionando');

window.onload = permiso();

function permiso() {
    var rol = sessionStorage.getItem('rol');
    if (rol === '1') {
        cargarDatos();
    } else {
        document.location.href = "accesodenegado.php";
    }
}

function cargarDatos() {
    try {
        var formulario = document.getElementById('crear');

        formulario.innerHTML += `
            <h2>Crear nuevo enlace</h2>
            <form id="formulario">
                <label>Título</label>
                <input type="text" pattern="[A-Za-z0-9_-]{1,80}" name="titulo" placeholder="Título" class="form-control my-3" required="">
                <label>Enlace/url/Link</label>
                <input type="text" pattern="[A-Za-z0-9_-]{1,20}" name="enlace" placeholder="Enlace" class="form-control my-3" required="">
                <label>Descripción</label>
                <input type="text" pattern="[A-Za-z0-9_-]{1,200}" name="descripcion" placeholder="Descripción" class="form-control my-3" required="">
                <button class="btn btn-primary" type="submit">Enviar</button>
            </form>
            <div class="mt-3" id="respuesta">

            </div>
        `;
        crearVideo();
    } catch (error) {
        console.error(error);
    }
}

function crearVideo() {
    try {
        var formulario = document.getElementById('formulario');
        var respuesta = document.getElementById('respuesta');

        formulario.addEventListener('submit', function (e) {
            e.preventDefault();

            sessionStorage.setItem('user_id', 1);
            var user_id = sessionStorage.getItem('user_id');

            var datos = new FormData(formulario);
            datos.append('user', user_id);
            datos.append('videos', 'crear');

            /*console.log(datos.get('titulo'));
             console.log(datos.get('enlace'));
             console.log(datos.get('descripcion'));*/

            fetch('http://localhost/scroll/videoapi.php', {
                method: 'POST',
                body: datos
            })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data === 1) {
                            respuesta.innerHTML = `
                <div class="alert alert-primary" role="alert">
                    REGISTRO EXITOSO
                </div>
                `;
                        } else {
                            respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ERROR AL REGISTRAR
                </div>
                `;
                        }
                    });
        });
    } catch (error) {
        console.error(error);
    }
}