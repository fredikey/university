<?php

declare(strict_types=1);

namespace App\Api\Product\Controller;

use App\Api\Product\Dto\ProductCreateRequestDto;
use App\Api\Product\Dto\ProductListResponseDto;
use App\Api\Product\Dto\ProductResponseDto;
use App\Api\Product\Dto\ProductUpdateRequestDto;
use App\Api\Product\Dto\ValidationExampleRequestDto;
use App\Core\Common\Dto\ValidationFailedResponse;
use App\Core\Product\Document\Product;
use App\Core\Product\Enum\Permission;
use App\Core\Product\Repository\ProductRepository;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\Annotations\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\ConstraintViolationListInterface;

/**
 * @Route("/products")
 */
class ProductController extends AbstractController
{
    /**
     * @Route(path="/{id<%app.mongo_id_regexp%>}", methods={"GET"})
     *
     * @IsGranted(Permission::PRODUCT_SHOW)
     *
     * @ParamConverter("product")
     *
     * @Rest\View()
     *
     * @param Product|null $product
     *
     * @return ProductResponseDto
     */
    public function show(Product $product = null)
    {
        if (!$product) {
            throw $this->createNotFoundException('Product not found');
        }

        return $this->createProductResponse($product);
    }

    /**
     * @Route(path="", methods={"GET"})
     * @IsGranted(Permission::PRODUCT_INDEX)
     * @Rest\View()
     *
     * @param ProductRepository $productRepository
     *
     * @return ProductListResponseDto|ValidationFailedResponse
     */
    public function index(
        ProductRepository $productRepository
    ): ProductListResponseDto {
        $products = $productRepository->findAll();

        return new ProductListResponseDto(
            ... array_map(
                    function (Product $product) {
                        return $this->createProductResponse($product, null);
                    },
                    $products
                )
        );
    }

    /**
     * @Route(path="", methods={"POST"})
     * @IsGranted(Permission::PRODUCT_CREATE)
     * @ParamConverter("requestDto", converter="fos_rest.request_body")
     *
     * @Rest\View(statusCode=201)
     *
     * @param ProductCreateRequestDto             $requestDto
     * @param ConstraintViolationListInterface $validationErrors
     * @param ProductRepository                   $productRepository
     *
     * @return ProductResponseDto|ValidationFailedResponse|Response
     */
    public function create(
        ProductCreateRequestDto $requestDto,
        ConstraintViolationListInterface $validationErrors,
        ProductRepository $productRepository
    ) {
        if ($validationErrors->count() > 0) {
            return new ValidationFailedResponse($validationErrors);
        }

        if ($product = $productRepository->findOneBy(['title' => $requestDto->title])) {
            return new Response('Product already exists', Response::HTTP_BAD_REQUEST);
        }

        $product = new Product(
            $requestDto->title,
            $requestDto->description,
            $requestDto->price,
            $requestDto->place_date,
            $requestDto->category,
            $requestDto->city,
            $requestDto->type
        );
        $product->setTitle($requestDto->title);
        $product->setDescription($requestDto->description);
        $product->setPrice($requestDto->price);
        $product->setPlaceDate($requestDto->place_date);
        $product->setCategory($requestDto->category);
        $product->setCity($requestDto->city);
        $product->setType($requestDto->type);

        $productRepository->save($product);

        return $this->createProductResponse($product, null);
    }

    /**
     * @Route(path="/{id<%app.mongo_id_regexp%>}", methods={"PUT"})
     * @IsGranted(Permission::PRODUCT_UPDATE)
     * @ParamConverter("requestDto", converter="fos_rest.request_body")
     *
     * @Rest\View()
     *
     * @param Product|null $product
     * @param ProductUpdateRequestDto $requestDto
     * @param ConstraintViolationListInterface $validationErrors
     * @param ProductRepository $productRepository
     *
     * @return ProductResponseDto|ValidationFailedResponse|Response
     */
    public function update(
        Product $product = null,
        ProductUpdateRequestDto $requestDto,
        ConstraintViolationListInterface $validationErrors,
        ProductRepository $productRepository
    ) {
        if (!$product) {
            throw $this->createNotFoundException('Product not found');
        }

        if ($validationErrors->count() > 0) {
            return new ValidationFailedResponse($validationErrors);
        }

        $product->setTitle($requestDto->title);
        $product->setDescription($requestDto->description);
        $product->setPrice($requestDto->price);
        $product->setPlaceDate($requestDto->place_date);
        $product->setCategory($requestDto->category);
        $product->setCity($requestDto->city);
        $product->setType($requestDto->type);

        $productRepository->save($product);

        return $this->createProductResponse($product);
    }

    /**
     * @Route(path="/{id<%app.mongo_id_regexp%>}", methods={"DELETE"})
     * @IsGranted(Permission::PRODUCT_DELETE)
     *
     * @Rest\View()
     *
     * @param Product|null      $product
     * @param ProductRepository $productRepository
     *
     * @return ProductResponseDto|ValidationFailedResponse
     */
    public function delete(
        ProductRepository $productRepository,
        Product $product = null
    ) {
        if (!$product) {
            throw $this->createNotFoundException('Product not found');
        }

        $productRepository->remove($product);
    }

    /**
     * @Route(path="/validation", methods={"POST"})
     * @IsGranted(Permission::PRODUCT_VALIDATION)
     * @ParamConverter("requestDto", converter="fos_rest.request_body")
     *
     * @Rest\View()
     *
     * @param ValidationExampleRequestDto $requestDto
     * @param ConstraintViolationListInterface $validationErrors
     */
    public function validation(
        ValidationExampleRequestDto $requestDto,
        ConstraintViolationListInterface $validationErrors
    ) {
        if ($validationErrors->count() > 0) {
            return new ValidationFailedResponse($validationErrors);
        }

        return $requestDto;
    }

    /**
     * @param Product         $product
     *
     * @return ProductResponseDto
     */
    private function createProductResponse(Product $product): ProductResponseDto
    {
        $dto = new ProductResponseDto();

        $dto->id                = $product->getId();
        $dto->title         = $product->getTitle();
        $dto->description          = $product->getDescription();
        $dto->price = $product->getPrice();
        $dto->place_date             = $product->getPlaceDate();
        $dto->category             = $product->getCategory();
        $dto->city             = $product->getCity();
        $dto->type            = $product->getType();

        return $dto;
    }
}
