import { FormControl } from "@angular/forms";


  export const nombreApellidoPattern:string = '([a-zA-Z]+) ([a-zA-z]+)';
  export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  export const noPuedeSerStrider =( control: FormControl) => {
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