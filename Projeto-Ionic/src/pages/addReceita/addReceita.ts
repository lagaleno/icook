import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ReceitaProvider } from '../../providers/receita/receita'; 
import { UsuarioProvider } from '../../providers/usuario/usuario'; 
import { Storage } from '@ionic/storage';

import { LoginModalPage } from '../login-modal/login-modal';
import { ReceitaPage } from '../receita/receita';

import { Usuario } from '../../models/usuario';


@Component({
  selector: 'page-addReceita',
  templateUrl: 'addReceita.html'
})
export class addReceitaPage {

	usuario = new Usuario;
  avisoErro: boolean;
  token: string;

	constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storage: Storage, public receitaProv: ReceitaProvider, public userProv: UsuarioProvider) { 
  	this.avisoErro = false;
    this.usuario = this.userProv.getUsuario();
  	console.log(this.usuario);
    this.storage.get('token')
    .then(
      (token) => {
        this.token = token;
        console.log(this.token);
      }
    );
	}

	presentLoginModal() {
  	let modal = this.modalCtrl.create(LoginModalPage);
 		modal.present();
  }


	insereReceita(nome: string, descricao: string, ingredientes: string, tempo_preparo: number, rendimento: number, dificuldade: number) {
		this.receitaProv.insereReceita(this.usuario.id, this.token, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade)
    .subscribe(
      (res)=>{
        console.log(res.receita.id);
        this.receitaProv.setReceita(res.receita.id, res.receita.nome, res.receita.descricao, res.receita.ingredientes, res.receita.tempo_preparo, res.receita.rendimento, res.receita.dificuldade);
        this.navCtrl.setRoot(ReceitaPage);
      },(error)=>{
        this.avisoErro = true;
        console.log(error);
      }
    );
	}


}
