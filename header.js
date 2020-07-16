/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//cargo usuario y rol logueados
var usuario = sessionStorage.getItem('user');
var rol = sessionStorage.getItem('rol');
console.log("USUARIO ACTUAL");
console.log(usuario);
console.log(rol);



switch (rol) {
    case '1':
        console.log("CASE 1 ADMIN");
        var header = document.getElementById('header');
        header.innerHTML += `            
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="index.php">EMPRESA</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="miperfiladmin.php">${usuario}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="listarusuariosadmin.php">Listar Usuario</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="crearusuarioadmin.php">Crear Usuario</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="listarvideosadmin.php">Listar Videos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="crearvideoadmin.php">Crear Video</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="logout.php">Logout</a>
                    </li>        
                </ul>
            </div>
        </div>
    </nav>
        `;
        break;
    case '2':
        console.log("CASE 2 PRODUCTOR");
        var header = document.getElementById('header');
        header.innerHTML += `            
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="index.php">EMPRESA</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="miperfil.php">${usuario}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="crearvideo.php">Crear Video</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="listarvideos.php">Listar Videos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="logout.php">Logout</a>
                    </li>        
                </ul>
            </div>
        </div>
    </nav>
        `;
        break;
    default:
        console.log("CASE DEFECTO");
        var header = document.getElementById('header');
        header.innerHTML += `            
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="index.php">EMPRESA</a>
            <div class="" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="login.php">Login</a>
                    </li>          
                </ul>
            </div>
        </div>
    </nav>
        `;
}




