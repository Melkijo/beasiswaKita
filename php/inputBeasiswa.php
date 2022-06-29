<?php
    require_once("connect.php");
    if (isset($_POST['submitBeasiswa'])) {
        $namaBeasiswa = filter_input(INPUT_POST, 'namaBeasiswa');
        $penyelenggara = filter_input(INPUT_POST, 'namaPenyelenggara');
        $pendidikan =filter_input(INPUT_POST, 'pendidikanRegistrasi');
        $minat =filter_input(INPUT_POST, 'minatRegistrasi');
        
        $filename = $_FILES["gambar"]["name"];
        $tempname = $_FILES["gambar"]["tmp_name"];
        $folder = "/tubesWeb/img/" . $filename;
    
        $sql = "INSERT INTO beasiswalist (namaBeasiswa, penyelenggara, pendidikan, minat, gambar) 
        VALUES (:namaBeasiswa, :penyelenggara, :pendidikan, :minat, :gambar)";
        $stmt = $db->prepare($sql);
    
        // bind parameter ke query
        $params = array(
            ":namaBeasiswa" => $namaBeasiswa,
            ":penyelenggara" => $penyelenggara,
            ":pendidikan" => $pendidikan,
            ":minat" => $minat,
            ":gambar" => $filename
        );
        // eksekusi query untuk menyimpan ke database
        $saved = $stmt->execute($params);
    
        // jika query simpan berhasil, maka user sudah terdaftar
        // maka alihkan ke halaman login
        if ($saved) header("Location: /tubesWeb/admin/dashboardAdminBeasiswa.php");
    }


?>