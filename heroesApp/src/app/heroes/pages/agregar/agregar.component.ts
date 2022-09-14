import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles:[`
  img {
    width:100%;
    border-radius:5px;
  }
  `]
})
export class AgregarComponent implements OnInit {

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog ) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return;
    }

    this.activatedRoute.params
    .pipe(

      switchMap( ({id}) => this.heroesService.getHeroe(id) )
    )
    .subscribe( heroe => this.heroe = heroe);
  }

  publishers = [
    {
      id:'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe ={
    superhero:'',
    alter_ego:'',
    characters: '',
    first_appearance:'',
    publisher: Publisher.DCComics,
    alt_img:''
  }

  guardar(){

    if(this.heroe.superhero.length == 0){
      return
    }

    if(this.heroe.id){
      //actualiza
      this.heroesService.actualizarHeroe(this.heroe)
        .subscribe( heroe => this.mostrarSnackBar('Registro actualizado'))
    }else{
      //crear registro
      this.heroesService.agregarHeroe(this.heroe)
          .subscribe( heroe => {
            console.log('respuesta', heroe)
            this.mostrarSnackBar('Registro creado')
            this.router.navigate(['/heroes/editar', heroe.id])
          })
    }
  } 

  borrarHeroe(){

   const dialog = this.dialog.open(ConfirmarComponent, {
      width:'250px',
      data: this.heroe
    })
    dialog.afterClosed().subscribe(
      (result) => {
        if(result){
          this.heroesService.borrarHeroe( this.heroe.id!)
          .subscribe( resp => {
            this.router.navigate(['/heroes'])
          })
        }
      }
    )

  } 

  mostrarSnackBar(mensaje:string){
    this.snackBar.open(mensaje, 'ok!', {
      duration: 2000
    })
  }

}
