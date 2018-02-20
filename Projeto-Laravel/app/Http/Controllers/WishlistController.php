<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Wishlist;
use App\Receita;
use JWTAuth;

use Illuminate\Support\Facades\Input;

//Tabela "Receitas que quero fazer"

class WishlistController extends Controller
{
    function index()
    {

      $wishlist = Wishlist::all();

      return response()->json(['wishlist'=>$wishlist], 200);
    }


    function getAuthenticatedUser()
    {
      try
      {
        if (! $user = JWTAuth::parseToken()->authenticate())
        {
          return response()->json(['message' => 'Usuario nao encontrado'], 404);
        }
      } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e)

      {
        return response()->json(['message' => 'Sessao Expirada'], $e->getStatusCode());
      } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e)

      {
        return response()->json(['message' => 'Sessao Invalida'], $e->getStatusCode());
      } catch (Tymon\JWTAuth\Exceptions\JWTException $e)

      {
        return response()->json(['message' => 'Token Inexistente'], $e->getStatusCode());
      }

      return response()->json(compact('user'));
    }

//Mostra todas as receitas que um usuário quer fazer
      function usuarioWishlist($id)
      {
        $userReceitas=[];
        $receita = Wishlist::where('user_id',$id)->get();
        foreach ($receita as $recipe)
        {
          $userReceitas[] = Receita::find($recipe->receita_id);
        }
        return response()->json(['receitasUsuario' => $userReceitas]);
      }

//Marca as receitas na tabela "Receitas que quero fazer"
    function insereWishlist($id)
    {
      $usuario = JWTAuth::parseToken()->authenticate();
      $faveRecipe = Receita::find($id);
      $receita_nova = new Wishlist;
      $receita_nova->user_id=$usuario->id;

      $checkDB = Wishlist::where('receita_id','=',$faveRecipe->id)->where('user_id','=',$usuario->id)->get();

      //Verifica se a receita já está no banco
      if ($checkDB->count() == 0)
      {
        $receita_nova->receita_id=$faveRecipe->id;
      } else {
        return response()->json(['message' => 'Receita ja listada']);
      }

      $receita_nova->save();
      return response()->json(['wishlist' => $receita_nova], 201);
    }

//Deleta as receitas da tabela "Receitas que quero fazer"
    function deletaWishlist($id)
    {
      Wishlist::Destroy($id);
      return response()->json(['message' => 'Content deleted'], 200);
    }

}
