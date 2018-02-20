import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ReceitaProvider } from '../../providers/receita/receita';
import { Storage } from '@ionic/storage';
import { Receita } from '../../models/receita';
import { ProfilePage } from '../profile/profile'; 
import { ReceitaPage } from '../receita/receita'; 


/**
 * Generated class for the AtualizarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-modal',
  templateUrl: 'editar-modal.html',
})
export class EditarModalPage {

	receita = new Receita;
	token: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public receitaProv: ReceitaProvider, public storage: Storage) {
		this.storage.get('token')
    	.then(
      		(token) => {
        		this.token = token;
        		console.log(this.token);
      		}
    	);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EditarModalPage');
		this.receita = this.receitaProv.getReceita();
		console.log(this.receita);
	}

	closeEditarModal() {
		this.navCtrl.setRoot(ProfilePage);
	}

	atualizaReceita(nome: string, descricao: string, ingredientes: string, tempo_preparo: number, rendimento: number, dificuldade: number) {
		this.receitaProv.atualizaReceita(this.receita.id, this.token, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade)
		.subscribe(
			(res) => {
				console.log(res);
				this.receitaProv.setReceita(this.receita.id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade);
				this.navCtrl.setRoot(ReceitaPage);
			}, (error) => {
				console.log(error);
			}
		);
	}

}