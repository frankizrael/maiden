import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hometab1Page } from './hometab1';

@NgModule({
  declarations: [
    Hometab1Page,
  ],
  imports: [
    IonicPageModule.forChild(Hometab1Page),
  ],
  exports: [
    Hometab1Page
  ]
})
export class Hometab1PageModule {}
