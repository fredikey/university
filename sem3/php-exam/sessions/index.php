<?php

require $_SERVER['DOCUMENT_ROOT'] . '/kozodaev-php-exam/config/database.php';

use App\UsersController;

use App\ExpertSession;
use App\ExpertSessionQuestion;
use App\ExpertSessionLink;

$expert_session = ExpertSession::FindOrFail($_GET['session_id']); //Не нашло сессию? уйди отсюда

if ($post) {
    if (isset($_POST['add_question'])) {
        $options = json_decode($_POST['options'], 1);
        if (empty($_POST['title'])) $error = 'Вопрос не введен';
        if (empty($_POST['type'])) $error = 'Тип вопроса не выбран';
        if ($_POST['type'] == 5 and sizeof($options) < 2) $error = 'Минимум 2 варианта ответов';
        if ($_POST['type'] == 6 and sizeof($options) < 3) $error = 'Минимум 3 варианта ответов';
        if (empty($error)) {
            ExpertSessionQuestion::create(['title' => $_POST['title'], 'type' => $_POST['type'], 'options' => $_POST['options'], 'expert_session_id' => $expert_session->id]);
        }
    } elseif (isset($_POST['delete_question'])) {
        ExpertSessionQuestion::destroy($_POST['question_id']);
    } elseif (isset($_POST['add_link'])) {
        ExpertSessionLink::create(['random_id' => bin2hex(random_bytes(32)), 'expert_session_id' => $expert_session->id]);
    } elseif (isset($_POST['delete_link'])) {
        ExpertSessionLink::destroy($_POST['link_id']);
    } elseif (isset($_POST['close_session'])) {
        $expert_session->close();
    } elseif (isset($_POST['delete_session'])) {
        $expert_session->delete();
        header('Location: /kozodaev-php-exam');
    } else {
        if (empty($error)) header('Location: /kozodaev-php-exam/sessions?session_id=' . $expert_session->id); //Защита от повторной отправки формы
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
    <link rel="stylesheet" href="/kozodaev-php-exam/styles/main.css">
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
                    <a class="nav-link" href="/kozodaev-php-exam/">Главная</a>
                </li>
                <?php if (UsersController::isLogin()) { ?>
                    <li class="nav-login">
                        <span class="nav-login-label">Привет, <b><?= $_SESSION['user']->login; ?></b></span>
                        <a href="/kozodaev-php-exam/logout.php" class="btn nav-logout-btn">Выход</a>
                    </li>
                <?php } else { ?>
                    <li class="nav-item">
                        <a class="nav-link" href="/kozodaev-php-exam/signup.php">Регистрация</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/kozodaev-php-exam/login.php">Войти</a>
                    </li>
                <?php } ?>
            </ul>
        </div>
    </div>
</nav>
<!-- create  -->
<main class="main main__form container">
    <?php if (!empty($error)) { ?>
        <h3 class="text-danger"><?= $error; ?></h3>
    <?php } ?>
    <h3 class="modal-title mt-5 mb-4"><?= $expert_session->title; ?></h3>
    <p class="mb-2">
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#questions_collapse" aria-expanded="false" aria-controls="collapse">
            Вопросы
        </button>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#links_collapse" aria-expanded="false" aria-controls="collapse">
            Ссылки
        </button>
    </p>
    <div class="collapse" id="questions_collapse">
        <div class="card card-body">
            <div class="container">
                <?php
                $question_number = 1;
                foreach ($expert_session->questions as $expert_session_question) { ?>
                    <form method="post" class="link-item">
                        <input name="question_id" type="hidden" value="<?= $expert_session_question->id; ?>">
                        <h5><?= $question_number++; ?>. <?= $expert_session_question->title; ?></h5>
                        <?php if (!$expert_session->links) { ?>
                            <button name="delete_question" class="btn btn-outline-danger btn-sm">Удалить вопрос</button>
                        <?php } ?>
                    </form>
                <?php } ?>
            </div>
        </div>
    </div>
    <div class="collapse" id="links_collapse">
        <div class="card card-body">
            <div class="container">
                <?php
                $link_number = 1;
                foreach ($expert_session->links as $expert_session_link) { ?>
                    <form method="post" class="link-item">
                        <input name="link_id" type="hidden" value="<?= $expert_session_link->id; ?>">
                        <a class="link-item_label btn-sm" href="http://92.124.131.13/kozodaev-php-exam/session?random_id=<?= $expert_session_link->random_id; ?>">92.124.131.13/kozodaev-php-exam/session?random_id=<?= $expert_session_link->random_id; ?></a>
                        <a class="btn btn-primary btn-sm" href="/kozodaev-php-exam/answers?link_id=<?= $expert_session_link->id; ?>">Ответы</a>
                        <button name="delete_link" class="btn btn-outline-danger btn-sm">Удалить ссылку</button>
                    </form>
                <?php } ?>
            </div>
        </div>
    </div>
    <?php if (!$expert_session->links->count()) { ?>
        <h3 class="modal-title mt-4 mb-3">Создание вопроса</h3>
        <form
                method="post"
                name="create-form"
                id="create-form"
        >
            <div class="form-group">
                <label for="create-form-title" class="col-form-label">Вопрос:</label>
                <input placeholder="Введите вопрос" name="title" type="text" class="form-control" id="create-form-title">
            </div>
            <div class="form-group">
                <label for="question-type">Тип вопроса:</label>
                <select name="type" class="form-control" id="question-type">
                    <option value="1">
                        с открытым ответом (число) – ответ на вопрос предполагает ввод с клавиатуры
                        чисел;
                    </option>
                    <option value="2">
                        с открытым ответом (положительное число) – ответ на вопрос предполагает ввод с
                        клавиатуры положительных чисел, включая «0»;
                    </option>
                    <option value="3">
                        с открытым ответом (строка) – ответ на вопрос предполагает ввод с клавиатуры
                        текстовой информации от 1 до 30 символов;
                    </option>
                    <option value="4">
                        с открытым ответом (текст) – ответ на вопрос предполагает ввод с клавиатуры
                        текстовой информации от 1 до 255 символов;
                    </option>
                    <option value="5">
                        с единственным выбором – ответ на вопрос предполагает выбор одного варианта из
                        предложенных (количество вариантов в вопросе может быть любым, но не менее
                        2);
                    </option>
                    <option value="6">
                        с множественным выбором – ответ на вопрос предполагает выбор одного или
                        нескольких вариантов из предложенных (количество вариантов в вопросе может
                        быть любым, но не менее 3).
                    </option>
                </select>
            </div>
            <div class="mb-3 mt-3" id="options-list" style="display: none">
                <input id="options-value" name="options" type="text" style="display: none">
                <h6 class="mb-2" style="display: flex">Добавить варианты ответа:</h6>
                <ul id="options-render">
                </ul>
                <div class="form-group">
                    <div class="input-group mb-3">
                        <input id="options-input" type="text" class="form-control" placeholder="Введите текст" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    </div>
                    <span class="mb-2" style="display: flex">Кол-во баллов:</span>
                    <div class="input-group mb-3">
                        <input min="-100" max="100" value="50" id="options-points" type="number" class="form-control" placeholder="Кол-во баллов:" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button id="options-btn" class="btn btn-outline-secondary" type="button">Добавить</button>
                        </div>
                    </div>
                </div>
            </div>
            <button name="add_question" form="create-form" class="btn btn-primary w-100 mb-2">Добавить</button>
        </form>
    <?php } else { ?>
        <h2 class="text-danger" style="margin-top: 100px; margin-bottom: 100px;">Добавление / редактирование вопросов
            недоступно</h2>
    <?php } ?>
    <form method="post">
        <button name="add_link" type="submit" class="btn btn-primary w-100 mb-2">Новая ссылка</button>
        <?php if ($expert_session->is_open) { ?>
            <button name="close_session" type="submit" class="btn btn-danger w-100 mb-2">Закрыть сессию</button>
        <?php } else { ?>
            <h5 class="text-danger">Сессия закрыта</h5>
        <?php } ?>
        <button name="delete_session" type="submit" class="btn btn-danger w-100">Удалить</button>
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
        28.01.2021
    </p>
    <p class="footer-item lead">
        <a href="https://vk.com/fredikey">VK</a>
    </p>
</footer>
<!-- bootstrap scripts-->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script>
    const selectEl = document.getElementById('question-type')
    const optionsList = document.getElementById('options-list')
    selectEl.addEventListener('change', (event) => {
        const val = Number(event.target.value)
        console.log('render', val)
        if (val === 5 || val === 6) {
            optionsList.style.display = 'block'
        } else {
            optionsList.style.display = 'none'
        }
    })
    //    options logic
    const optionBtn = document.getElementById('options-btn')
    const optionRender = document.getElementById('options-render')
    const optionInput = document.getElementById('options-input')
    const optionPoints = document.getElementById('options-points')
    const optionValue = document.getElementById('options-value')

    let options = {}
    optionBtn.addEventListener('click', () => {
        const val = optionInput.value
        const points = Number(optionPoints.value)
        const el = document.createElement('li')
        el.classList.add('mb-2')
        el.textContent = val + `, Баллов: ${points}`
        const deleteOptionBtn = document.createElement('button')
        deleteOptionBtn.classList.add('btn', 'btn-outline-danger', 'btn-sm', 'float-right', 'ml-2')
        deleteOptionBtn.textContent = 'Удалить'
        deleteOptionBtn.type = 'button'
        el.appendChild(deleteOptionBtn)
        deleteOptionBtn.addEventListener('click', (event) => {
            // kostili
            const el = event.target.parentElement
            const val = el.innerText.split(',')[0]
            delete options[val];
            optionValue.value = JSON.stringify(options)
            el.remove()
            console.log(options, optionValue.value)
        })
        if (val && !isNaN(points) && points <= 100 && points >= -100) {
            el.classList.add('options-item')
            options[val] = points
            optionRender.appendChild(el)

        }
        // clear
        optionPoints.value = '50'
        optionInput.value = ''
        optionValue.value = JSON.stringify(options)
        console.log(options, optionValue.value)
    })
</script>
</body>
</html>


