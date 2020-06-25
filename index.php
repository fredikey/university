<?php
require $_SERVER['DOCUMENT_ROOT'] . '/kozodaev-php-exam/config/database.php';

use App\UsersController;
use App\ExpertSession;

if ($post) {
    if (isset($_POST['create'])) {
        $expert_session = ExpertSession::create(['title' => $_POST['title']]); //Создаем экспертную сессию
        header('Location: /kozodaev-php-exam/sessions?session_id=' . $expert_session->id); //Сразу кидаем на её страницу
    }
}

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--	Add bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <!--	Custom styles -->
    <link rel="stylesheet" href="./styles/main.css">
    <title>Exam</title>
</head>
<body>
<!-- Header with Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
		<span class="logo">
			Лого
		</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="index.php">Главная</a>
                </li>
                <?php if (UsersController::isLogin()) { ?>
                    <li class="nav-login">
                        <span class="nav-login-label">Привет, <b><?= $_SESSION['user']->login; ?></b></span>
                        <a href="logout.php" class="btn nav-logout-btn">Выход</a>
                    </li>
                <?php } else { ?>
                    <li class="nav-item">
                        <a class="nav-link" href="signup.php">Регистрация</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="login.php">Войти</a>
                    </li>
                <?php } ?>
            </ul>
        </div>
    </div>
</nav>
<!-- create  -->
<main class="main main__form container">
    <?php if (UsersController::isLogin()) { ?>
        <h3 class="modal-title mt-5 mb-4">Создание экспертной сессии</h3>
        <form
                method="post"
                name="create-form"
                id="create-form"
        >
            <div class="form-group">
                <label for="session-title" class="col-form-label">Название:</label>
                <input name="title" required type="text" class="form-control" id="session-title">
            </div>
            <button name="create" class="btn btn-primary w-100">Создать</button>
        </form>
        <br>
        <h3 class="modal-title mt-5 mb-4">Мои сессии</h3>
        <div class="container">
            <?php foreach ($_SESSION['user']->ExpertSessions as $expert_session) { ?>
                <div class="row">
                    <div class="col-9"><h3><?= $expert_session->title; ?></h3></div>
                    <div class="col-3">
                        <a class="btn btn-primary w-100" href="/kozodaev-php-exam/session?session_id=<?= $expert_session->id; ?>">Перейти</a>
                    </div>
                </div>
            <?php } ?>
        </div>
    <?php } ?>
</main>
<footer class="container-fluid footer">
    <p class="footer-item lead">
        Козодаев Виктор Сергеевич
    </p>
    <p class="footer-item lead">
        191-321
    </p>
    <p class="footer-item lead">
        25.06.2020
    </p>
    <p class="footer-item lead">
        <a href="https://vk.com/fredikey">VK</a>
    </p>
</footer>
<!-- bootstrap scripts-->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
