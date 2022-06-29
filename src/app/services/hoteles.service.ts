import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel.models';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HotelesService {
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


  obtenerHoteles(token): Observable<any>{
      let headersToken = this.headersVariable.set('Authorization', token)

      return this._http.get(this.url + '/hoteles', { headers: headersToken} )

  }

  agregarHotel(params): Observable<any>{
    return this._http.post(environment.apiURL + '/agregarHotel', params, {headers:this.headersVariable})
  }

  obtenerHotelId(id : String): Observable<any> {
    return this._http.get(this.url + '/hoteles/' + id, { headers: this.headersVariable })
  }


  editarHotel(modeloHotel: Hotel): Observable<any> {
    let parametros = JSON.stringify(modeloHotel);

    return this._http.put(this.url + '/editarHotel/' + modeloHotel._id, parametros, {headers: this.headersVariable})
  }

  eliminarHotel(id : String): Observable<any> {

    return this._http.delete(this.url + '/eliminarHotel/' + id, { headers: this.headersVariable })
  }

}
