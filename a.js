/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = cargarVideos;

function cargarVideos() {

    try {
        var formData = new FormData();
        formData.append('videos', 'cargar');

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
        console.log("MOSTRAR VIDEOS SCROLL");
        var videos = document.querySelector('#videosScroll');

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
