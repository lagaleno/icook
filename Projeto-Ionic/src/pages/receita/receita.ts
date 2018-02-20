import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ReceitaProvider } from '../../providers/receita/receita';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { Receita } from '../../models/receita';
import { Usuario } from '../../models/usuario';
import { Storage } from '@ionic/storage';
import { LoginModalPage } from '../login-modal/login-modal';



/**
 * Generated class for the ReceitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html',
})
export class ReceitaPage {

	receita = new Receita;
	usuario = new Usuario;
	token: string;
	show: boolean;

	constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public storage: Storage, public userProv: UsuarioProvider, public receitaProv: ReceitaProvider) {
      this.usuario = this.userProv.getUsuario();
      this.receita = this.receitaProv.getReceita();
      console.log(this.receita);
      this.show = false;
    }

//Função para auxiliar a inserção na wishlist por meio de um evento click no botão 'Favorito'
	  ionViewDidLoad() {
		  console.log('ionViewDidLoad ReceitaPage');	
		
	  }

    getToken() {
      this.storage.get('token')
      .then(
        (token) => {
          this.token = token;
          console.log(this.token);
        }
      );
      if(this.usuario.id) {
        console.log(this.token);
        this.insereWishlist();
      }

      if(!this.usuario.id) {
        console.log(this.token);
        if (!this.show) {
          this.show = true;
        }
        else {
          this.show = false;
        }
      }
    }


  //Funcionalidade do usuário fvoritar suasreceitas queridas
  	insereWishlist() {
      console.log(this.receita.id);
      console.log(this.token);
  		this.receitaProv.insereWishlist(this.receita.id, this.token)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) =>{
          console.log(error);
        }
      );
  	} 

  	presentLoginModal() {
      this.show = false;
  		let modal = this.modalCtrl.create(LoginModalPage);
      modal.present();

  	}

}
