<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $nome = "Paulo";
        $idade = 16;
        $nota = 9.5;
        $crente = true;
        $esportes = ["futebol", "vôlei", "corrida"];

        echo("<h1>Aleluia</h1>");
        echo("<br><h2>Variáveis</h2></br>");
        echo("
            <ul>
                <li>$nome</li>
                <li>$idade</li>
                <li>$nota</li>
                <li>$crente</li>
                " . "<li>". $esportes[2] . "</li>"
                . "</ul>");
    ?>
</body>
</html>