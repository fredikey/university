<?php

declare(strict_types=1);

namespace App\Core\Product\Repository;

use App\Core\Common\Repository\AbstractRepository;
use App\Core\Product\Document\Product;
use Doctrine\ODM\MongoDB\LockException;
use Doctrine\ODM\MongoDB\Mapping\MappingException;

/**
 * @method Product save(Product $product)
 * @method Product|null find(string $id)
 * @method Product|null findOneBy(array $criteria)
 * @method Product getOne(string $id)
 */
class ProductRepository extends AbstractRepository
{
    public function getDocumentClassName(): string
    {
        return Product::class;
    }

    /**
     * @throws LockException
     * @throws MappingException
     */
    public function getProductById(string $id): ?Product
    {
        return $this->find($id);
    }
}
