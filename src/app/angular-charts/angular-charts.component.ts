import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-charts',
  templateUrl: './angular-charts.component.html',
  styleUrls: ['./angular-charts.component.css']
})
export class AngularChartsComponent implements OnInit {

  data: object = [];
  xAxis: object = {};
  yAxis: object = {};
  chartTitle: string = ''
  legend: object = {}
  markerSettings : object = {}
  tooltipSettings : object = {}
  chartData: Object = [];
  primaryXAxis: object = {};
  secondTitle : string = ''
  constructor() { }

  ngOnInit(): void {
    this.chartTitle = "Sales Analysis"
    this.secondTitle = 'BarGraph Example'
    this.data = [{ month: 'Jan', sales: 35 }, { month: 'Feb', sales: 34 }, { month: 'Mar', sales: 45 }, { month: 'Apr', sales: 50 }, { month: 'May', sales: 55 }, { month: 'Jun', sales: 42 }, { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 32 }, { month: 'Sep', sales: 25 }, { month: 'Oct', sales: 65 }, { month: 'Nov', sales: 35 }, { month: 'Dec', sales: 48 },];

    this.chartData = [
      { month: 'Jan', sales: 35, sales1: 28 }, { month: 'Feb', sales: 28, sales1: 35 },
      { month: 'Mar', sales: 34, sales1: 32 }, { month: 'Apr', sales: 32, sales1: 34 },
      { month: 'May', sales: 40, sales1: 32 }, { month: 'Jun', sales: 32, sales1: 40 },
      { month: 'Jul', sales: 35, sales1: 55 }, { month: 'Aug', sales: 55, sales1: 35 },
      { month: 'Sep', sales: 38, sales1: 30 }, { month: 'Oct', sales: 30, sales1: 38 },
      { month: 'Nov', sales: 25, sales1: 32 }, { month: 'Dec', sales: 32, sales1: 25 }

        ];
        this.primaryXAxis = {
            valueType: 'Category'
        };



    this.tooltipSettings = {
      enable: true
    }

    this.markerSettings = {
      visible: true,
      dataLabel : {
        visible: true
      }
    }
    this.xAxis = {
      title: 'Month',
      valueType: 'Category'
    }
    this.yAxis = {
      title: 'Sales'
    }
    this.legend = {
      visible: true
    }
  }

}
