/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = permiso();

function permiso(){
    var rol = sessionStorage.getItem('rol');
    if(rol === '2'){
        cargarVideos();
    }else{
        document.location.href = "index.php";
    }
}
function cargarVideos() {
    try {
        var formData = new FormData();
        formData.append('videos', 'cargar');
        //el ID que envio aca abajo es el del USUARIO que voy a cargar los videos
        formData.append('id', 1);

        fetch('http://localhost/scroll/videoapi.php', {
            method: 'POST',
            body: formData
        })
                .then(datos => datos.json())
                .then(datos => {
                    mostrarVideos(datos);
                });
    } catch (error) {
        console.error(error);
    }
}

function mostrarVideos(datos) {
    try {
        var videos = document.querySelector('#videos');

        videos.innerHTML = '';

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
                    <button id="${video.id}" onclick="editar(this.id);" type="button" class="btn btn-primary">Editar</button>
                    <button id="${video.id}" onclick="eliminar(this.id);" type="button" class="btn btn-danger">Eliminar</button>
                    <h4>
                        ${video.titulo}
                    </h4>
                    <h5>${video.descripcion}</h5>
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
            masVideosScroll();
        }
    } catch (error) {
        console.error(error);
    }
});


function masVideosScroll() {
    try {
        var formData = new FormData();
        formData.append('videos', 'scroll');
        formData.append('id', 1);

        fetch('http://localhost/scroll/videoapi.php', {
            method: 'POST',
            body: formData
        })
                .then(datos => datos.json())
                .then(datos => {
                    mostrarVideosScroll(datos);
                });
    } catch (error) {
        console.error(error);
    }
}

function mostrarVideosScroll(datos) {
    try {
        var videos = document.querySelector('#videosScroll');
        var titulo = "Milagro";
        var descripcion = "Lo sobrenatural de Dios";

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
                    <button id="${video.id}" onclick="editar(this.id);" type="button" class="btn btn-primary">Editar</button>
                    <button id="${video.id}" onclick="eliminar(this.id);" type="button" class="btn btn-danger">Eliminar</button>
                    <h4>
                        ${titulo}
                    </h4>
                    <h5>${descripcion}</h5>
                </div>
        `;
        }
    } catch (error) {
        console.error(error);
    }
}


function editar(id) {
    try {
        sessionStorage.setItem('id', id);
        document.location.href = "editarvideo.php";
    } catch (error) {
        console.error(error);
    }
}

function eliminar(id) {
    try {
        var f = new FormData();
        f.append('videos', 3);
        f.append('id', id);

        fetch('http://localhost/scroll/videoapi.php', {
            method: 'POST',
            body: f
        })
                .then(datos => datos.json())
                .then(datos => {
                    if (datos === 1) {
                        cargarVideos();
                    } else {
                        console.log("NO SE PUDO ELIMINAR");
                    }

                });
    } catch (error) {
        console.error(error);
    }

}
