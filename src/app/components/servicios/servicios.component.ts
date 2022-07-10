import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Servicio } from 'src/app/models/servicios.models';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
  providers: [ServiciosService]

})
export class ServiciosComponent implements OnInit {

  public servicioModelGet: Servicio;
  public servicioModelPost: Servicio;
  public servicioModelGetId: Servicio;

  public identidad = localStorage.getItem('identidad');

  public token;


  constructor(private _serviciosService: ServiciosService,private _usuarioService: UsuariosService) { 
    this.servicioModelPost = new Servicio('','','',0,'','');
    this.servicioModelGetId = new Servicio('','','',0,'','');

    this.token = this._serviciosService.obtenerToken(); 
  }

  ngOnInit(): void {
    this.getServicios();
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

  postServicios(){
    this._serviciosService.agregarServicio(this.servicioModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getServicios();
      },
      (error)=>{
        console.log(<any>error);
      }
    )

  }

  getServicioId(idServicio){
    this._serviciosService.obtenerServicioId(idServicio).subscribe(
      (response) => {
        console.log(response);
        this.servicioModelGetId = response.servicio;
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }
  

  putServicios(){
    this._serviciosService.editarServicio(this.servicioModelGetId).subscribe(
      (response)=>{
        console.log(response);
        this.getServicios()
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }

  deleteServicios(idServicio) {
    this._serviciosService.eliminarServicio(idServicio).subscribe(
      (response)=>{
        console.log(response);
        this.getServicios();
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

}
