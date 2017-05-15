import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PersonasServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PersonasService {

	static get parameters() {
        return [[Http]];
    }
   
	constructor(public http: Http) {
	    
	}

    data() {
        var url = 'assets/json/personas.json';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }
 
}
