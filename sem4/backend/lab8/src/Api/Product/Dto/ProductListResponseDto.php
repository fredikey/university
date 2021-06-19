<?php

declare(strict_types=1);

namespace App\Api\Product\Dto;

class ProductListResponseDto
{
    public array $data;

    public function __construct(ProductResponseDto ... $data)
    {
        $this->data = $data;
    }
}
