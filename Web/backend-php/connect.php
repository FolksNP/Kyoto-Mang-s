<?php

if (!$connect = mysqli_connect('localhost', 'root', '', 'kyotomangas')) {
    echo "ERRO";
}

mysqli_query($connect, "SET NAMES utf8");
