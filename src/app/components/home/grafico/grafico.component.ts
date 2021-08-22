import { Component, OnInit } from '@angular/core';
import  {environment} from 'src/environments/environment';



@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['DOSES APLICADAS', 'DOSES ELABORADAS', 'DOSES VENCIDAS'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [environment.jsonGraficoPfizer.dosesAplicadas, environment.jsonGraficoPfizer.dosesElaboradas, environment.jsonGraficoPfizer.dosesVencidas], label: `${environment.jsonGraficoPfizer.vacina}`},
    { data: [environment.jsonGraficoCoronavac.dosesAplicadas, environment.jsonGraficoCoronavac.dosesElaboradas, environment.jsonGraficoCoronavac.dosesVencidas], label: `${environment.jsonGraficoCoronavac.vacina}`}
  ];


}
