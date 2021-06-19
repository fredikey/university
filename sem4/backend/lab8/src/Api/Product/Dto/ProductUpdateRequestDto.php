<?php

declare(strict_types=1);

namespace App\Api\Product\Dto;

use Symfony\Component\Validator\Constraints as Assert;

class ProductUpdateRequestDto
{
    /**
     * @Assert\Length(max=50)
     */
    public ?string $title = null;

    /**
     * @Assert\Length(max=500)
     */
    public ?string $description = null;

    /**
     * @Assert\Length(max=10)
     */
    public ?string $price = null;

    /**
     * @Assert\Length(max=10)
     */
    public ?string $place_date = null;

    /**
     * @Assert\Length(max=10)
     */
    public ?string $category = null;

    /**
     * @Assert\Length(max=20)
     */
    public ?string $city = null;

    /**
     * @Assert\Length(max=10)
     */
    public ?string $type = null;
}
