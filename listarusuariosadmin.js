/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = permiso();

function permiso(){
    var rol = sessionStorage.getItem('rol');
    if(rol === '1'){
        cargarUsuarios();
    }else{
        document.location.href = "accesodenegado.php";
    }
}
function cargarUsuarios() {
    try {
        var formData = new FormData();
        formData.append('tarea', 'cargar');
        //el ID que envio aca abajo es el del USUARIO que voy a cargar los videos
        

        fetch('http://localhost/scroll/usuarioapi.php', {
            method: 'POST',
            body: formData
        })
                .then(datos => datos.json())
                .then(datos => {
                    mostrarUsuarios(datos);
                });
    } catch (error) {
        console.error(error);
    }
}

function mostrarUsuarios(datos) {
    try {
        var usuarios = document.getElementById('usuarios');

        usuarios.innerHTML = '';

        for (let usuario of datos) {
            //console.log(video.url);
            usuarios.innerHTML += `
                <div class="col-lg-4 col-md-6 mb-4 my-5">
                    <h3>${usuario.nombre}</h3>
                    <h3>${usuario.email}</h3>
                    <h3>${usuario.creador}</h3>
                    <button id="${usuario.id}" onclick="editar(this.id);" type="button" class="btn btn-primary">Editar</button>
                    <button id="${usuario.id}" onclick="eliminar(this.id);" type="button" class="btn btn-danger">Eliminar</button>
                </div>                
        `;
        }
    } catch (error) {
        console.error(error);
    }
}


window.addEventListener('scroll', () => {
    try {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
            masUsuariosScroll();
        }
    } catch (error) {
        console.error(error);
    }
});


function masUsuariosScroll() {
    try {
        var formData = new FormData();
        formData.append('tarea', 'scroll');

        fetch('http://localhost/scroll/usuarioapi.php', {
            method: 'POST',
            body: formData
        })
                .then(datos => datos.json())
                .then(datos => {
                    mostrarUsuariosScroll(datos);
                });
    } catch (error) {
        console.error(error);
    }
}

function mostrarUsuariosScroll(datos) {
    try {
        console.log("MOSTRAR VIDEOS SCROLL");
        var usuarios = document.getElementById('usuariosScroll');
        var titulo = "Milagro";
        var descripcion = "Lo sobrenatural de Dios";


        for (let usuario of datos) {
            usuarios.innerHTML += `
                <div class="col-lg-4 col-md-6 mb-4 my-5">
                    <h3>${usuario.nombre}</h3>
                    <h3>${usuario.email}</h3>
                    <h3>${usuario.creador}</h3>
                    <button id="${usuario.id}" onclick="editar(this.id);" type="button" class="btn btn-primary">Editar</button>
                    <button id="${usuario.id}" onclick="eliminar(this.id);" type="button" class="btn btn-danger">Eliminar</button>
                </div>
        `;
        }
    } catch (error) {
        console.error(error);
    }
}


function confirm(id) {
    console.log(id);
    //window.location.assign("http://localhost:8383/a/index.html/".id);
}

function editar(id) {
    try {
        console.log("LISTAR");
        console.log(id);
        sessionStorage.setItem('id', id);
        document.location.href = "editarvideo.php";
    } catch (error) {
        console.error(error);
    }
}

function eliminar(id) {
    try {
        console.log("Eliminar");
        console.log(id);
        //window.location.assign("http://localhost:8383/a/index.html/".id);

        var f = new FormData();
        console.log("DATOS DEL FORMULARIO");
        f.append('tarea', 'eliminar');
        f.append('id', id);
        console.log(f.get('id'));
        console.log(f.get('tarea'));

        fetch('http://localhost/scroll/usuarioapi.php', {
            method: 'POST',
            body: f
        })
                .then(datos => datos.json())
                .then(datos => {
                    console.log("Llegó este ID: ");
                    console.log(datos);

                    console.log("RESPUESTA");
                    console.log(datos);
                    if (datos === 1) {
                        console.log("REGISTRO ELIMINADO");
                        cargarVideos();
                    } else {
                        console.log("NO SE PUDO ELIMINAR");
                    }

                });
    } catch (error) {
        console.error(error);
    }

}