<?php

declare(strict_types=1);

namespace App\Core\Product\Factory;

use App\Core\Product\Document\Product;

class ProductFactory
{
    public function create(
        string $title,
        string $description,
        string $price,
        string $place_date,
        string $category,
        string $city,
        string $type
    ): Product {

        return new Product(
            $title,
            $description,
            $price,
            $place_date,
            $category,
            $city,
            $type
        );
    }

    public function update(
        string $title,
        string $description,
        string $price,
        string $place_date,
        string $category,
        string $city,
        string $type
    ): Product {

        return new Product(
            $title,
            $description,
            $price,
            $place_date,
            $category,
            $city,
            $type
        );
    }
}
