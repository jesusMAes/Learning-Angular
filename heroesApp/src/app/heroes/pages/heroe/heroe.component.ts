import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  img {
    width:100%;
    border-radius: 5px;
  }
  `]
})
export class HeroeComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute,
    private heroesService:HeroesService,
    private router:Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({id}) => {
      this.heroesService.getHeroe(id)
        .subscribe( heroe =>{
          this.heroe = heroe;
        })
    })

  }

  heroe!: Heroe;

  regresar(){
    this.router.navigate(['heroes/listado'])
  }
}
