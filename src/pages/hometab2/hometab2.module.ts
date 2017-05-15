import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hometab2Page } from './hometab2';

@NgModule({
  declarations: [
    Hometab2Page,
  ],
  imports: [
    IonicPageModule.forChild(Hometab2Page),
  ],
  exports: [
    Hometab2Page
  ]
})
export class Hometab2PageModule {}
