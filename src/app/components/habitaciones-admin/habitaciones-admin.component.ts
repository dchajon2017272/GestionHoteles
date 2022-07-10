import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Habitacion } from 'src/app/models/habitacion.models';
import { HotelesComponent } from '../hoteles/hoteles.component';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';
@Component({
  selector: 'app-habitaciones-admin',
  templateUrl: './habitaciones-admin.component.html',
  styleUrls: ['./habitaciones-admin.component.scss'],
  providers: [HabitacionesService,HotelesService,UsuariosService]

})
export class HabitacionesAdminComponent implements OnInit {
  public habitacionModelGet: Habitacion;
  public habitacionModelPost: Habitacion;
  
  public searchRoom;

  public habitacionModelGetId: Habitacion;
  public identidad = localStorage.getItem('identidad');

  public token;
  constructor(public _activatedRoute: ActivatedRoute,public _hotelService: HotelesService,public _habitacionesService: HabitacionesService,
    private _usuarioService: UsuariosService) {
    this.habitacionModelPost = new Habitacion('','','',0,'','','');
    this.habitacionModelGetId = new Habitacion('','','',0,'','','');

    this.token = this._hotelService.obtenerToken();  
   }

  ngOnInit(): void {
    this.getHabitaciones();
  }

  getHabitaciones() {
    this._habitacionesService.obtenerHabitaciones(this.token).subscribe(
      (response)=>{
        this.habitacionModelGet = response.habitaciones;
        console.log(this.habitacionModelGet);
      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }

  postHabitaciones(){
    this._habitacionesService.agregarHabitacion(this.habitacionModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getHabitaciones();
      },
      (error)=>{
        console.log(<any>error);
      }
    )

  }

  getHabitacionId(idHabitacion){
    this._habitacionesService.obtenerHabitacionId(idHabitacion).subscribe(
      (response) => {
        console.log(response);
        this.habitacionModelGetId = response.habitacion;
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }
  
  /*getHabitacionHotel(idHotel){
    this._hotelService.obtenerHabitacionHotel(idHotel).subscribe(
      (response) => {
        console.log(response);
        this.habitacionModelGet = response.habitaciones;
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }*/

  putHabitaciones(){
    this._habitacionesService.editarHabitacion(this.habitacionModelGetId).subscribe(
      (response)=>{
        console.log(response);
        this.getHabitaciones()
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

  deleteHabitaciones(idHabitacion) {
    this._habitacionesService.eliminarHabitacion(idHabitacion).subscribe(
      (response)=>{
        console.log(response);
        this.getHabitaciones();
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

}
