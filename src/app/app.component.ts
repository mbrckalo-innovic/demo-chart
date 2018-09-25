import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  xLabels = ['Jul 20', 'Jul 21', 'Jul 22', 'Jul 23', 'Jul 24', 'Jul 25', 'Jul 26'];
  lineChartExample = {
    label: 'Control Group',
    data: [
      1100,
      1000,
      900,
      1100,
      1500,
      850,
      1400,
    ]
  };
  barChartExample = {
    label: 'Loyality Group',
    data: [
      1300,
      1200,
      1300,
      1600,
      1700,
      1300,
      1900
    ]
  };
}
