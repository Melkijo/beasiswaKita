<?php
    $db = mysqli_connect("localhost", "root", "", "beasiswaKita");
?>
<html>

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BeasiswaKita - Beasiswa</title>
    <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googlrapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&family=Press+Start+2P&display=swap"
        rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous" />
    <link rel="stylesheet" href="css/styles.css" />
</head>

<body>
    <!-- Navbar-->
    <div class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid navbar-margin">
          <a class="navbar-brand" href="/tubesWeb/index.html">
            <img src="img/logo.png" alt="" width="75%" class="d-inline-block align-text-top">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="/tubesWeb/index.html">Utama</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/tubesWeb/tentang/tentang.html">Tentang</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/tubesWeb/Berita/index.hphp">Berita</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="index.php">Beasiswa</a>
              </li>
              <li class="nav-item">
                <a href="/tubesWeb/login.html">
                  <button type="button" class="btn btn-primary btn-custom">Daftar</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    <!-- Gambar -->
    <div class="container-fluid">
        <div class="beasiswa-header-img">
            <img src="img/Mask group.png" style=" width: 100%" />
        </div>
    </div>
    <div class="judul-beasiswa">
        <h3 class="pinggir">Terkini</h3>
    </div>

    <!-- Beasiswa Section -->
    <div class="beasiswa-section">
        <div class="row mb-3 mr-0">
        <?php
            $query = " select * from beasiswalist ";
            $result = mysqli_query($db, $query);
 
            while ($data = mysqli_fetch_assoc($result)) {
        ?>
                <div class="col-lg-3 mb-4">
                    <a href="">
                        <div class="rekomendasi-beasiswa1">
                            <img class="rekomendasi-beasiswa-img" src="/tubesWeb/admin/img/<?php echo $data['gambar']; ?>">
                        </div>
                    </a>
                </div>
            <?php
                }
            ?>
        </div>
    </div>

    <!--Footer Section-->
    <div class="footer-section">
        <div class="row">
            <div class="col-lg-6">
                <a class="navbar-brand" href="#">
                    <img class="footer-logo" src="img/logo2.png" alt="">
                </a>
                <p>Pemerataan Informasi Beasiswa</p>
            </div>
            <div class="col-lg-3">
                <h5 class="footer-title">Navigasi</h5>
                <a href="/index.html" style="text-decoration: none; color: white;">
                    <div class="navigasi-item">- Utama</div>                    
                </a>
                <a href="/tentang/tentang.html" style="text-decoration: none; color: white;">
                <div class="navigasi-item">- Tentang</div>
                </a>
                <a href="/berita/index.html" style="text-decoration: none; color: white;">
                <div class="navigasi-item">- Berita</div>
                </a>
                <a href="index.html" style="text-decoration: none; color: white;">
                <div class="navigasi-item">- Beasiswa</div>
                </a>
            </div>
            <div class="col-lg-3">
                <h5 class="footer-title">Ikuti Kami</h5>
                <div class="row">
                    <div class="col-lg-3">
                        <img class="footer-icon" src="img/footer-icon1.png" alt="">
                    </div>
                    <div class="col-lg-3">
                        <img class="footer-icon" src="img/footer-icon2.png" alt="">
                    </div>
                    <div class="col-lg-3">
                        <img class="footer-icon" src="img/footer-icon3.png" alt="">
                    </div>
                    <div class="col-lg-3">
                        <img class="footer-icon" src="img/footer-icon4.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Copyright-->
    <div class="copyright">
        <div class="divider mx-auto"></div>
        <p class="copyright-text">Copyright @2022 by BeasiswaKita</p>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
        integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js"
        integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous">
    </script>
    <script src="index.js"></script>
</body>

</html>