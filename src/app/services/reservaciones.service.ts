import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservacion } from '../models/reservacion.models';
import { Factura } from '../models/factura.models';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReservacionesService {
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


  obtenerReservacion(token): Observable<any>{
      let headersToken = this.headersVariable.set('Authorization', token)

      return this._http.get(this.url + '/reservaciones', { headers: headersToken} )

  }

  /*agregarHotel(params): Observable<any>{
    return this._http.post(environment.apiURL + '/agregarHotel', params, {headers:this.headersVariable})
  }*/

  agregarReservacion(modeloReservacion: Reservacion): Observable<any>{
    let parametros = JSON.stringify(modeloReservacion);
  
    return this._http.post(this.url + '/agregarReservacion', parametros, {headers:this.headersToken})
  }
  

  obtenerReservacionId(id : String): Observable<any> {
    return this._http.get(this.url + '/reservaciones/' + id, { headers: this.headersVariable })
  }

  editarReservacion(modeloReservacion: Reservacion): Observable<any> {
    let parametros = JSON.stringify(modeloReservacion);

    return this._http.put(this.url + '/editarReservacion/' + modeloReservacion._id, parametros, {headers: this.headersVariable})
  }

  eliminarReservacion(id : String): Observable<any> {

    return this._http.delete(this.url + '/eliminarReservacion/' + id, { headers: this.headersVariable })
  }

  generarFactura(modeloFactura: Factura): Observable<any>{
    let parametros = JSON.stringify(modeloFactura);
  
    return this._http.post(this.url + '/generarFactura', parametros, {headers:this.headersToken})
  }

  obtenerFactura(token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/facturas', { headers: headersToken} )

}
  

}
