import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Servicio } from 'src/app/models/servicios.models';
import { Usuario } from 'src/app/models/usuario.models';
import { ServiciosService } from 'src/app/services/servicios.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { HotelesService } from 'src/app/services/hoteles.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-servicios-cliente',
  templateUrl: './servicios-cliente.component.html',
  styleUrls: ['./servicios-cliente.component.scss'],
  providers: [ServiciosService,HotelesService,UsuariosService]

})
export class ServiciosClienteComponent implements OnInit {
  public servicioModelGet: Servicio;
  public servicioModelPost: Servicio;
  public servicioModelGetId: Servicio;

  public identidad = localStorage.getItem('identidad');

  public token;
  constructor(public _activatedRoute: ActivatedRoute,public _hotelService: HotelesService,public _serviciosService: ServiciosService) {
    this.token = this._hotelService.obtenerToken();  

   }

   ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idHotel'));
      this.getServicioHotel(dataRuta.get('idHotel'));
    })
  }

  getServicioHotel(idHotel){
    this._hotelService.obtenerServicioHotel(idHotel).subscribe({
      next:(response:any)=>{
        this.servicioModelGet = response.servicios;
      },
      error:(err)=>alert(err.error.mensaje)
    })
  }

  getServicios() {
    this._serviciosService.obtenerServicios(this.token).subscribe(
      (response)=>{
        this.servicioModelGet = response.servicios;
        console.log(this.servicioModelGet);
      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }

}
