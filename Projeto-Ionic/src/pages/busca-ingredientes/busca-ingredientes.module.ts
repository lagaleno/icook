import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscaIngredientesPage } from './busca-ingredientes';

@NgModule({
  declarations: [
    BuscaIngredientesPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscaIngredientesPage),
  ],
})
export class BuscaIngredientesPageModule {}
