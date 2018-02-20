import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ReceitaProvider } from '../../providers/receita/receita';
import { Storage } from '@ionic/storage';

import { Receita } from '../../models/receita';


/**
 * Generated class for the RemoveModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remove-modal',
  templateUrl: 'remove-modal.html',
})
export class RemoveModalPage {

  receita = new Receita;
  token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController,
    public receitaProv: ReceitaProvider, public storage: Storage) {
    this.receita = this.receitaProv.getReceita();
    this.storage.get('token')
    .then(
      (token) => {
        this.token = token;
        console.log(this.token);
      }
    );
  }

  closeRemoveModal() {
  	this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemoveModalPage');
  }

  deletaReceitaPerfil() {
    this.receitaProv.deletaReceitaPerfil(this.receita.id, this.token)
      .subscribe(
      (res)=>{
        console.log(res);
        this.view.dismiss();
      },(error)=>{
        console.log(error);
      }
    );
  }

}
