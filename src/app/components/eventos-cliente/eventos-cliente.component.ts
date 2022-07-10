import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Eventos } from 'src/app/models/eventos.models';
import { Usuario } from 'src/app/models/usuario.models';
import { EventosService } from 'src/app/services/eventos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { HotelesService } from 'src/app/services/hoteles.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-eventos-cliente',
  templateUrl: './eventos-cliente.component.html',
  styleUrls: ['./eventos-cliente.component.scss'],
  providers: [EventosService,HotelesService,UsuariosService]

})
export class EventosClienteComponent implements OnInit {
  public eventoModelGet: Eventos;
  public eventoModelPost: Eventos;

  public eventoModelGetId: Eventos;
  public identidad = localStorage.getItem('identidad');

  public token;
  constructor(public _activatedRoute: ActivatedRoute,public _hotelService: HotelesService,public _eventosService: EventosService) { 
    
    this.token = this._hotelService.obtenerToken();  

  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idHotel'));
      this.getEventoHotel(dataRuta.get('idHotel'));
    })
  }

  getEventoHotel(idHotel){
    this._hotelService.obtenerEventoHotel(idHotel).subscribe({
      next:(response:any)=>{
        this.eventoModelGet = response.eventos;
      },
      error:(err)=>alert(err.error.mensaje)
    })
  }

  getEventos() {
    this._eventosService.obtenerEventos(this.token).subscribe(
      (response)=>{
        this.eventoModelGet = response.eventos;
        console.log(this.eventoModelGet);
      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }


}
