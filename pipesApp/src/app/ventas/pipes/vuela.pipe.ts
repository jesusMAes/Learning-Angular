import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
 name: 'vuela'
})
export class vuelaPipe implements PipeTransform {



  transform( value:boolean ):string {


    return (value) ? 'vuela' : 'no vuela'
  }
}