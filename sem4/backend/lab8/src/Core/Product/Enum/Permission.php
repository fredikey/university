<?php

declare(strict_types=1);

namespace App\Core\Product\Enum;

use App\Core\Common\Enum\AbstractEnum;

class Permission extends AbstractEnum
{
    public const PRODUCT_SHOW           = 'ROLE_PRODUCT_SHOW';
    public const PRODUCT_INDEX          = 'ROLE_PRODUCT_INDEX';
    public const PRODUCT_CREATE         = 'ROLE_PRODUCT_CREATE';
    public const PRODUCT_UPDATE         = 'ROLE_PRODUCT_UPDATE';
    public const PRODUCT_DELETE         = 'ROLE_PRODUCT_DELETE';
    public const PRODUCT_VALIDATION     = 'ROLE_PRODUCT_VALIDATION';
}
