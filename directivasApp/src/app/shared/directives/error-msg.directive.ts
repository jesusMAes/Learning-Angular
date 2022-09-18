 
import { Directive, OnInit, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  constructor(private el:ElementRef) {
    console.log('constructor directive')
    this.htmlElement = el 
   }
  ngOnInit(): void {
    console.log('ngoninit en el directiva')
    this.setColor();
    this.setMensaje();
    this.setClase()
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
    
  htmlElement: ElementRef;
 @Input() color: string = 'red';
 @Input() mensaje:string = 'Este campo es necesario'

  setColor(){
    this.htmlElement.nativeElement.style.color = this.color
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerText = this.mensaje
  }

  setClase(){
    this.htmlElement.nativeElement.classList.add('form-text') 
  }

}
