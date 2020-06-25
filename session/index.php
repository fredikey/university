<?php

require $_SERVER['DOCUMENT_ROOT'] . '/kozodaev-php-exam/config/database.php';

use App\ExpertSession;
use App\ExpertSessionLink;
use App\ExpertSessionAnswer;

$expert_session_link = ExpertSessionLink::where('random_id', $_GET['random_id'])->firstOrFail();

$expert_session = ExpertSession::FindOrFail($expert_session_link->expert_session_id); //Не нашло сессию? уйди отсюда

if ($post) {
    if (isset($_POST['fill'])) {
        unset($_POST['fill']);
        ExpertSessionAnswer::create(['answer_json' => json_encode($_POST), 'author_ip' =>$_SERVER['REMOTE_ADDR'],'expert_session_link_id' => $expert_session_link->id]);
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
    <link rel="stylesheet" href="../styles/main.css">
    <title>Exam</title>
</head>
<body>
<!-- Header with Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
		<img src="https://fit.mospolytech.ru/assets/img/logo.svg" alt="logo" class="logo">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="../index.php">Главная</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../signup.php">Регистрация</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../login.php">Войти</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!-- content -->
<main class="main main__form container">
    <h1 class="mt-4">
        <?= $expert_session->title; ?>
    </h1>
    <form method="post">
        <?php
        $question_number = 0;
        foreach ($expert_session->questions as $expert_session_question) {
            $options = explode(',', $expert_session_question->options);
            ?>
            <h3 class="mt-3"><?= $question_number+1; ?>. <?= $expert_session_question->title; ?></h3>
            <?php switch ($expert_session_question->type) {
                case 1: ?>
                    <!--	case 1 -->
                    <label class="form-group">
                        <span class="col-form-label">Ответ:</span>
                        <input placeholder="Введите сюда число" name="answer[<?= $question_number; ?>]" required type="number" class="form-control mt-2">
                    </label>
                    <?php
                    break;
                case 2: ?>
                    <!--	case 2 -->
                    <label class="form-group">
                        <span class="col-form-label mb-2">Ответ:</span>
                        <input placeholder="Введите сюда положительное число" name="answer[<?= $question_number; ?>]" required type="number" min="0" class="form-control mt-2">
                    </label>
                    <?php
                    break;
                case 3: ?>
                    <!--	case 3 -->
                    <label class="form-group">
                        <span class="col-form-label mb-2">Ответ:</span>
                        <input placeholder="Введите сюда cтроку" name="answer[<?= $question_number; ?>]" required type="text" minlength="1" maxlength="30" class="form-control mt-2">
                    </label>
                    <?php
                    break;
                case 4: ?>
                    <!--	case 4 -->
                    <label class="form-group">
                        <span class="col-form-label mb-2">Ответ:</span>
                        <textarea placeholder="Введите сюда текст" rows="3" name="answer[<?= $question_number; ?>]" required minlength="1" maxlength="255" class="form-control mt-2"></textarea>
                    </label>
                    <?php
                    break;
                case 5: ?>
                    <!--	case 5 -->
                    <label class="form-group">
                        <span class="col-form-label mb-2">Ответ:</span>
                        <select name="answer[<?= $question_number; ?>][]" class="form-control mt-2" required>
                            <?php foreach ($options as $option) {
                                $option_title_and_value = explode('=', $option);
                                ?>
                                <option value="<?= $option_title_and_value[0]; ?>"><?= $option_title_and_value[0]; ?></option>
                            <?php } ?>
                        </select>
                    </label>
                    <?php
                    break;
                case 6: ?>
                    <!--	case 6 -->
                    <label class="form-group">
                        <span class="col-form-label mb-2">Ответ:</span>
                        <select name="answer[<?= $question_number; ?>][]" class="form-control mt-2" required multiple>
                            <?php foreach ($options as $option) {
                                $option_title_and_value = explode('=', $option);
                                ?>
                                <option value="<?= $option_title_and_value[1]; ?>"><?= $option_title_and_value[0]; ?></option>
                            <?php } ?>
                        </select>
                    </label>
                    <?php
                    break;
            }
            $question_number++;
        } ?>
        <button name="fill" class="btn btn-primary w-100">Заполнить</button>
    </form>
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

