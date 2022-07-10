import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Habitacion } from 'src/app/models/habitacion.models';
import { HotelesComponent } from '../hoteles/hoteles.component';
import { Usuario } from 'src/app/models/usuario.models';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';


@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.scss'],
  providers: [HabitacionesService,HotelesService,UsuariosService]

})
export class HabitacionesComponent implements OnInit {
  public habitacionModelGet: Habitacion;
  public identidad = localStorage.getItem('identidad');
  public token;

  public searchRoom;


  constructor(public _activatedRoute: ActivatedRoute,public _hotelService: HotelesService,public _habitacionesService: HabitacionesService) {
    this.token = this._hotelService.obtenerToken();  
   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idHotel'));
      this.getHabitacionHotel(dataRuta.get('idHotel'));
    })
  }

  getHabitacionHotel(idHotel){
    this._hotelService.obtenerHabitacionHotel(idHotel).subscribe({
      next:(response:any)=>{
        this.habitacionModelGet = response.habitaciones;
      },
      error:(err)=>alert(err.error.mensaje)
    })
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


}
