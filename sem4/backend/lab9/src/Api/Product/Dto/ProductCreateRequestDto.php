<?php

declare(strict_types=1);

namespace App\Api\Product\Dto;

use Symfony\Component\Validator\Constraints as Assert;

class ProductCreateRequestDto
{
    /**
     * @Assert\Length(max=50)
     */
    public ?string $title;

    /**
     * @Assert\Length(max=500)
     */
    public ?string $description;

    /**
     * @Assert\Length(max=10)
     */
    public ?string $price;

    /**
     * @Assert\Length(max=10)
     */
    public ?string $place_date;

    /**
     * @Assert\Length(max=10)
     */
    public ?string $category;

    /**
     * @Assert\Length(max=20)
     */
    public ?string $city;

    /**
     * @Assert\Length(max=10)
     */
    public ?string $type;
}
