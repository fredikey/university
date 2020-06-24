<?php

namespace App;

class UsersController
{
    public static function login($login, $password): ?string
    {
        global $roles;
        $user = User::where('login', '=', $login)->first();
        if (!$user) return 'Пользователь не найден';
        if (!password_verify($password, $user->password)) return 'Неверный пароль';
        $_SESSION['logged_user'] = $user;
        return null;
    }

    public static function logout(): void
    {
        session_destroy();
        header('Location: /');
    }

    public static function isLogin(): bool
    {
        if (!isset($_SESSION['logged_user'])) return false;
        return ($_SESSION['logged_user'] instanceof User);
    }
}