<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Receita;
use JWTAuth;

use Illuminate\Support\Facades\Input;

class ReceitaController extends Controller
{
  //For all
  //Exibe TODAS AS RECEITAS
    function index()
    {

      $receita = Receita::all();

      return response()->json(['receita'=>$receita], 200);
    }


//Pega um usuário a partir do token
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


//Mostra as 3 receitas mais recentes
    function recentesReceita(){
      $recente = Receita::latest()->take(5)->get();

      return response()->json(['receita'=>$recente], 200);
    }

    //For all
    //Pesquisa receitas por Nome, ingredientes e descricao
    function pesquisarNome(Request $request){
      $receita = Receita::where('nome','like','%'.Input::get('texto').'%')->get();
      return response()->json(['receita'=>$receita], 200);
    }

    function pesquisarIngredientes(Request $request){
      $receita = Receita::where('ingredientes','like','%'.Input::get('texto').'%')->get();
      return response()->json(['receita'=>$receita], 200);
    }

    function pesquisarDescricao(Request $request){
      $receita = Receita::where('descricao','like','%'.Input::get('texto').'%')->get();
      return response()->json(['receita'=>$receita], 200);
    }



    //For Users
    //Exibe as receitas adicionadas pelo usuário
    function usuarioReceita()
    {
      $usuario = JWTAuth::parseToken()->authenticate();

      $receita = Receita::where('user_id',$usuario->id)->get();

      return response()->json(['receita'=>$receita], 200);
    }


    //For Users
    //Insere Receitas do usuario
    //O id foi adicionado devido a um erro na parte de frontend, que estava com erro na hora de tratar o token
    //de diferentes usuários
    function insereReceita(Request $request, $id)
    {

      $usuario = JWTAuth::parseToken()->authenticate();

      $receita_nova = new Receita;

      $receita_nova->nome=$request->nome;
      $receita_nova->descricao=$request->descricao;
      $receita_nova->tempo_preparo=$request->tempo_preparo;
      $receita_nova->ingredientes=$request->ingredientes;
      $receita_nova->rendimento=$request->rendimento;
      if(($request->dificuldade >= 1) && ($request->dificuldade <= 10))
      {
          $receita_nova->dificuldade=$request->dificuldade;

      } else {
            return response()->json(['message' => 'A dificuldade tem que ser de 1 a 10']);
      }
      $receita_nova ->user_id=$id;


      if($request->hasFile('nome_foto')) {
           $file = $request->file('nome_foto');
           $fileName = time().'.'.$file->getClientOriginalExtension() ;
           $destinationPath = public_path().'/images' ;
           $file->move($destinationPath,$fileName);
           $receita_nova->nome_foto=$fileName;
       }

      $receita_nova->save();

      return response()->json(['receita' => $receita_nova], 201);
    }

    //For Users
    //Deleta Receitas do usuario

    function deletaReceita($id){

      $usuario = JWTAuth::parseToken()->authenticate();

      $receita = Receita::find($id);


      if ($usuario->id == $receita->user_id) {

        Receita::Destroy($id);

        return response()->json(['message' => 'Content deleted'], 200);
      }
      else {
        return response()->json(['message' => 'Esta receita não é sua, user']);
      }
    }

    //For Users
    //Atualiza informações de receitas do usuario

    function atualizaReceita(Request $request, $id)
    {
      $usuario = JWTAuth::parseToken()->authenticate();

      $receita = Receita::find($id);

      if ($usuario->id == $receita->user_id) {

        if(!$receita){
          return response()->json(['message' => 'Not found'], 404);
        }

        $receita->nome=$request->nome;
        $receita->descricao=$request->descricao;
        $receita->tempo_preparo=$request->tempo_preparo;
        $receita->ingredientes=$request->ingredientes;
        $receita->rendimento=$request->rendimento;
        $receita->dificuldade=$request->dificuldade;


        if($request->hasFile('nome_foto')) {
             $file = $request->file('nome_foto');
             $fileName = time().'.'.$file->getClientOriginalExtension() ;
             $destinationPath = public_path().'/images';
             $file->move($destinationPath,$fileName);
             $receita->nome_foto=$fileName;
         }
        $receita->save();
        return response()->json(['receita' => $receita], 200);
      }
      else {
        return response()->json(['message' => 'Esta receita não é sua, user']);
      }
    }

//Ordena as receitas do menor rendimento para o maior
    function rendimentoAsc()
    {
      $receita = Receita::orderBy('rendimento', 'asc')->get();
      return response()->json(['receita' => $receita], 200);
    }

//Ordena as receitas do maior rendimento para o menor
    function rendimentoDesc()
    {
      $receita = Receita::orderBy('rendimento', 'desc')->get();
      return response()->json(['receita' => $receita], 200);
    }

//Ordena as receitas da menor dificuldade para a maior
    function dificuldadeAsc()
    {
      $receita = Receita::orderBy('dificuldade', 'asc')->get();
      return response()->json(['receita' => $receita], 200);
    }

//Ordena as receitas da maior dificuldade para a menor
    function dificuldadeDesc()
    {
      $receita = Receita::orderBy('dificuldade', 'desc')->get();
      return response()->json(['receita' => $receita], 200);
    }

//Ordena as receitas do menor tempo de preparo para o maior
    function tempoAsc()
    {
      $receita = Receita::orderBy('tempo_preparo', 'asc')->get();
      return response()->json(['receita' => $receita], 200);
    }


//Ordena as receitas do maior tempo de preparo para o menor
    function tempoDesc()
    {
      $receita = Receita::orderBy('tempo_preparo', 'desc')->get();
      return response()->json(['receita' => $receita], 200);
    }



}
