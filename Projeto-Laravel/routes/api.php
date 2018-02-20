<?php

use Illuminate\Http\Request;


header('Access-Control-Allow-Methods: DELETE, POST, PUT, GET');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//sign-in e sign-up
Route::post('/signup', ['uses'=>'UserController@signup']);
Route::post('/signin', ['uses'=>'UserController@signin']);

//For All


//Todas as receitas do app
Route::get('/receitas', ['uses' => 'ReceitaController@index']);



//Lista as 3 receitas mais recentes
Route::get('/recentes', ['uses' => 'ReceitaController@recentesReceita']);




//funções de categoria
//Maior rendimento
Route::get('/receita/rendimentoAsc', ['uses' => 'ReceitaController@rendimentoAsc']);
//Menor rendimento
Route::get('/receita/rendimentoDesc', ['uses' => 'ReceitaController@rendimentoDesc']);
//Maior dificuldade
Route::get('/receita/dificuldadeAsc', ['uses' => 'ReceitaController@dificuldadeAsc']);
//Menor dificuldade
Route::get('/receita/dificuldadeDesc', ['uses' => 'ReceitaController@dificuldadeDesc']);
//Maior tempo de preparo
Route::get('/receita/tempoAsc', ['uses' => 'ReceitaController@tempoAsc']);
//Menor tempo de preparo
Route::get('/receita/tempoDesc', ['uses' => 'ReceitaController@tempoDesc']);



//teste pra ver se ta pegando o user
Route::get('/user', ['uses' => 'ReceitaController@getAuthenticatedUser']);


//Only Users CRUD
  //Todas Receitas do usuario
Route::get('/receita', ['uses' => 'ReceitaController@usuarioReceita'])->middleware('token-auth');




  //Deletar Receitas do usuario
Route::delete('/receita/deleta/{id}', ['uses' => 'ReceitaController@deletaReceita'])->middleware('token-auth');




//Rotas de Pesquisa
Route::get('/pesquisarNome', ['uses' => 'ReceitaController@pesquisarNome']);
Route::post('/pesquisarNome', ['uses' => 'ReceitaController@pesquisarNome']);

Route::get('/pesquisarIngredientes', ['uses' => 'ReceitaController@pesquisarIngredientes']);
Route::post('/pesquisarIngredientes', ['uses' => 'ReceitaController@pesquisarIngredientes']);


//Apenas para usuários logados


//Pega receitas que um usuário quer fazer
Route::get('/wishlist/{id}', ['uses' => 'WishlistController@usuarioWishlist']);
//Insere receita na lista "Receitas que quero fazer" de um usuário (recebe o id da receita e pega o usuário pelo token)
Route::get('/wishlist/insere/{id}', ['uses' => 'WishlistController@insereWishlist'])->middleware('token-auth');
//Insere nova receita do usuario
Route::post('/receita/insere/{id}', ['uses' => 'ReceitaController@insereReceita'])->middleware('token-auth');

//Deleta receita da lista "Receitas que gostaria de fazer"
Route::delete('/wishlist/deleta/{id}', ['uses' => 'WishlistController@deletaWishlist'])->middleware('token-auth');
//Atualiza receita
Route::put('/receita/atualiza/{id}', ['uses' => 'ReceitaController@atualizaReceita'])->middleware('token-auth');


Route::get('/pesquisarDescricao', ['uses' => 'ReceitaController@pesquisarDescricao']);
Route::post('/pesquisarDescricao', ['uses' => 'ReceitaController@pesquisarDescricao']);

