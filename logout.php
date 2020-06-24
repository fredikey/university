<?php
require $_SERVER['DOCUMENT_ROOT'] . '/kozodaev-php-exam/config/database.php';

use App\UsersController;

UsersController::logout();
