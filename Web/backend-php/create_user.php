<?php // realiza o page do usuario no banco de dados da plataforma.

require('connect.php'); // chama a conexão com bd
extract($_POST); // extrai os dados recebidos no http no metodo POST

//cadastra o usuario no banco
if(mysqli_query($connect, "INSERT INTO `users` (`id`, `nome`, `sobrenome`, `usuario`, `email`, `senha`, `consenha`) 
    VALUES (NULL, '$nome', '$sobrenome', '$user', '$email', '$senha', '$consenha');")){
    $msg = "Ohayo! bem vindo a Kyoto $user"; // se der certo retorna a mensagem de bem vindo
} else{
    $msg = "Erro ao virar hashira"; // caso algo de errado retorna isto
}


