import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eventos } from '../models/eventos.models';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EventosService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public headersToken = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.obtenerToken()
  })
  
  public identidad;
  public token;
  constructor(public _http: HttpClient) { }

  obtenerToken(){
    var token2 = localStorage.getItem("token");
    if(token2 != undefined){
      this.token = token2;
    } else {
      this.token = '';
    }

    return this.token;
  }

  obtenerIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem('identidad'));
    if(identidad2 != undefined){
      this.identidad = identidad2;
    } else {
      this.identidad = null;
    }

    return this.identidad;
  }


  obtenerEventos(token): Observable<any>{
      let headersToken = this.headersVariable.set('Authorization', token)

      return this._http.get(this.url + '/eventos', { headers: headersToken} )

  }

  /*agregarHotel(params): Observable<any>{
    return this._http.post(environment.apiURL + '/agregarHotel', params, {headers:this.headersVariable})
  }*/

  agregarEvento(modeloEvento: Eventos): Observable<any>{
    let parametros = JSON.stringify(modeloEvento);
  
    return this._http.post(this.url + '/agregarEvento', parametros, {headers:this.headersToken})
  }
  

  obtenerEventoId(id : String): Observable<any> {
    return this._http.get(this.url + '/eventos/' + id, { headers: this.headersVariable })
  }

  editarEvento(modeloEvento: Eventos): Observable<any> {
    let parametros = JSON.stringify(modeloEvento);

    return this._http.put(this.url + '/editarEvento/' + modeloEvento._id, parametros, {headers: this.headersVariable})
  }

  eliminarEvento(id : String): Observable<any> {

    return this._http.delete(this.url + '/eliminarEvento/' + id, { headers: this.headersVariable })
  }

}
