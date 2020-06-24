<?php
date_default_timezone_set('Europe/Moscow'); //На всякий случай
require $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as Capsule;
use App\UsersController;
use App\User;

$capsule = new Capsule;

$capsule->addConnection([
    'driver' => 'mysql',
    'host' => 'std-mysql',
    'database' => 'std_919',
    'username' => 'std_919',
    'password' => 'rootroot',
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_general_ci',
    'prefix' => '',
]);

$capsule->setAsGlobal();

$capsule->bootEloquent();

$post = $_SERVER['REQUEST_METHOD'] === 'POST'; //Облегчение проверки $_POST

session_start();

if (UsersController::isLogin()) $_SESSION['logged_user'] = User::find($_SESSION['logged_user']->id); //Когда php не может найти класс пользователя

