<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of usuario
 *
 * @author pepe
 */
class usuario {

    private $usuario;
    private $pass;

    function __construct() {
        
    }

    function login($loguear) {
        /* Esta funcion recibe el usuario y password para identificar
         * al usuario. En caso de que alguno de los datos no sea
         * correcto devuelve un mensaje de error, sino devuelve el
         * mensaje USUARIO IDENTIFICADO */
        include 'conexion.php';

        try {
            $db = new DB();
            $conexion = $db->conectar();

            $usuario = $loguear["user"];
            $pass = $loguear["pass"];

            $sentencia = "select rol from usuario where usuario = '$usuario' and pass = '$pass'";
            $resultado = mysqli_query($conexion, $sentencia);

            if ($resultado == true) {
                $fila = $resultado->fetch_assoc();
                $mensaje = $fila['rol'];
            } else {
                $mensaje = 0;
                return json_encode($mensaje);
            }

            switch ($mensaje) {
                case "admin":
                    $rol = 1;
                    return json_encode($rol);
                    break;
                case "productor":
                    $rol = 2;
                    return json_encode($rol);
                    break;
                default:
                    $rol = 0;
                    return json_encode($rol);
            }

            $db->desconectar($conexion);
            return json_encode($mensaje);
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }
    
    
    function crear($creariglesia) {
        include 'conexion.php';

        try {
            $db = new DB();
            $conexion = $db->conectar();

            $usuario = $creariglesia["user"];
            $pass = $creariglesia["pass"];
            $nombre = $creariglesia["nombre"];
            $email = $creariglesia["email"];
            $rol = $creariglesia["rol"];
            $creador = $creariglesia["creador"];

            $sentencia = "insert into usuario(usuario,pass,rol,nombre,email,creador) values('$usuario','$pass','$rol','$nombre','$email','$creador')";
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
    
    
    function obtenerUsuarios() {
        include 'conexion.php';

        try {
            $db = new DB();
            $conexion = $db->conectar();
            $sentencia = "select * from usuario limit 9";
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
    
    function obtenerMiPerfil($loguear) {
        include 'conexion.php';

        try {
            $db = new DB();
            $conexion = $db->conectar();

            $usuario = $loguear["user"];
            $pass = $loguear["pass"];

            $sentencia = "select * from usuario where usuario = '$usuario' and pass = '$pass'";
            $resultado = mysqli_query($conexion, $sentencia);

            $respuesta = array();
            if ($resultado == true) {
                $fila = $resultado->fetch_assoc();
                $respuesta[] = $fila;
                return json_encode($respuesta);
            } else {
                $mensajeError = 0;
                return json_encode($mensajeError);
            }

            $db->desconectar($conexion);
        } catch (Exception $e) {
            die($e->getMessage());
        }
    }
    
    function obtenerUsuariosScroll() {
        include 'conexion.php';

        try {
            $agregar = 2;
            $inicio = 10;
            $fin = $inicio + $agregar;
            $db = new DB();
            $conexion = $db->conectar();
            $sentencia = "select * from usuario limit 3";
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
