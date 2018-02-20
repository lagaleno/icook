import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Usuario } from '../../models/usuario';


/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//Provider para tomar conta das ações de logar e cadastro de usuário
@Injectable()
export class UsuarioProvider {

  usuario = new Usuario;

  usuarioApiUrl: string = 'http://localhost:8000/api/'; //url da controller correspondente; que está na routes/api

  //private headers = new Headers({'Content-Type': 'application/json'});

  //private options = new RequestOptions({headers: this.headers});

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello UsuarioProvider Provider');
  }

  //Usuário poder logar
  login(email:string, password:string):Observable<any>{
  	return this.http.post(this.usuarioApiUrl+'signin',{email, password}) //signin => função es está descrita na minha controller (explicita na routes/api)
    .map(res=>res);

  }

  //Cadastrar novo usuário
  cadastro(name:string, email:string, password:string):Observable<any> {
  	return this.http.post(this.usuarioApiUrl+'signup',{name, email, password})
  	.map(res=>res);
  }


  //Identificar qual usuário está logado no momento
  setUsuario(currentUserId:number, currentUserNome:string, currentUserEmail:string) {
    this.usuario.id = currentUserId;
    this.usuario.nome = currentUserNome;
    this.usuario.email = currentUserEmail;
  }

  //Retornar qual usuário está logado no momento
  getUsuario() {
    console.log(this.usuario);
    return this.usuario;
  }

  //Identificar o token do usuário logado no momento
  setToken(tokenRes: string) {
    this.storage.set('token', tokenRes);
  }

}
