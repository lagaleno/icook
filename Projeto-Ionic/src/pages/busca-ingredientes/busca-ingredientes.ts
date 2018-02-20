import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReceitaProvider } from '../../providers/receita/receita';
import { ReceitaPage } from '../receita/receita';


/**
 * Generated class for the BuscaIngredientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busca-ingredientes',
  templateUrl: 'busca-ingredientes.html',
})
export class BuscaIngredientesPage {

	searchQuery: string = '';
	receitas = [];
	dificuldadeAsc = [];
	i: number;

	constructor(public navCtrl: NavController, public navParams: NavParams, public receitaProv: ReceitaProvider) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad BuscaIngredientesPage');
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


	setReceita(id: number, nome: string, descricao: string, ingredientes: string, tempo_preparo: number, rendimento: number, dificuldade: number) {
		this.receitaProv.setReceita(id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade)
		this.navCtrl.setRoot(ReceitaPage);
	}


		//Searchbar
	initializeReceitas() {
		this.receitas = this.dificuldadeAsc;
	}

	getReceita(ev: any) {
		// Reset items back to all of the items
		this.initializeReceitas();

		// set val to the value of the searchbar
		let val = ev.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {
			this.receitas = this.receitas.filter((item) => {
			return (item.ingredientes.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
  	}
}
