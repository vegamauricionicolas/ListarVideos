<?php

include 'video.php';
$video = new video();

$tarea = "cero";
$id = 0;
$titulo = "";
$enlace = "";
$descripcion = "";
$user = 0;
$respuesta = "";

if(isset($_POST['videos'])){
    $tarea = $_POST['videos'];
}

if(isset($_POST['id'])){
    $id = (int) $_POST['id'];
}

if(isset($_POST['titulo'])){
    $titulo = $_POST['titulo'];
}

if(isset($_POST['enlace'])){
    $enlace = $_POST['enlace'];
}

if(isset($_POST['descripcion'])){
    $descripcion = $_POST['descripcion'];
}

if(isset($_POST['user'])){
    $user = (int) $_POST['user'];
}


$crear = ["titulo" => $titulo,"enlace" => $enlace,"descripcion" => $descripcion,"user" => $user];
$editar = ["idvideo" => $id,"titulo" => $titulo,"enlace" => $enlace,"descripcion" => $descripcion];
$gustar = ["id" => $id,"user" => $user];

switch ($tarea) 
    {
    case "cargar":
        $videoListar = $video->obtenerVideos();
        echo $videoListar;
        break;
    case "scroll":
        $videoListar = $video->obtenerVideosScroll();
        echo $videoListar;
        break;
    case "3":
        $videoListar = $video->eliminar($id);
        echo $videoListar;
        break;
    case "crear":
        $videoListar = $video->crear($crear);
        echo $videoListar;
        break;
    case "editar":
        $videoListar = $video->editar($editar);
        echo $videoListar;
        break;
    case "6":
        $videoListar = $video->obtenerVideoPorId($id);
        echo $videoListar;
        break;
    default:
        echo "esta regla es por defecto";
    }


?>