import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
/**
 * Generated class for the LostpassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lostpass',
  templateUrl: 'lostpass.html',
})
export class LostpassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LostpassPage');
  }
  goRegister(){
  	this.navCtrl.pop(LoginPage);
  }
  
  lostPass(){

  }
}
