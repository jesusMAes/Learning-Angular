import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
 name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {



  transform( value:string, enMayuscula?:boolean ):string {

    if(enMayuscula == false){return value.toLowerCase()}
    return value.toUpperCase()
  }
}