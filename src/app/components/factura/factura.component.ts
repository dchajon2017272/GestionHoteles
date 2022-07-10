import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Factura } from 'src/app/models/factura.models';
import { ReservacionesService } from 'src/app/services/reservaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss'],
  providers: [ReservacionesService]

})
export class FacturaComponent implements OnInit {
  public facturaModelGet: Factura;
  public facturaModelPost: Factura;

  public identidad = localStorage.getItem('identidad');

  public token;

  constructor(private _facturaService: ReservacionesService) {
    this.facturaModelPost = new Factura('','','','','','');

    this.token = this._facturaService.obtenerToken(); 
   }

  ngOnInit(): void {
    this.getFacturas();
  }

  getFacturas() {
    this._facturaService.obtenerFactura(this.token).subscribe(
      (response)=>{
        this.facturaModelGet = response.facturas;
        console.log(this.facturaModelGet);
      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }

  postFacturas(){
    this._facturaService.generarFactura(this.facturaModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getFacturas();
      },
      (error)=>{
        console.log(<any>error);
      }
    )

  }

}
