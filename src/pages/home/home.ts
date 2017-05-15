import { Component } from '@angular/core';
import { NavController, IonicPage, ViewController, ModalController, Platform, NavParams  } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { PersonasService } from '../../providers/personas-service/personas-service';
import { RecomendacionesService } from '../../providers/recomendaciones-service/recomendaciones-service';
 
import { Hometab1Page } from '../hometab1/hometab1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  username = '';
  email = '';
  notificaciones = '';

  personasFavoritas: any;
  recomendacionesDashboard: any;

  constructor(public navCtrl: NavController, private auth: AuthService, private personas:PersonasService, private recomendaciones:RecomendacionesService, public modalCtrl: ModalController) {
  	let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
    this.notificaciones = info['notificaciones'];

    personas.data().subscribe(favoritos => {
        this.personasFavoritas = favoritos;
        console.log(this.personasFavoritas);
    });

    recomendaciones.data().subscribe(recomendados => {
        this.recomendacionesDashboard = recomendados;
        console.log(this.recomendacionesDashboard);
    });
    
  }

  goTab1(){
    this.navCtrl.push(Hometab1Page);
  }


  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }

  /*openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalpersonasPage, characterNum);
    modal.present();
  }*/
}


