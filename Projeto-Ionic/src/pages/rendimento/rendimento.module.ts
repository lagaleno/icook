import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RendimentoPage } from './rendimento';

@NgModule({
  declarations: [
    RendimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(RendimentoPage),
  ],
})
export class RendimentoPageModule {}
