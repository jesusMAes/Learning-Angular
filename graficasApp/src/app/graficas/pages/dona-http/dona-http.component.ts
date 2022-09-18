import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

interface Usuarios  {
facebook:number,
youtube:number,
whatsapp:number,
facebookMessenger:number,
instagram: number
}

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html' 
})
export class DonaHttpComponent implements OnInit {

  constructor( private graficaService: GraficasService) { }

  ngOnInit(): void {

    this.graficaService.getUsuariosRedesSociales()
      .subscribe(usuarios => {  
          this.doughnutChartData = {
            labels: Object.keys(usuarios),
            datasets: [{data:Object.values(usuarios),  backgroundColor: ["#C360FC", "#7C63E6", "#5782FF", "#5732FF", "#2432FF"]}]
          } 
      })
  } 
 
    // Doughnut
    public doughnutChartLabels: string[] =  []
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [] },
      ],
    };
    
  public doughnutChartType: ChartType = 'doughnut';
}
