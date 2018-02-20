import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroModalPage } from './cadastro-modal';

@NgModule({
  declarations: [
    CadastroModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroModalPage),
  ],
})
export class CadastroModalPageModule {}
