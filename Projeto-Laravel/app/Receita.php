<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Receita extends Model
{

  protected $fillable = [
      'nome', 'descricao', 'tempo_preparo', 'ingredientes', 'rendimento', 'dificuldade', 'nome_foto',
  ];
}
