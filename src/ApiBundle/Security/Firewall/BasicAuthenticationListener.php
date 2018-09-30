<?php

namespace ApiBundle\Security\Firewall;

use ApiBundle\Api\Exception\ErrorCode;
use Biz\User\UserException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class BasicAuthenticationListener extends BaseAuthenticationListener
{
    public function handle(Request $request)
    {
        if (null !== $this->getTokenStorage()->getToken()) {
            return;
        }

        if (null === $username = $request->headers->get('PHP_AUTH_USER')) {
            return;
        }

        $user = $this->validUser($username, $request->headers->get('PHP_AUTH_PW'));
        $token = $this->createTokenFromRequest($request, $user['id']);
        $this->getTokenStorage()->setToken($token);

    }

    private function validUser($username, $password)
    {
        $user = $this->getUserService()->getUserByLoginField($username);
        if (empty($user)) {
            throw UserException::NOTFOUND_USER();
        }

        if (!$this->getUserService()->verifyPassword($user['id'], $password)) {
            throw UserException::ERROR_PASSWORD();
        }

        if ($user['locked']) {
            throw UserException::LOCKED_USER();
        }

        return $user;
    }
}