import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Eventos } from 'src/app/models/eventos.models';
import { EventosService } from 'src/app/services/eventos.service';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  providers: [EventosService]

})
export class EventosComponent implements OnInit {
 
  public eventoModelGet: Eventos;
  public eventoModelPost: Eventos;
  public eventoModelGetId: Eventos;

  public identidad = localStorage.getItem('identidad');

  public token;

  constructor(private _eventosService: EventosService,private _usuarioService: UsuariosService) { 
    this.eventoModelPost = new Eventos('','','',0,'','');
    this.eventoModelGetId = new Eventos('','','',0,'','');

    this.token = this._eventosService.obtenerToken();  
  }

  ngOnInit(): void {
    this.getEventos();
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

  postEventos(){
    this._eventosService.agregarEvento(this.eventoModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getEventos();
      },
      (error)=>{
        console.log(<any>error);
      }
    )

  }

  getEventoId(idEvento){
    this._eventosService.obtenerEventoId(idEvento).subscribe(
      (response) => {
        console.log(response);
        this.eventoModelGetId = response.evento;
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }
  

  putEventos(){
    this._eventosService.editarEvento(this.eventoModelGetId).subscribe(
      (response)=>{
        console.log(response);
        this.getEventos()
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

  deleteEventos(idEvento) {
    this._eventosService.eliminarEvento(idEvento).subscribe(
      (response)=>{
        console.log(response);
        this.getEventos();
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

}
