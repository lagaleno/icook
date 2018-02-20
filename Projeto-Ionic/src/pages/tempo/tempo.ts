import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReceitaProvider } from '../../providers/receita/receita'; 
import { ReceitaPage } from '../receita/receita';

/**
 * Generated class for the TempoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tempo',
  templateUrl: 'tempo.html',
})
export class TempoPage {

	searchQuery: string = '';
	receitas = [];

	tempoAsc = [];
	tempoDesc = [];
	show: boolean;
	i: number;
	asc: boolean;

	constructor(public navCtrl: NavController, public navParams: NavParams, public receitaProv: ReceitaProvider) {
		this.show = false;
		this.asc = true;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TempoPage');
		this.getReceitaTempoAsc();
		this.initializeReceitas();
	}

	getReceitaTempoAsc() {
		this.receitaProv.getReceitaTempoAsc()
		.subscribe(
			(res) => {
				console.log(res.receita.length);
				this.i = 0;
				while(this.i < res.receita.length) {
					this.tempoAsc[this.i] = res.receita[this.i];
					this.i = this.i+1;
				}
				this.initializeReceitas();
			}, (error) => {  
				console.log(error);
			}	
		);
	}

	getReceitaTempoDesc() {
		this.receitaProv.getReceitaTempoDesc()
		.subscribe(
			(res) => {
				console.log(res.length);
				this.i = 0;
				while(this.i < res.receita.length) {
					this.tempoDesc[this.i] = res.receita[this.i];
					this.i = this.i+1;
				}
				this.initializeReceitas();
				//console.log(this.dificuldadeDesc);
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
		if (this.asc) {
			this.asc = false;
			this.getReceitaTempoDesc();
		}
		else {
			this.asc = true;
			this.getReceitaTempoAsc();
		}
	}

	initializeReceitas() {
		if (this.asc) { 
			this.receitas = this.tempoAsc;
		}
		else {
			this.receitas = this.tempoDesc;
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
