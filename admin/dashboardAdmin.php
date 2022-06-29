
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BeasiswaKita - Utama</title>
    <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&family=Press+Start+2P&display=swap"
        rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="/tubesWeb/css/stylesDashUser.css">
</head>
<body>

    <div class="navbar navbar-expand d-flex flex-column align-item-start" id="sidebar">
        <a href="/tubesWeb/index.html" class="navbar-brand text-light mt-2">
            <div >
                <img class="dashboard-logo" src="/tubesWeb/img/logo.png" alt="">
            </div>
        </a>
        
        <ul class="navbar-nav d-flex flex-column mt-5 w-100 dashboard-menu">
            <li>
                <h5>Menu</h5>
            </li>
            <li class="nav-item w-100 mb-2">
                <a href="dashboardAdmin.php" class="nav-link"> <img class="dashboard-user-icon"src="img/user-logo1.png" alt=""> Profil</a>
            </li>
            <li class="nav-item w-100 mb-2">
                <a href="dashboardAdminBeasiswa.php" class="nav-link"><img class="dashboard-user-icon"src="img/user-logo2.png" alt="">Beasiswa</a>
            </li>
            <li class="nav-item w-100 mb-2">
                <a href="dashboardAdminEvent.php" class="nav-link"><img class="dashboard-user-icon"src="img/user-logo3.png" alt="">Event</a>
            </li>
            <li class="nav-item w-100 mb-2">
                <a href="#" class="nav-link"><img class="dashboard-user-icon"src="img/user-logo4.png" alt="">Keluar</a>
            </li>
        </ul>
    </div>
    <div class="navbar2">
        <div class="d-flex justify-content-between">
            <div class="dashboard-title">
                <h2>Dashboard Admin</h2>
            </div>
            
            <div class="dashboard-greet">
                <h5>Hello Admin</h5>
            </div>
        </div>
    </div>

    <div class="dashboard-profile">
        <div class="dashboard-profile-title">
            <h5>Profile</h5>
        </div>
        <form action="">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Nama Lengkap</label>
                <input type="email" class="form-control" id="exampleInputEmail1">
            </div>
            <div class="row mb-3">
                <div class="col-lg-6">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1">
                </div>
                <div class="col-lg-6">
                    <label for="exampleInputEmail1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputEmail1">
                </div>
            </div>
        </form>
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