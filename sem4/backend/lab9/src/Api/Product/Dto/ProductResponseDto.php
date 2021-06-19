<?php

declare(strict_types=1);

namespace App\Api\Product\Dto;


class ProductResponseDto
{
    public ?string $id;

    public ?string $title;

    public ?string $description;

    public ?string $price;

    public ?string $place_date;

    public ?string $category;

    public ?string $city;

    public ?string $type;
}
