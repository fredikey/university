<?php

declare(strict_types=1);

namespace App\Core\Product\Service;

use App\Api\Product\Dto\ProductCreateRequestDto;
use App\Api\Product\Dto\ProductUpdateRequestDto;
use App\Core\Product\Document\Product;
use App\Core\Product\Factory\ProductFactory;
use App\Core\Product\Repository\ProductRepository;

class ProductService
{
    /**
     * @var ProductRepository
     */
    private ProductRepository $productRepository;

    /**
     * @var ProductFactory
     */
    private ProductFactory $productFactory;

    public function __construct(
        ProductRepository $productRepository,
        ProductFactory $productFactory
    ) {
        $this->productRepository = $productRepository;
        $this->productFactory    = $productFactory;
    }

    public function findOneBy(array $criteria): ?Product
    {
        return $this->productRepository->findOneBy($criteria);
    }

    public function updateProduct(ProductUpdateRequestDto $requestDto)
    {
        $product = $this->productFactory->update(
            $requestDto->title,
            $requestDto->description,
            $requestDto->price,
            $requestDto->place_date,
            $requestDto->category,
            $requestDto->city,
            $requestDto->type,
        );

        $product->setTitle($requestDto->title);
        $product->setDescription($requestDto->description);
        $product->setPrice($requestDto->price);
        $product->setPlaceDate($requestDto->place_date);
        $product->setCategory($requestDto->category);
        $product->setCity($requestDto->city);
        $product->setType($requestDto->type);

        $product = $this->productRepository->save($product);

        return $product;
    }

    public function createProduct(ProductCreateRequestDto $requestDto): Product
    {
        $product = $this->productFactory->create(
            $requestDto->title,
            $requestDto->description,
            $requestDto->price,
            $requestDto->place_date,
            $requestDto->category,
            $requestDto->city,
            $requestDto->type,
        );

        $product->setTitle($requestDto->title);
        $product->setDescription($requestDto->description);
        $product->setPrice($requestDto->price);
        $product->setPlaceDate($requestDto->place_date);
        $product->setCategory($requestDto->category);
        $product->setCity($requestDto->city);
        $product->setType($requestDto->type);

        $product = $this->productRepository->save($product);

        return $product;
    }
}
