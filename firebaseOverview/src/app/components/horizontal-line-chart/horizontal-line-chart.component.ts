import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-horizontal-line-chart',
  templateUrl: './horizontal-line-chart.component.html',
  styleUrls: ['./horizontal-line-chart.component.css'],
})
export class HorizontalLineChartComponent implements OnDestroy {
  data = [
    {
      "name": "Game 1",
      "value": 15
    },
    {
      "name": "Game 2",
      "value": 5
    },
    {
      "name": "Game 3",
      "value": 20
    },
    {
      "name": "Game 4",
      "value": 12
    }
  ];;

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Games';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votes';

  colorScheme = 'nightLights';

  interval;

  constructor() {
    this.interval = setInterval(() => {
      const newValues = [...this.data];

      for (const item of newValues){
        item.value = Math.round( Math.random() * 500 );
      }

      this.data = [...newValues];
    }, 1500)
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
