<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>Conócenos</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="bootstrap.min.css" 
              integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
              crossorigin="anonymous">
        <script src="jquery-3.5.1.min.js"></script>
        <script src="bootstrap.min.js" 
                integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" 
        crossorigin="anonymous"></script>
        
    </head>
    <body class="container" id="">
        <div id="cabecera">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="index.php">cemiYa</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="index.php">Inicio
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="conocenos.php">
                                    Conócenos
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contacto.php">
                                    Contacto
                                </a>
                            </li>
                            <li class="nav-item">
                                <a id="usuario" class="nav-link" href="login.php">
                                    Identificarse
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="crearvideo.php">
                                    Nuevo enlace
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="editarvideo.php">
                                    Editar enlace
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="listarvideos.php">
                                    Listar videos
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <div id="videos" class="row my-5">

        </div>

        <div id="videosScroll" class="row">

        </div>
    </body>
</html>
