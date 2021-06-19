<?php

declare(strict_types=1);

namespace App\Core\User\Service;

use App\Api\User\Dto\UserCreateRequestDto;
use App\Api\User\Dto\UserUpdateRequestDto;
use App\Core\User\Document\User;
use App\Core\User\Factory\UserFactory;
use App\Core\User\Repository\UserRepository;

class UserService
{
    /**
     * @var UserRepository
     */
    private UserRepository $userRepository;

    /**
     * @var UserFactory
     */
    private UserFactory $userFactory;


    public function __construct(UserRepository $userRepository, UserFactory $userFactory)
    {
        $this->userRepository = $userRepository;
        $this->userFactory    = $userFactory;
    }

    public function findOneBy(array $criteria): ?User
    {
        return $this->userRepository->findOneBy($criteria);
    }

    public function updateUser(string $id, UserUpdateRequestDto $requestDto)
    {
        //todo update logic
    }

    public function createUser(UserCreateRequestDto $requestDto): User
    {
        $user = $this->userFactory->create(
            $requestDto->phone,
            $requestDto->roles,
            $requestDto->apiToken
        );

        $user->setLastName($requestDto->lastName);
        $user->setFirstName($requestDto->firstName);

        $user = $this->userRepository->save($user);

        return $user;
    }
}
