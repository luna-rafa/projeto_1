<?php
// Dados do formulario
$name = $_POST['nome'];
$email= $_POST['email'];
$telefone = $_POST['telefone'];
$mensagem= $_POST['mensagem'];
 
$to = "yourEmail@gmail.com";
$subject = "This is the subject line";
 
// o seguinte texto será enviado
// Nome = nome do usuario
// Email = email do usuario
// Telefone = telefone do usuario
// Mensagem = mensagem do usuario
$txt ="Nome = ". $nome . "\r\n  Email = "
    . $email . "\r\n Telefone =" . $telefone ."\r\n Mensagem =" . $mensagem;
 
$headers = "From: noreply@demosite.com" . "\r\n" .
            "CC: somebodyelse@example.com";
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}
 
// Redirect to
header("Location:last.html");
?>