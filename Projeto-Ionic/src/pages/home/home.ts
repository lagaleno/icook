import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReceitaPage } from '../receita/receita';
import { ReceitaProvider } from '../../providers/receita/receita'; 


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	i: number;
	recentes = [];

	constructor(public navCtrl: NavController, public receitaProv: ReceitaProvider) {

	}

	ionViewDidLoad() {
		this.getReceitaRecentes();
	}

	goReceita(id: number, nome: string, descricao: string, ingredientes: string, tempo_preparo: number, rendimento: number, dificuldade: number) {
		this.receitaProv.setReceita(id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade);
		this.navCtrl.setRoot(ReceitaPage);
	}

	getReceitaRecentes() {
		this.i = 0;
		console.log('entrei')	
		this.receitaProv.getReceitaRecentes()
		.subscribe(
			(res) => {
				console.log(res.receita.length);

				while(this.i < res.receita.length) {
					this.recentes[this.i] = res.receita[this.i];
					this.i = this.i+1;
				}
				console.log(this.recentes);
			}, (error) => {
				console.log(error);
			}
		);
	}


}
