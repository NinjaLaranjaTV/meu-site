<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST["message"];
    $to_email = "rafaelgame93@gmail.com";
    $from_email = "4959f76836@fireboxmail.lol";
    $subject = "Nova postagem";

    $headers = "From: " . $from_email . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    if (mail($to_email, $subject, $message, $headers)) {
        echo "Postagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a postagem.";
    }
}
?>
