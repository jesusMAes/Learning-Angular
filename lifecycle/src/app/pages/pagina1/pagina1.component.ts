import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html' 
})
export class Pagina1Component implements
   OnInit, OnChanges, DoCheck,AfterContentInit,AfterContentChecked,
   AfterViewInit, AfterViewChecked, OnDestroy{

  constructor() { 
    console.log('constructor')
  }
  ngOnInit(): void {
    console.log('ng on init')
  }
  
  ngOnChanges(): void {
    console.log('on changes')
  }
  ngAfterViewInit(): void {
    console.log('After view init')
    
  }
  ngAfterViewChecked(): void {
    console.log('After view checked')

  }
  ngOnDestroy(): void {
    console.log('On destroy')

  }
  ngAfterContentChecked(): void {
    console.log('After content checked')

  }
  ngAfterContentInit(): void {
    console.log('After content init')

  }
  ngDoCheck(): void {
    console.log('Do check')

  }

  guardar(){
    
  }


}
