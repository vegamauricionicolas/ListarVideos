<?php
include 'usuario.php';

$usuario = new usuario();

$tarea = "";
$nombre = "";
$email = "";
$user = "";
$pass = "";
$rol = "";
$hash = "";
$id = "";
$creador = "";
$respuesta = "";


if(isset($_POST['tarea'])){
    $tarea = $_POST['tarea'];
}

if(isset($_POST['nombre'])){
    $nombre = $_POST['nombre'];
}

if(isset($_POST['email'])){
    $email = $_POST['email'];
}

if(isset($_POST['user'])){
    $user = $_POST['user'];
}

if(isset($_POST['pass'])){
    $pass = $_POST['pass'];
}

if(isset($_POST['rol'])){
    $rol = $_POST['rol'];
}

if(isset($_POST['hash'])){
    $hash = $_POST['hash'];
}

if(isset($_POST['id'])){
    $id = $_POST['id'];
}

if(isset($_POST['creador'])){
    $creador = $_POST['creador'];
}


$loguear = ["user" => $user,"pass" => $pass];
$creariglesia = ["user" => $user,"pass" => $pass, "nombre" => $nombre, "email" => $email, "rol" => $rol, "creador" => $creador];

switch ($tarea) 
    {
    case "loguear":
        $respuesta = $usuario->login($loguear);
        echo $respuesta;
        break;
    case "crear":
        $respuesta = $usuario->crear($creariglesia);
        echo $respuesta;
        break;
    case "cargar":
        $respuesta = $usuario->obtenerUsuarios();
        echo $respuesta;
        break;
    case "cargarMiPerfil":
        $respuesta = $usuario->obtenerMiPerfil($loguear);
        echo $respuesta;
        break;
    case "scroll":
        $respuesta = $usuario->obtenerUsuariosScroll();
        echo $respuesta;
        break;
    default:
        echo "esta regla es por defecto";
    }
?>