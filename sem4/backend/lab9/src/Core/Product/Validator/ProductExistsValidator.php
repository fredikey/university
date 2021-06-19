<?php

declare(strict_types=1);

namespace App\Core\Product\Validator;

use App\Core\Product\Service\ProductService;
use Symfony\Component\Security\Core\Exception\AuthenticationExpiredException;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;

class ProductExistsValidator extends ConstraintValidator
{
    /**
     * @var ProductService
     */
    private ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function validate($value, Constraint $constraint)
    {
        if (!$constraint instanceof ProductExists) {
            throw new UnexpectedTypeException($constraint, ProductExists::class);
        }

        $product = $this->productService->findOneBy(['title' => $value->title]);

        if ($product) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ productId }}', $product->getId())
                ->addViolation();
        }
    }
}
