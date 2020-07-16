/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = permiso();

function permiso(){
    var rol = sessionStorage.getItem('rol');
    if(rol === '2'){
        cargarDatos();
    }else{
        document.location.href = "accesodenegado.php";
    }
}
function cargarDatos() {
    try {
        var id = sessionStorage.getItem('id');
        console.log("CARGAR DATOS");
        console.log(id);
        var formData = new FormData();
        formData.append('id', id);
        formData.append('videos', '6');

        fetch('http://localhost/scroll/videoapi.php', {
            method: 'POST',
            body: formData
        })
                .then(datos => datos.json())
                .then(datos => {
                    console.log("DATOS RECIBIDOS");
                    console.log(datos);
                    var videos = document.getElementById('editar');

                    for (let video of datos) {
                        videos.innerHTML += `
    
                <div class="col-lg-4 col-md-6 mb-4 my-5">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/${video.url}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        >
                    </iframe>
                </div>
            <form id="formulario">
                <label>Título</label>
                <input type="text" pattern="[A-Za-z0-9_-]{1,80}" name="titulo" value="${video.titulo}" placeholder="Título" class="form-control my-3">
                <label>Enlace/url/Link</label>
                <input type="text" pattern="[A-Za-z0-9_-]{1,20}" name="enlace" value="https://www.youtube.com/watch?v=${video.url}" placeholder="Enlace" class="form-control my-3">
                <label>Descripción</label>
                <input type="text" pattern="[A-Za-z0-9_-]{1,200}" name="descripcion" value="${video.descripcion}" placeholder="Descripción" class="form-control my-3">
                <input type="number" name="id" value="${video.id}">
                <button id="boton" class="btn btn-primary" type="submit">Enviar</button>
            </form>    
        `;
                    }
                });
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

            datos.append('videos', 'editar');


            console.log("DATOS DEL FORMULARIO");
            console.log(datos.get('titulo'));
            console.log(datos.get('enlace'));
            console.log(datos.get('descripcion'));
            console.log(datos.get('id'));
            console.log(datos.get('videos'));
            /*console.log(datos.get('titulo'));
             console.log(datos.get('enlace'));
             console.log(datos.get('descripcion'));*/

            fetch('http://localhost/scroll/videoapi.php', {
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
                    EDICIÓN EXITOSA
                </div>
                `;
                        } else {
                            respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    ERROR AL EDITAR
                </div>
                `;
                        }
                    });
        });
    } catch (error) {
        console.error(error);
    }
}