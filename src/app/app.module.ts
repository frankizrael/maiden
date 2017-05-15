import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AuthService } from './../providers/auth-service';
import { PersonasService } from './../providers/personas-service/personas-service';
import { RecomendacionesService } from './../providers/recomendaciones-service/recomendaciones-service';

import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InicioPage } from '../pages/inicio/inicio';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { LostpassPage } from '../pages/lostpass/lostpass';
import { Hometab1Page } from '../pages/hometab1/hometab1';
import { Hometab2Page } from '../pages/hometab2/hometab2';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InicioPage,
    LoginPage,
    RegistroPage,
    LostpassPage,
    Hometab1Page,
    Hometab2Page,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InicioPage,
    LoginPage,
    RegistroPage,
    LostpassPage,
    Hometab1Page,
    Hometab2Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    PersonasService,
    RecomendacionesService,
  ]
})
export class AppModule {}
