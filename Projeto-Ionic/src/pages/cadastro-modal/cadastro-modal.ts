import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario'; //Provider para fazer o login


/**
 * Generated class for the CadastroModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-modal',
  templateUrl: 'cadastro-modal.html',
})
export class CadastroModalPage {

  avisoErro: boolean;
  erroEmail: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, 
    public userProv: UsuarioProvider) {

    this.avisoErro = false;
  }

  closeCadastroModal() {
  	this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroModalPage');
  }

  cadastro(name:string, email:string, password:string){
    this.userProv.cadastro(name, email, password) //chamo a função login que criei na minha provider
    .subscribe(
      (res)=>{
        console.log(res);
        this.view.dismiss(); //Após fazer o cadastro voltar para página de login
      },(error)=>{
        this.avisoErro = true;
        this.erroEmail = error.error.errors.email[0];
        console.log(error.error);
      }
    );
  }


}
