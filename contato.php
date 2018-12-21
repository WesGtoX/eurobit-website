<?php

    if(isset($_POST['email']) && !empty($_POST['email'])) {

        $nome = addslashes($_POST['name']);
        $phone = addslashes($_POST['phone']);
        $mail = addslashes($_POST['email']);
        $message = addslashes($_POST['message']);

        $to = "contato@eurobit.com.br";
        $subject = "Contato - Eurobit";
        $body = "Nome: ".$nome. "\n".
                "Telefone: ".$phone. "\n".
                "Email: ".$mail. "\n".
                "Mensagem: ".$message;
        $header = "From:news@eurobit.com.br"."\r\n".
                    "Reply-to:".$mail."\r\n".
                    "X=Mailer:PHP/".phpversion();

        if(mail($to,$subject,$body,$header)) {
            header("Location: ./index.html");
        } else {
            header("Location: ./index.html");
        }
    }

?>