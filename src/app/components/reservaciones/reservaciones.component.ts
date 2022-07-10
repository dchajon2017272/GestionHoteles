import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Reservacion } from 'src/app/models/reservacion.models';
import { HotelesComponent } from '../hoteles/hoteles.component';
import { ReservacionesService } from 'src/app/services/reservaciones.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';
@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.scss'],
  providers: [ReservacionesService,HotelesService,UsuariosService]

})
export class ReservacionesComponent implements OnInit {
  public reservacionModelGet: Reservacion;
  public reservacionModelPost: Reservacion;

  public reservacionModelGetId: Reservacion;
  public identidad = localStorage.getItem('identidad');

  public searchReservacion;

  public token;
  constructor(public _activatedRoute: ActivatedRoute,public _hotelService: HotelesService,public _reservacionesService: ReservacionesService,
    private _usuarioService: UsuariosService) { 
      this.reservacionModelPost = new Reservacion('','','','','','','','');
      this.reservacionModelGetId = new Reservacion('','','','','','','','');
  
      this.token = this._hotelService.obtenerToken();  
     }

  ngOnInit(): void {
    this.getReservaciones();
  }

  getReservaciones() {
    this._reservacionesService.obtenerReservacion(this.token).subscribe(
      (response)=>{
        this.reservacionModelGet = response.reservaciones;
        console.log(this.reservacionModelGet);
      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }

  postReservaciones(){
    this._reservacionesService.agregarReservacion(this.reservacionModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getReservaciones();
      },
      (error)=>{
        console.log(<any>error);
      }
    )

  }

  getReservacionId(idReservacion){
    this._reservacionesService.obtenerReservacionId(idReservacion).subscribe(
      (response) => {
        console.log(response);
        this.reservacionModelGetId = response.reservacion;
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

  putReservaciones(){
    this._reservacionesService.editarReservacion(this.reservacionModelGetId).subscribe(
      (response)=>{
        console.log(response);
        this.getReservaciones()
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

  deleteReservaciones(idReservacion) {
    this._reservacionesService.eliminarReservacion(idReservacion).subscribe(
      (response)=>{
        console.log(response);
        this.getReservaciones();
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

}
