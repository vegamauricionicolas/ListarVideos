<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of video
 *
 * @author Mauricio
 */
class video {

    private $archivo;
    private $titulo;
    private $descripcion;
    private $fecha;

    function __construct() {
        
    }

    function crear($crear) {
        /* Esta funcion recibe los datos necesarios para crear el contenido
          de un video, pero solo los textos */
        include 'conexion.php';

        try {
            $db = new DB();
            $conexion = $db->conectar();

            $titulo = $crear["titulo"];
            $enlace = $crear["enlace"];
            $descripcion = $crear["descripcion"];
            $usuario_id = $crear["user"];

            $sentencia = "insert into video(url,usuario_id,titulo,descripcion) values('$enlace',$usuario_id,'$titulo','$descripcion')";
            $resultado = mysqli_query($conexion, $sentencia);

            if ($resultado == TRUE) {
                $mensaje = 1;
            } else {
                $mensaje = 0;
            }

            $db->desconectar($conexion);
            return json_encode($mensaje);
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }

    function eliminar($idvideo) {
        /* Esta funcion recibe el ID de un video especifico y lo elimina junto
          junto con el contenido relacionado */
        include 'conexion.php';

        try {
            $db = new DB();
            $mensaje = 0;

            $id = $idvideo;
            $conexion = $db->conectar();
            $sentencia = "delete from video where id = $id";
            $resultado = mysqli_query($conexion, $sentencia);

            if ($resultado == TRUE) {
                $mensaje = 1;
            } else {
                $mensaje = 0;
            }

            $db->desconectar($conexion);
            return json_encode($mensaje);
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }

    function editar($editar) {
        /* Esta funcion edita todo lo relacionado con un video especifico, para
          lo cual recibe un array con los datos que puede modificar el usuario */
        include 'conexion.php';

        try {
            $db = new DB();
            $conexion = $db->conectar();

            $id = $editar["idvideo"];
            $url = $editar["enlace"];
            $titulo = $editar["titulo"];
            $descripcion = $editar["descripcion"];

            $sentencia = "UPDATE `video` SET `url`='$url', `titulo`='$titulo',`descripcion`='$descripcion' where id= $id";
            $resultado = mysqli_query($conexion, $sentencia);

            if ($resultado == true) {
                $mensaje = 1;
            } else {
                $mensaje = 0;
            }

            $db->desconectar($conexion);
            return json_encode($mensaje);
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }

    function obtenerVideos() {
        include 'conexion.php';

        try {
            $db = new DB();
            $conexion = $db->conectar();
            $sentencia = "select * from video limit 9";
            $resultado = mysqli_query($conexion, $sentencia);


            $videoArray = array();
            while ($registro = mysqli_fetch_assoc($resultado)) {
                $videoArray[] = $registro;
            }
            $db->desconectar($conexion);
            return json_encode($videoArray);
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }

    function obtenerVideosScroll() {
        include 'conexion.php';

        try {
            $agregar = 2;
            $inicio = 10;
            $fin = $inicio + $agregar;
            $db = new DB();
            $conexion = $db->conectar();
            $sentencia = "select * from video limit 3";
            $resultado = mysqli_query($conexion, $sentencia);


            $videoArray = array();
            while ($registro = mysqli_fetch_assoc($resultado)) {
                $videoArray[] = $registro;
            }
            $db->desconectar($conexion);
            return json_encode($videoArray);
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }

    function obtenerVideosPorUsuario($idUsuario) {
        /* aca obtenemos todos los videos de un usuario especifico, para
          lo cual necesitamos un IDUSUARIO especifico */
        $usuarioId = $idUsuario;
        include 'conexion.php';

        try {
            $db = new DB();
            $conexion = $db->conectar();
            $sentencia = "select * from video where usuario_id = '$usuarioId'";
            $resultado = mysqli_query($conexion, $sentencia);

            $videoArray = array();
            while ($registro = mysqli_fetch_assoc($resultado)) {
                $videoArray[] = $registro;
            }
            $db->desconectar($conexion);
            return json_encode($videoArray);
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }

    function obtenerVideoPorId($idvideo) {
        /* aca obtenemos un registro completo de un video específico, para
          lo cual necesitamos un ID de video especifico */
        $id = $idvideo;
        include 'conexion.php';

        try {
            $db = new DB();
            $conexion = $db->conectar();
            $sentencia = "select * from video where id = $id";
            $resultado = mysqli_query($conexion, $sentencia);

            $videoArray = array();
            while ($registro = mysqli_fetch_assoc($resultado)) {
                $videoArray[] = $registro;
            }
            $db->desconectar($conexion);
            return json_encode($videoArray);
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }
}
