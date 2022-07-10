import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRoom'
})
export class SearchRoomPipe implements PipeTransform {

  transform(habitacions: any, searchRoom: any) {
    if(searchRoom == undefined){
      return habitacions;
    }else{
      return habitacions.filter(habitacion =>{
        return habitacion.disponible.toLowerCase().includes(searchRoom.toLowerCase()) 
        

         
      })
    }

  }

}
