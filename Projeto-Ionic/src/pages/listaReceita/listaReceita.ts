import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DificuldadePage } from '../dificuldade/dificuldade';
import { RendimentoPage } from '../rendimento/rendimento';
import { TempoPage } from '../tempo/tempo';
import { BuscaIngredientesPage } from '../busca-ingredientes/busca-ingredientes';


@Component({
  selector: 'page-listaReceita',
  templateUrl: 'listaReceita.html'
})
export class listaReceitaPage {

  constructor(public navCtrl: NavController) {

  }

  openListaDificuldade() {
  	this.navCtrl.setRoot(DificuldadePage);
  }

  openListaRendimento() {
  	this.navCtrl.setRoot(RendimentoPage);
  }

  openListaTempo() {
  	this.navCtrl.setRoot(TempoPage);
  }

  openBuscaIngredientes() {
    this.navCtrl.setRoot(BuscaIngredientesPage);
  }

}
