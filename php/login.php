<?php
require_once("connect.php");
if(isset($_POST['login'])){

    $email = filter_input(INPUT_POST, 'emailRegistrasi', FILTER_VALIDATE_EMAIL);
    $password = filter_input(INPUT_POST, 'passwordRegistrasi');
    
    $sql = "SELECT * FROM registrasi WHERE emailUser=:email";
    $stmt = $db->prepare($sql);
    $params = array(
        ":email" => $email
    );
    $stmt->execute($params);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if($user){
        if(password_verify($password, $user["passUser"])){
            // buat Session
            echo "yoh nyambung dia2";
            session_start();
            $_SESSION["user"] = $user;
            // login sukses, alihkan ke halaman timeline
            header("Location: timeline.php");
            exit();
        }
    }
    else{
        echo "<script>alert ('Akun tidak ditemukan');</script>";
        header("Location: /tubesWeb/login.php");
    }}
