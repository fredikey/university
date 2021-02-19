<?php
date_default_timezone_set('Europe/Moscow'); //На всякий случай
require $_SERVER['DOCUMENT_ROOT'] . '/kozodaev-php-exam/vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as Capsule;
use App\UsersController;
use App\User;

$capsule = new Capsule;

$capsule->addConnection([
    'driver' => 'mysql',
    'host' => 'localhost',
    'database' => 'php-exam',
    'username' => 'root',
    'password' => '',
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_general_ci',
    'prefix' => '',
]);

$capsule->setAsGlobal();

$capsule->bootEloquent();

$post = $_SERVER['REQUEST_METHOD'] === 'POST'; //Облегчение проверки $_POST

session_start();

if (UsersController::isLogin()) $_SESSION['user'] = User::find($_SESSION['user']->id); //Когда php не может найти класс пользователя

