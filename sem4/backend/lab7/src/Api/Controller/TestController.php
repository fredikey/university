<?php

declare(strict_types=1);

namespace App\Api\Controller;

use App\Api\Utils\AuthService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;

/**
 * @Route(path="/test")
 */
class TestController
{
    /**
     * @Route(path="/", methods={"GET"})
     */
    public function index(Request $request, AuthService $authService)
    {
        $authMetaData = $request->headers->get('Authorization', '');

        if($authMetaData !=='' && $authService->checkCredentials($authMetaData)) {
            return new Response(
                json_encode([
                    'message'=>'Ok, method logic result is here',
                ]),
                Response::HTTP_OK,
                [
                    'Content-type'=>'application/json'
                ]
            );
        }

        return new Response(
            json_encode([
                'message'=>'Not Authorized',
            ]),
            Response::HTTP_UNAUTHORIZED,
            [
                'www-Authenticate' => 'Basic realm="Access to the staging site", charset="UTF-8"',
                'Content-type'=>'application/json'
            ]
        );
    }

    /**
     * @Route(path="/getMe", methods={"GET"})
     */
    public function getMe()
    {
        $token = $_SERVER['HTTP_AUTHORIZATION'];
        $tokenParts = explode(".", str_replace("BEARER ", "", $token));
        $tokenPayload = base64_decode($tokenParts[1]);
        $jwtPayload = json_decode($tokenPayload);

        return new Response(
            json_encode(
                [
                    "username" => $jwtPayload->username,
                    "name" => 'Andrey',
                    "surname" => 'Vorobiev',
                    "bio" => "JWT works!!!"
                ]
            ),
            Response::HTTP_OK,
            [
                'Content-type'=> 'application/json'
            ]
        );
    }
}