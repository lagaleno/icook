import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { CadastroModalPage } from '../cadastro-modal/cadastro-modal';
import { UsuarioProvider } from '../../providers/usuario/usuario'; //Provider para fazer o login
import { Storage } from '@ionic/storage';


/**
 * Generated class for the LoginModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-modal',
  templateUrl: 'login-modal.html',
})
export class LoginModalPage {

  token: string;
  avisoErro: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public modalCtrl: ModalController, public view: ViewController, 
    public userProv: UsuarioProvider, public storage: Storage) {

    this.avisoErro = false;
  }

  presentCadastroModal() {
    let modal = this.modalCtrl.create(CadastroModalPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginModalPage');
  }

  login(email: string, password:string){
    this.userProv.login(email, password) //chamo a função login que criei na minha provider
    .subscribe(
      (res)=>{
        this.userProv.setToken(res.token);
        console.log(this.token);
        this.userProv.setUsuario(res.currentUser.id, res.currentUser.name, res.currentUser.email);
        this.view.dismiss();
      },(error)=>{
        this.avisoErro = true;
        console.log(error);
      }
    );
  }


  closeLoginModal() {
  	this.view.dismiss();
    //console.log(this.userProv.getToken()); //Teste
  }


}
