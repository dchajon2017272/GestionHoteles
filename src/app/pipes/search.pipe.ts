import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(hotels: any, search: any) {
    if(search == undefined){
      return hotels;
    }else{
      return hotels.filter(hotel =>{
        return hotel.nombre.toLowerCase().includes(search.toLowerCase()) || hotel.direccion.toLowerCase().includes(search.toLowerCase())
        

         
      })
    }

  }

}
