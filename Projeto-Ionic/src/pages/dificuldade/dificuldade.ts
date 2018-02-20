import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { ReceitaPage } from '../receita/receita';
import { ReceitaProvider } from '../../providers/receita/receita'; 

/**
 * Generated class for the DificuldadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dificuldade',
  templateUrl: 'dificuldade.html',
})
export class DificuldadePage {

	searchQuery: string = '';
	receitas = [];

	dificuldadeAsc = [];
	dificuldadeDesc = [];
	show: boolean;
	i: number;
	asc: boolean;

	constructor(public navCtrl: NavController, public navParams: NavParams, public receitaProv: ReceitaProvider) {
		this.show = false;
		this.asc = true; //Começo com o filtro de ascendente
	}


	ionViewDidLoad() {
		console.log('ionViewDidLoad DificuldadePage');
		this.getReceitaDificuldadeAsc();
		this.initializeReceitas();
	}

	getReceitaDificuldadeAsc() {
		this.receitaProv.getReceitaDificuldadeAsc()
		.subscribe(
			(res) => {
				this.i = 0;
				while(this.i < res.receita.length) {
					this.dificuldadeAsc[this.i] = res.receita[this.i];
					this.i = this.i+1;
				}
				this.initializeReceitas();
				//console.log(this.dificuldadeAsc);
			}, (error) => {  
				console.log(error);
			}	
		);
	}

	getReceitaDificuldadeDesc() {
		this.receitaProv.getReceitaDificuldadeDesc()
		.subscribe(
			(res) => {
				console.log(res.length);
				this.i = 0;
				while(this.i < res.receita.length) {
					this.dificuldadeDesc[this.i] = res.receita[this.i];
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
			this.getReceitaDificuldadeDesc();
		}
		else {
			this.asc = true;
			this.getReceitaDificuldadeAsc();
		}
	}

	//Searchbar

	initializeReceitas() {
		if (this.asc) { 
			this.receitas = this.dificuldadeAsc;
		}
		else {
			this.receitas = this.dificuldadeDesc;
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
