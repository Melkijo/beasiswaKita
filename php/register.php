<?php

require_once("connect.php");

if (isset($_POST['registrasi'])) {
    $name = filter_input(INPUT_POST, 'namaRegistrasi');
    $password = password_hash($_POST["passwordRegistrasi"], PASSWORD_DEFAULT);
    $email = filter_input(INPUT_POST, 'emailRegistrasi', FILTER_VALIDATE_EMAIL);
    $pendidikan =filter_input(INPUT_POST, 'pendidikanRegistrasi');
    $minat =filter_input(INPUT_POST, 'minatRegistrasi');

    $sql = "INSERT INTO registrasi (namaUser, emailUser, passUser, pendidikanUser, minatUser) 
    VALUES (:namaUser, :emailUser, :passUser, :pendidikanUser, :minatUser)";
    $stmt = $db->prepare($sql);
    $params = array(
        ":namaUser" => $name,
        ":passUser" => $password,
        ":emailUser" => $email,
        ":pendidikanUser" => $pendidikan,
        ":minatUser" => $minat
    );
    $saved = $stmt->execute($params);
    if ($saved) header("Location: /tubesWeb/login.html");
}
