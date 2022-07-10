import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Hotel } from 'src/app/models/hotel.models';
import { Usuario } from 'src/app/models/usuario.models';
import { HotelesService } from 'src/app/services/hoteles.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss'],
  providers: [HotelesService,UsuariosService]

})
export class HotelesComponent implements OnInit {
  public usuarioModelGet: Usuario;

  public hotelModelGet: Hotel;

  public hotelModelPost: Hotel;
  public hotelModelGetId: Hotel;

  public identidad = localStorage.getItem('identidad');

  public token;
  public search;

  constructor(private _hotelService: HotelesService,private _usuarioService: UsuariosService) {
    this.hotelModelPost = new Hotel('','','','','');
    this.hotelModelGetId = new Hotel('','','','','');

    this.token = this._hotelService.obtenerToken();  
   }

  ngOnInit(): void {
    this.getHoteles();
  }

  getHoteles() {
    this._hotelService.obtenerHoteles(this.token).subscribe(
      (response)=>{
        this.hotelModelGet = response.hoteles;
        console.log(this.hotelModelGet);
      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }

  postHoteles(){
    this._hotelService.agregarHotel(this.hotelModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getHoteles();
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

  getHotelId(idHotel){
    this._hotelService.obtenerHotelId(idHotel).subscribe(
      (response) => {
        console.log(response);
        this.hotelModelGetId = response.hotel;
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }
  
  putHoteles(){
    this._hotelService.editarHotel(this.hotelModelGetId).subscribe(
      (response)=>{
        console.log(response);
        this.getHoteles()
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

  deleteHoteles(idHotel) {
    this._hotelService.eliminarHotel(idHotel).subscribe(
      (response)=>{
        console.log(response);
        this.getHoteles();
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }
}
