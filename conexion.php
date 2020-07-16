<?php

class DB {
    function __construct() {
        
    }

        function conectar() {
        $host = "localhost";
        $database = "cemiya";
        $usuario = "root";
        $password = "";

        $conexion = mysqli_connect($host, $usuario, $password, $database) 
                or die("No se ha podido conectar al servidor de Base de datos");

        if ($conexion) {
            
        } else {
            echo "CONEXIÓN FALLIDA";
        }
        return $conexion;
    }

    function desconectar($conexion) {
        mysqli_close($conexion);
    }

}

?>