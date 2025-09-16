<?php
    $idade = 16;

    if ($idade > 17) {
        echo("Pode tirar a carteira de motorista");
    } else if ($idade === 17){
        echo("Calma, só mais um ano");
    } else {
        echo("Infelizmente você não pode tirar carteira ainda");
    }
?>