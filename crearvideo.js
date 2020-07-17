window.onload = permiso();

function permiso() {
    var rol = sessionStorage.getItem('rol');
    if (rol === '2') {
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
                <input type="text" pattern="[A-Za-z0-9_-]{1,10}" name="enlace" placeholder="Enlace" class="form-control my-3" required="">
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

            sessionStorage.setItem('user_id', 2);
            var user_id = sessionStorage.getItem('user_id');

            var datos = new FormData(formulario);
            
            var cadena = datos.get('enlace');
            var enlaceFiltrado = filtrarEnlace(cadena);
            datos.set('enlace',enlaceFiltrado);
            
            datos.append('user', user_id);
            datos.append('videos', 'crear');

            fetch('http://localhost/scroll/videoapi.php', {
                method: 'POST',
                body: datos
            })
                    .then(res => res.json())
                    .then(data => {
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

function filtrarEnlace(cadena) {
    var ycomun = "https://www.youtube.com/watch?v=";
    var yembed = "https://www.youtube.com/embed/";
    var ycorto = "https://youtu.be/GBsCjdki22k";

    if (cadena.includes(ycomun) === true) {
        var nuevacadena = cadena.split('https://www.youtube.com/watch?v=');
        return nuevacadena[1];
    }
    if (cadena.includes(yembed) === true) {
        var nuevacadena = cadena.split('https://www.youtube.com/embed/');
        return nuevacadena[1];
    }
    if (cadena.includes(ycorto) === true) {
        var nuevacadena = cadena.split('https://youtu.be/');
        return nuevacadena[1];
    }
}
