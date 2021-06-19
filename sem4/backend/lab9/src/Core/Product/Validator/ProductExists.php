<?php

declare(strict_types=1);

namespace App\Core\Product\Validator;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 */
class ProductExists extends Constraint
{
    public $message = 'Product already exists, id: {{ productId }}';

    public function getTargets()
    {
        return self::CLASS_CONSTRAINT;
    }
}
