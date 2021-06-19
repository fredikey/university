<?php

declare(strict_types=1);

namespace App\Api\Product\Controller;

use App\Api\Product\Dto\ProductCreateRequestDto;
use App\Api\Product\Dto\ProductListResponseDto;
use App\Api\Product\Dto\ProductResponseDto;
use App\Api\Product\Dto\ProductUpdateRequestDto;
use App\Api\Product\Dto\ValidationExampleRequestDto;
use App\Api\Product\Factory\ResponseFactory;
use App\Core\Common\Dto\ValidationFailedResponse;
use App\Core\Common\Factory\HTTPResponseFactory;
use App\Core\Product\Document\Product;
use App\Core\Product\Enum\Permission;
use App\Core\Product\Repository\ProductRepository;
use App\Core\Product\Service\ProductService;
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
    public function show(Product $product = null, ResponseFactory $responseFactory)
    {
        if (!$product) {
            throw $this->createNotFoundException('Product not found');
        }

        return $responseFactory->createProductResponse($product);
    }

    /**
     * @Route(path="", methods={"GET"})
     * @IsGranted(Permission::PRODUCT_INDEX)
     * @Rest\View()
     *
     * @return ProductListResponseDto|ValidationFailedResponse
     */
    public function index(
        ProductRepository $productRepository,
        ResponseFactory $responseFactory
    ): ProductListResponseDto {
        $products = $productRepository->findAll();

        return new ProductListResponseDto(
            ... array_map(
                    function (Product $product) use ($responseFactory) {
                        return $responseFactory->createProductResponse($product);
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
     * @param ProductService                   $productService
     *
     * @return ProductResponseDto|ValidationFailedResponse|Response
     */
    public function create(
        ProductCreateRequestDto $requestDto,
        ConstraintViolationListInterface $validationErrors,
        ProductService $productService,
        ResponseFactory $responseFactory,
        HTTPResponseFactory $HTTPResponseFactory
    ) {
        if ($validationErrors->count() > 0) {
            return $HTTPResponseFactory->createValidationFailedResponse($validationErrors);
        }


        return $responseFactory->createProductResponse($productService->createProduct($requestDto));
    }

    /**
     * @Route(path="/{id<%app.mongo_id_regexp%>}", methods={"PUT"})
     * @IsGranted(Permission::PRODUCT_UPDATE)
     * @ParamConverter("requestDto", converter="fos_rest.request_body")
     *
     * @Rest\View()
     *
     * @param ProductUpdateRequestDto             $requestDto
     * @param ConstraintViolationListInterface $validationErrors
     * @param ProductService                   $productService
     *
     * @return ProductResponseDto|ValidationFailedResponse|Response
     */
    public function update(
        Product $product = null,
        ProductUpdateRequestDto $requestDto,
        ConstraintViolationListInterface $validationErrors,
        ProductService $productService,
        ResponseFactory $responseFactory
    ) {
        if (!$product) {
            throw $this->createNotFoundException('Product not found');
        }

        if ($validationErrors->count() > 0) {
            return new ValidationFailedResponse($validationErrors);
        }

        return $responseFactory->createProductResponse($productService->updateProduct($requestDto));
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
     * @return ValidationExampleRequestDto|ValidationFailedResponse
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
}
