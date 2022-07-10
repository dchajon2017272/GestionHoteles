import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchReservacion'
})
export class SearchReservacionPipe implements PipeTransform {

  transform(reservacions: any, searchReservacion: any) {
    if(searchReservacion == undefined){
      return reservacions;
    }else{
      return reservacions.filter(reservacion =>{
        return reservacion.nombre.toLowerCase().includes(searchReservacion.toLowerCase()) || 
        reservacion.nombreEvento.toLowerCase().includes(searchReservacion.toLowerCase()) || 
        reservacion.nombreServicio.toLowerCase().includes(searchReservacion.toLowerCase()) ||
        reservacion.numeroDeHabitacion.toLowerCase().includes(searchReservacion.toLowerCase()) ||
        reservacion.idUsuario.toLowerCase().includes(searchReservacion.toLowerCase()) 
         
      })
    }

  }

}
