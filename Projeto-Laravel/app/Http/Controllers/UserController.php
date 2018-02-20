<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
  public function signup(Request $request)
  {
    $this->validate( $request, [
      'name'=>'required',
      'email'=>'required|email|unique:Users',
      'password'=>'required'
    ]);

    $usuario = new User([
      'name'=>$request->input('name'),
      'email'=>$request->input('email'),
      'password'=>bcrypt($request->input('password'))
    ]);

    $usuario->save();
    return response()->json(['message'=>'Cadastro realizado com sucesso'], 201);
  }

  public function signin(Request $request)
  {
    $this->validate( $request, [
      'email'=>'required|email',
      'password'=>'required'
    ]);

    $credentials = $request->only('email', 'password');
    try {
    // verify the credentials and create a token for the user
      if (! $token = JWTAuth::attempt($credentials)) {
        return response()->json(['error' => 'invalid_credentials'], 401);
      }
    } catch (JWTException $e) {
    // something went wrong
      return response()->json(['error' => 'could_not_create_token'], 500);
    }

    $currentUser = JWTAuth::toUser($token);
    return response()->json(compact('token', 'currentUser'));
  }
} 
/*

    try
    {
      if (!$token = JWTAuth::attempt($credentials))
      {
        return response()->json([
          'error' => 'Credenciais Invalidas'
        ], 401);
      }
    } catch (JWTException $e)
    {
      return response()->json([

        'error' => 'Token nao pode ser criado'
      ], 500);
    }
    return response()->json([
      'token' => $token
    ], 200);
  }
*/
