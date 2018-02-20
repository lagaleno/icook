import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Receita } from '../../models/receita';

/*
  Generated class for the ReceitaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReceitaProvider {

  receitaApiUrl: string = 'http://localhost:8000/api/';

  receita = new Receita;
  
  constructor(public http: HttpClient) {
    console.log('Hello ReceitaProvider Provider');
  }

  //Usuário mandar receita
  insereReceita(id: number, token: string, nome: string, descricao: string, ingredientes: string, tempo_preparo: number, rendimento: number, dificuldade: number): Observable<any> {
    
    return this.http.post(this.receitaApiUrl+'receita/insere/'+id+'?token='+token, {nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade})
    .map(res=> res);
  }

  // A receita do usuário aparecer em seu perfil
  getReceitaPerfil(token: string):Observable<any> {
  	return this.http.get(this.receitaApiUrl+'receita/?token='+token)
  	.map(res=> res);
  }

  // O usuário deletar uma receita que inseriu
  //id -> id da receita
  deletaReceitaPerfil(id: number, token: string):Observable<any> {
    return this.http.delete(this.receitaApiUrl+'receita/deleta/'+id+'?token='+token)
    .map(res=> res);
  }

  // Usuário atualizar uma receita que inseriu
  atualizaReceita(id: number, token: string, nome: string, descricao: string, ingredientes: string, tempo_preparo: number, rendimento: number, dificuldade: number): Observable<any> {
    return this.http.put(this.receitaApiUrl+'receita/atualiza/'+id+'?token='+token, {nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade})
    .map(res=>res);
  }

  //Pegar lista de receita pelas mais fáceis em primeiro
  getReceitaDificuldadeAsc(): Observable<any> {
    return this.http.get(this.receitaApiUrl+'receita/dificuldadeAsc')
    .map(res=>res);
  }

  //Pegar lista de receita pelas mais difíceis em primeiro
  getReceitaDificuldadeDesc(): Observable<any> {
    return this.http.get(this.receitaApiUrl+'receita/dificuldadeDesc')
    .map(res=>res);
  }

  //Pegar lista de receita pelas que mais rendem
  getReceitaRendimentoDesc(): Observable<any> {
    return this.http.get(this.receitaApiUrl+'receita/rendimentoDesc')
    .map(res=>res);
  }

  //Pegar lista de receita pelas que menos rendem
  getReceitaRendimentoAsc(): Observable<any> {  
    return this.http.get(this.receitaApiUrl+'receita/rendimentoAsc')
    .map(res=>res);
  }

  //Pegar lista de receita pelas mais rápidas
  getReceitaTempoAsc(): Observable<any> {
    return this.http.get(this.receitaApiUrl+'receita/tempoAsc')
    .map(res=>res);    
  }

  //Pegar lista de receita pelas mais demoradas
  getReceitaTempoDesc(): Observable<any> {
    return this.http.get(this.receitaApiUrl+'receita/tempoDesc')
    .map(res=>res);    
  }

  //Pegar as últimas inseridas
  getReceitaRecentes(): Observable<any> {
    return this.http.get(this.receitaApiUrl+'recentes')
    .map(res=>res);
  }

  //Identificar com qual receita estou trabalhando
  setReceita(id: number, nome: string, descricao: string, ingredientes: string , tempo_preparo: number, rendimento: number, dificuldade: number) {
    this.receita.id = id;
    this.receita.nome = nome;
    this.receita.descricao = descricao;
    this.receita.ingredientes = ingredientes;
    this.receita.tempo_preparo = tempo_preparo;
    this.receita.rendimento = rendimento;
    this.receita.dificuldade = dificuldade;
  }

  //Retornar a receita com qual estou trabalhando
  getReceita() {
    return this.receita;
  }

  //Wishlist
  insereWishlist(id: number, token: string) {
    return this.http.get(this.receitaApiUrl+'wishlist/insere/'+id+'?token='+token)
    .map(res=>res);
  }

  usuarioWishlist(id: number) { //id->usuario
    return this.http.get(this.receitaApiUrl+'wishlist/'+id)
    .map(res=>res);
  }

  removeWishlist(id: number, token: string) {
    return this.http.delete(this.receitaApiUrl+'wishlist/deleta/'+id+'?token='+token)
    .map(res=>res);
  }
    
}
