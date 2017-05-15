import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
export class User {
  name: string;
  email: string;
  notificaciones: string;
  constructor(name: string, email: string, notificaciones: string) {
    this.name = name;
    this.email = email;
    this.notificaciones = notificaciones;
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Inserta tus datos");
    } else {
      return Observable.create(observer => {
        // Aqui puedes editar tu servicio para enviar a bakend para un check real
        //hansis programame papu
        let access = (credentials.password === "pass" && credentials.email === "email");
        //reemplazame por tu llamada https, se que eres barbaro
        this.currentUser = new User('Frank', 'frank@maidenassistant.com','2');
        observer.next(access);
        observer.complete();
      });
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Inserta tus datos");
    } else {
      // revisa tus credenciales
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}