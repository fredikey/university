<?php

declare(strict_types=1);

namespace App\Core\Product\Document;

use App\Core\Common\Document\AbstractDocument;
use App\Core\Product\Repository\ProductRepository;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document(repositoryClass=ProductRepository::class, collection="yo_product")
 */
class Product extends AbstractDocument
{
    /**
     * @MongoDB\Id
     */
    protected ?string $id;

    /**
     * @MongoDB\Field(type="string")
     */
    protected ?string $title;

    /**
     * @MongoDB\Field(type="string")
     */
    protected ?string $description;

    /**
     * @MongoDB\Field(type="string")
     */
    protected string $price;

    /**
     * @MongoDB\Field(type="string")
     */
    protected ?string $place_date;

    /**
     * @MongoDB\Field(type="string")
     */
    protected ?string $category;

    /**
     * @MongoDB\Field(type="string")
     */
    protected ?string $city;

    /**
     * @MongoDB\Field(type="string")
     */
    protected ?string $type;

    public function __construct(
        string $title,
        string $description,
        string $price,
        string $place_date,
        string $category,
        string $city,
        string $type
    ) {
        $this->title = $title;
        $this->description = $description;
        $this->price = $price;
        $this->place_date = $place_date;
        $this->category = $category;
        $this->city = $city;
        $this->type = $type;
    }


    public function getTitle(): ?string
    {
        return $this->title;
    }


    public function setTitle(?string $title): void
    {
        $this->title = $title;
    }


    public function getDescription(): ?string
    {
        return $this->description;
    }


    public function setDescription(?string $description): void
    {
        $this->description = $description;
    }


    public function getPrice(): string
    {
        return $this->price;
    }


    public function setPrice(string $price): void
    {
        $this->price = $price;
    }


    public function getPlaceDate(): ?string
    {
        return $this->place_date;
    }


    public function setPlaceDate(?string $place_date): void
    {
        $this->place_date = $place_date;
    }


    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(?string $category): void
    {
        $this->category = $category;
    }


    public function getCity(): ?string
    {
        return $this->city;
    }


    public function setCity(?string $city): void
    {
        $this->city = $city;
    }


    public function getType(): ?string
    {
        return $this->type;
    }


    public function setType(?string $type): void
    {
        $this->type = $type;
    }
}
