<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BeasiswaKita - Event</title>
    <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&family=Press+Start+2P&display=swap"
        rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="css/stylesDashUser.css">
</head>
<body>

    <div class="navbar navbar-expand d-flex flex-column align-item-start" id="sidebar">
        <a href="index.html" class="navbar-brand text-light mt-2">
            <div >
                <img class="dashboard-logo" src="img/logo.png" alt="">
            </div>
        </a>
        
        <ul class="navbar-nav d-flex flex-column mt-5 w-100 dashboard-menu">
            <li>
                <h5>Menu</h5>
            </li>
            <li class="nav-item w-100 mb-2 ">
                <a href="dashboardUser.php" class="nav-link"> <img class="dashboard-user-icon"src="img/user-logo1.png" alt=""> Profil</a>
            </li>
            <li class="nav-item w-100 mb-2">
                <a href="dashboardBeasiswa.php" class="nav-link"><img class="dashboard-user-icon"src="img/user-logo2.png" alt="">Beasiswa</a>
            </li>
            <li class="nav-item w-100 mb-2">
                <a href="dashboardEvent.php" class="nav-link"><img class="dashboard-user-icon"src="img/user-logo3.png" alt="">Event</a>
            </li>
            <li class="nav-item w-100 mb-2">
                <a href="index.html" class="nav-link"><img class="dashboard-user-icon"src="img/user-logo4.png" alt="">Keluar</a>
            </li>
        </ul>
    </div>
    <div class="navbar2">
        <div class="d-flex justify-content-between">
            <div class="dashboard-title">
                <h2>Dashboard</h2>
            </div>
            
            <div class="dashboard-greet">
                <!-- <h5>Hello</h5> -->
            </div>
        </div>
    </div>

    <div class="dashboard-profile">
        <div class="dashboard-profile-title mb-3">
            <h5>Rekomendasi Event Untukmu</h5>
        </div>
        <div class="row">
            <div class="col-lg-3 mb-4">
                <a href="">
                    <div class="rekomendasi-beasiswa1">
                        <img class="rekomendasi-beasiswa-img"src="img/beasiswa1.png" alt="">
                    </div>
                </a>
            </div>
            <div class="col-lg-3 mb-4">
                <a href="">
                    <div class="rekomendasi-beasiswa2">
                        <img class="rekomendasi-beasiswa-img"src="img/beasiswa2.png" alt="">
                    </div>
                </a>
            </div>
            <div class="col-lg-3 mb-4">
                <a href="">
                    <div class="rekomendasi-beasiswa3">
                        <img class="rekomendasi-beasiswa-img"src="img/beasiswa3.png" alt="">
                    </div>
                </a>
            </div>
            <div class="col-lg-3 mb-4">
                <a href="">
                    <div class="rekomendasi-beasiswa4">
                        <img class="rekomendasi-beasiswa-img"src="img/beasiswa4.png" alt="">
                    </div>
                </a>
            </div>
            <div class="col-lg-3 mb-4">
                <a href="">
                    <div class="rekomendasi-beasiswa4">
                        <img class="rekomendasi-beasiswa-img"src="img/beasiswa5.png" alt="">
                    </div>
                </a>
            </div>

        </div>
    </div>



    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
        integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js"
        integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy"
        crossorigin="anonymous"></script>
    <script src="index.js"></script>
</body>
</html>