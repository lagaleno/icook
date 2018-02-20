<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

use Illuminate\Auth\AuthenticationException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Response;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */

//Tratar exceções do Token
    public function render($request, Exception $exception)
    {

      if ($exception instanceof Tymon\JWTAuth\Exceptions\TokenExpiredException)
      {
        return Response::json(['error' => 'Sessao Expirada'], $exception->getStatusCode());
      } else if ($exception instanceof Tymon\JWTAuth\Exceptions\TokenInvalidException)
      {
        return Response::json(['error' => 'Sessao Invalida'], $exception->getStatusCode());
      } else if ($exception instanceof JWTException)
      {
        return Response::json(['error' => 'Erro ao buscar sessao'], $exception->getStatusCode());
      }

        return parent::render($request, $exception);
    }
}
