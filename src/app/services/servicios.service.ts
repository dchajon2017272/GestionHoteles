import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel.models';
import { Servicio } from '../models/servicios.models';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
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


  obtenerServicios(token): Observable<any>{
      let headersToken = this.headersVariable.set('Authorization', token)

      return this._http.get(this.url + '/servicios', { headers: headersToken} )

  }

  /*agregarHotel(params): Observable<any>{
    return this._http.post(environment.apiURL + '/agregarHotel', params, {headers:this.headersVariable})
  }*/

  agregarServicio(modeloServicio: Servicio): Observable<any>{
    let parametros = JSON.stringify(modeloServicio);
  
    return this._http.post(this.url + '/agregarServicio', parametros, {headers:this.headersToken})
  }
  

  obtenerServicioId(id : String): Observable<any> {
    return this._http.get(this.url + '/servicios/' + id, { headers: this.headersVariable })
  }

  obtenerServicioHotel(id : String): Observable<any> {
    return this._http.get(this.url + '/servicioHotel/' + id, { headers: this.headersVariable })
  }


  editarServicio(modeloServicio: Servicio): Observable<any> {
    let parametros = JSON.stringify(modeloServicio);

    return this._http.put(this.url + '/editarServicio/' + modeloServicio._id, parametros, {headers: this.headersVariable})
  }

  eliminarServicio(id : String): Observable<any> {

    return this._http.delete(this.url + '/eliminarServicio/' + id, { headers: this.headersVariable })
  }

}
