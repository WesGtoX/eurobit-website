<?php

    if(isset($_POST['email']) && !empty($_POST['email'])) {

        $first_nome = addslashes($_POST['name']);
        $phone = addslashes($_POST['phone']);
        $mail = addslashes($_POST['email']);
        $message = addslashes($_POST['message']);

        $to = "barone@eurobit.com.br";
        $subject = "Contato - Vitam";
        $body = "Nome: ".$nome. "\n".
                "Telefone: ".$phone. "\n".
                "Email: ".$mail. "\n".
                "Mensagem".$message;
        $header = "From:contato@eurobit.com.br"."\r\n".
                    "Reply-to:".$mail."\r\n".
                    "X=Mailer:PHP/".phpversion();

        if(mail($to,$subject,$body,$header)) {
            echo("Email enviado com sucesso!");
        } else {
            echo("O Email não pode ser enviado");
        }
    }

?>