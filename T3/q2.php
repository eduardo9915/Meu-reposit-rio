<?php
    $name = "Paulo";
    $lastname = "Jesus";
    $fullname = $name . " " . $lastname;
    function concatenar(){
        global $fullname;
        echo("$fullname");
    }
    concatenar();
?>