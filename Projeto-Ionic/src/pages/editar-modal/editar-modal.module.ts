import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarModalPage } from './editar-modal';

@NgModule({
  declarations: [
    EditarModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarModalPage),
  ],
})
export class EditarModalPageModule {}
