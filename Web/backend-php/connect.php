<?php
// cria conexão com banco de dados no phpmyadmin
if (!$connect = mysqli_connect('localhost', 'root', '', 'kyotomangas')) {
    echo "ERRO";
}

// configura a conecao no admin
mysqli_query($connect, "SET NAMES utf8");
