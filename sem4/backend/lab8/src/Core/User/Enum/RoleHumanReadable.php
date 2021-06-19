<?php

declare(strict_types=1);

namespace App\Core\User\Enum;

use App\Core\Common\Enum\AbstractEnum;

final class RoleHumanReadable extends AbstractEnum
{
    public const ADMIN = 'Администратор';
    public const USER  = 'Пользователь';
    public const OPERATOR  = 'Модератор';
    public const CONTENT_MANAGER  = 'Контент менеджер';
    public const HR  = 'Эйчар менеджер';
}
