import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { RemoveModalPage } from '../remove-modal/remove-modal';
import { LoginModalPage } from '../login-modal/login-modal';
import { EditarModalPage } from '../editar-modal/editar-modal';
import { FavoritosPage } from '../favoritos/favoritos';
import { addReceitaPage } from '../addReceita/addReceita';

import { ReceitaProvider } from '../../providers/receita/receita'; 
import { UsuarioProvider } from '../../providers/usuario/usuario'; 

import { Usuario } from '../../models/usuario';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  
  receitas = []; //Array de receitas do usuário
  usuario = new Usuario;

  token: string;

  show: boolean;

  i: number;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, 
  	public receitaProv: ReceitaProvider, public userProv: UsuarioProvider, public storage: Storage) {
    this.show = false;
    this.usuario = this.userProv.getUsuario();
    console.log(this.usuario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfil');
  }

  presentRemoveModal() {
    let modal = this.modalCtrl.create(RemoveModalPage);
    modal.present();
    this.getReceitaPerfil();        
  }

  goEditar() {
    this.navCtrl.setRoot(EditarModalPage);    
  }

  goAddReceita() {
    this.navCtrl.setRoot(addReceitaPage);
  }


  presentLoginModal() {
    let modal = this.modalCtrl.create(LoginModalPage);
    modal.present();
  }


  getToken(){
    this.storage.get('token')
    .then(
      (token) => {
        this.token = token;
        console.log(this.token);
        this.getReceitaPerfil();
      }
    );
  }

  getReceitaPerfil() {
    if (!this.show) { 
      this.receitaProv.getReceitaPerfil(this.token)
        .subscribe(
          (res)=>{
            if (!res.receita.length) {
              this.show = true;
            }
            else { 
              this.i = 0;
              while(this.i < res.receita.length) {
                this.receitas[this.i] = res.receita[this.i];
                this.i = this.i+1;
              }
              this.show = true;
            }
          },(error)=>{
            console.log(error);
          }
        );
    }
    else {
      this.receitas = [];
      this.show = false;
    }
  }

  setReceitaDeletar(id: number, nome: string, descricao: string, ingredientes: string, tempo_preparo: number, rendimento: number, dificuldade: number) {
    this.receitaProv.setReceita(id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade);
    this.presentRemoveModal();
  }

  setReceitaEditar(id: number, nome: string, descricao: string, ingredientes: string, tempo_preparo: number, rendimento: number, dificuldade: number) {
    this.receitaProv.setReceita(id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade);
    this.goEditar();
  }

  goFavoritos() {
    this.navCtrl.setRoot(FavoritosPage);
  }
}
