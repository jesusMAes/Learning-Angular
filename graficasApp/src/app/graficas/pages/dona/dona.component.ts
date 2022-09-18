import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html' 
})
export class DonaComponent  {

  constructor() { }

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
      backgroundColor: ["#C360FC", "#7C63E6", "#5782FF"] },
      
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
 

}
