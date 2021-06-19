<?php

declare(strict_types=1);

namespace App\Api\Product\Factory;

use App\Api\Product\Dto\ProductResponseDto;
use App\Core\Product\Document\Product;

class ResponseFactory
{
    /**
     * @param Product         $product

     * @return ProductResponseDto
     */
    public function createProductResponse(Product $product): ProductResponseDto
    {
        $dto = new ProductResponseDto();

        $dto->id          = $product->getId();
        $dto->title       = $product->getTitle();
        $dto->description = $product->getDescription();
        $dto->price       = $product->getPrice();
        $dto->place_date  = $product->getPlaceDate();
        $dto->category    = $product->getCategory();
        $dto->city        = $product->getCity();
        $dto->type        = $product->getType();

        return $dto;
    }

}
