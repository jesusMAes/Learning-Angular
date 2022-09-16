import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  
 nombreApellidoPattern:string = '([a-zA-Z]+) ([a-zA-z]+)';
 emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

 noPuedeSerStrider( control: FormControl) {
  const valor: string = control.value?.trim().toLowerCase();
  if(valor === 'strider'){
    //return error
    return {
      noStrider: true
      //al regresar un objeto se considera error
    }
  }

  return null
}

camposIguales( campo1: string, campo2:string){

  return (formGroup: AbstractControl): ValidationErrors |null=> {
    const pass1 = formGroup.get(campo1)?.value;
    const pass2 = formGroup.get(campo2)?.value;

    if(pass1 != pass2){
      formGroup.get(campo2)?.setErrors({noIguales: true})
      return {
        noIguales: true
      }
    }

    formGroup.get(campo2)?.setErrors(null)
    return null
  }
}

}
