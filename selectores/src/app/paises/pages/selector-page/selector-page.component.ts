import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisSmall } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';
import { switchMap } from 'rxjs/operators';
import { ChildActivationStart } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html' 
})
export class SelectorPageComponent implements OnInit {

  constructor( 
    private fb:FormBuilder,
    private paisesService:PaisesService ) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones
    //Cuando cambie la region
    // this.miFormulario.get('region')?.valueChanges
    //   .subscribe( region => {

    //     this.paisesService.getPaisesPorRegion( region)
    //       .subscribe(paises => {
    //         this.paises = paises
    //       })
    //   })

    //version con switchMap
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( region =>{ 
          this.miFormulario.get('pais')?.reset('');
          this.cargando= true
        }),
        switchMap( region =>this.paisesService.getPaisesPorRegion( region) )
      ).subscribe( paises => {
        this.cargando= false;
        this.paises = paises
      })

    this.miFormulario.get('pais')?.valueChanges
        .pipe(
          tap( () => {
            this.fronteras = [];
            this.miFormulario.get('frontera')?.reset('');
            this.cargando= true
          }),
          switchMap( codigo  => this.paisesService.getPaisPorCodigo(codigo)),
          switchMap (pais => this.paisesService.getPaisesPorCodigo(pais?.borders!))
        )
        .subscribe( paises => {
          this.cargando= false
          this.fronteras = paises
          // this.fronteras = pais?.borders || [];

        })
  }//on init

  //llenar selectores
  regiones :string[] = [];
  paises: PaisSmall[] = [];
  // fronteras: string[] = [];
  fronteras: PaisSmall[] = [];

  //Ui
  cargando: boolean = false;

  miFormulario: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    pais: ['', [Validators.required]],
    frontera: ['', [Validators.required]]
    
  })

  guardar(){
    console.log(this.miFormulario.value)
  }

}
