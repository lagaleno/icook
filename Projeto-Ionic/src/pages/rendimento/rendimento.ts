import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReceitaProvider } from '../../providers/receita/receita'; 
import { ReceitaPage } from '../receita/receita';


/**
 * Generated class for the RendimentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rendimento',
  templateUrl: 'rendimento.html',
})
export class RendimentoPage {
	searchQuery: string = '';
	receitas = [];

	rendimentoDesc = [];
	rendimentoAsc = [];
	show: boolean;
	i: number;
	desc: boolean;

	constructor(public navCtrl: NavController, public navParams: NavParams, public receitaProv: ReceitaProvider) {
		this.show = false;
		this.desc = true;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RendimentoPage');
		this.getReceitaRendimentoDesc();
		this.initializeReceitas();
	}

	getReceitaRendimentoDesc() {
		this.receitaProv.getReceitaRendimentoDesc()
		.subscribe(
			(res) => {
				this.i = 0;
				console.log(res.receita.length);
				while(this.i < res.receita.length) {
					this.rendimentoDesc[this.i] = res.receita[this.i];
					this.i = this.i+1;
				}
				this.initializeReceitas();
			}, (error) => {  
				console.log(error);
			}	
		);		
	}

	getReceitaRendimentoAsc() {
		this.receitaProv.getReceitaRendimentoAsc()
		.subscribe(
			(res) => {
				this.i = 0;
				console.log(res);
				while(this.i < res.receita.length) {
					this.rendimentoAsc[this.i] = res.receita[this.i];
					this.i = this.i+1;
				}
				this.initializeReceitas();
			}, (error) => {  
				console.log(error);
			}	
		);
	}

	setReceita(id: number, nome: string, descricao: string, ingredientes: string, tempo_preparo: number, rendimento: number, dificuldade: number) {
		this.receitaProv.setReceita(id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade)
		this.navCtrl.setRoot(ReceitaPage);
	}

	troca() {
		if(this.desc) {
			this.desc = false;
			this.getReceitaRendimentoAsc();
		}
		else {
			this.desc = true;
			this.getReceitaRendimentoDesc();
		}
	}

		//Searchbar

	initializeReceitas() {
		if (this.desc) { 
			this.receitas = this.rendimentoDesc;
		}
		else {
			this.receitas = this.rendimentoAsc;
		}
	}

	getReceita(ev: any) {
		// Reset items back to all of the items
		this.initializeReceitas();

		// set val to the value of the searchbar
		let val = ev.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.receitas = this.receitas.filter((item) => {
			return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
  	}


}
