/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = permiso();

function permiso(){
    var rol = sessionStorage.getItem('rol');
    console.log("PERMISO rol");
    console.log(rol);
    if(rol === '1'){
        cargarMiPerfil();
    }else{
        document.location.href = "accesodenegado.php";
    }
}
function cargarMiPerfil() {
    try {
        var user = sessionStorage.getItem('user');
        var pass = sessionStorage.getItem('pass');
        var formData = new FormData();
        formData.append('tarea', 'cargarMiPerfil');
        formData.append('user', user);
        formData.append('pass', pass);
        //el ID que envio aca abajo es el del USUARIO que voy a cargar los videos
        

        fetch('http://localhost/scroll/usuarioapi.php', {
            method: 'POST',
            body: formData
        })
                .then(datos => datos.json())
                .then(datos => {
                    mostrarMiPerfil(datos);
                });
    } catch (error) {
        console.error(error);
    }
}

function mostrarMiPerfil(datos) {
    try {
        var miperfil = document.getElementById('miperfil');

        miperfil.innerHTML = '';

        for (let usuario of datos) {
            //console.log(video.url);
            miperfil.innerHTML += `
                <div class="col-lg-4 col-md-6 mb-4 my-5">
                    <h3>${usuario.nombre}</h3>
                    <h3>${usuario.email}</h3>
                    <h3>${usuario.rol}</h3>
                    <h3>${usuario.id}</h3>
                    <h3>${usuario.pass}</h3>
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