import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {RegistroPage} from '../registro/registro';



/**
 * Generated class for the InicioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  /*pa saber si ta bien*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
 
  goRegister(){
  	this.navCtrl.push(RegistroPage);
  }
  goLogin(){
  	this.navCtrl.push(LoginPage);
  }
}
