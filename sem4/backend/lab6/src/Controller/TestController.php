<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/test")
 */
class TestController
{
    /**
     * @Route(path="/", methods={"GET"})
     */
    public function index () {
        return new Response(
            json_encode(
                [
                    "name"=>"Name",
                    "surname"=>"Surname"
                ]
            ),
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/json'
            ]
        );
    }

    /**
     * @Route(path="/list", methods={"GET"})
     */
    public function list () {
        return new Response(
            json_encode(
                [
                    new class ('igor', 20) {
                        public $name;
                        public $age;

                        public function __construct($name, $age)
                        {
                            $this->age = $age;
                            $this->name = $name;
                        }
                    },
                    new class ('oleg', 54) {
                        public $name;
                        public $age;

                        public function __construct($name, $age)
                        {
                            $this->age = $age;
                            $this->name = $name;
                        }
                    }
                ]
            ),
            Response::HTTP_OK,
            [
                'Content-Type' => 'application/json'
            ]
        );
    }
}