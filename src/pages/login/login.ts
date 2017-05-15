import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage, ModalController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { RegistroPage } from '../registro/registro';
import { LostpassPage } from '../lostpass/lostpass';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public modalCtrl: ModalController) { }
 
  goRegister(){
  	this.nav.push(RegistroPage);
  }
  loginNow(){
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
        this.nav.push(HomePage);
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  loginFacebook(){
  	console.log('facebook');
  }

  presentModal() {
    let modal = this.modalCtrl.create(LostpassPage);
    modal.present();
  }
}

