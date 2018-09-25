import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild('chart') chartEl: ElementRef;
  chart: Chart;

  @Input() labels: any[];
  @Input() lineChart: any;
  @Input() barChart: any;

  constructor() {}

  ngOnInit() {
    this.chart = new Chart(this.chartEl.nativeElement.getContext('2d'), {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{
          type: 'line',
          label: this.lineChart.label,
          backgroundColor: 'rgb(54, 162, 235)',
          borderColor: 'rgb(54, 162, 235)',
          fill: false,
          lineTension: 0,
          pointRadius: 0,
          data: this.lineChart.data
        }, {
          type: 'bar',
          label: this.barChart.label,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'transparent',
          borderWidth: 30,
          data: this.barChart.data,
        }]
      },
      options: {
        legend: {
          position: 'bottom',
          reverse: true,
          labels: {
            fontSize: 14,
            fontStyle: 'bold',
            usePointStyle: true,
          },
        },
        responsive: false
      }
    });
  }
}
