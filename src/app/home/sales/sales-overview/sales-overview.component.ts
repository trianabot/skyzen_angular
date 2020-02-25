import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);


@Component({
  selector: 'app-sales-overview',
  templateUrl: './sales-overview.component.html',
  styleUrls: ['./sales-overview.component.scss']
})
export class SalesOverviewComponent implements OnInit {
  attchart: any;
  attoptions: any;
  attdata: any = [
    {
      name: 'x',
      y: 450000000,
    },
    {
      name: 'y',
      y: 500000000
    },
    {
      name: 'z',
      y: 500000000
    }
  ];
  chart: any;
  chartoptions: any;

  paymentchart: any;
  paymentchartoptions: any;

  napachart: any;
  napachartoptions: any;
  tbachart: any;
  tbachartoptions: any;

  constructor() { }

  ngOnInit() {
    var netamount = [56,10,76,21,46,9,36,6,50,5];
    var pendingamount = [79,9,48,6,55,5,90,9,85,8]
    this.attChart(this.attdata);
    this.paymentChart(this.attdata);
    this.napaChart(netamount, pendingamount);
    this.tbaChart(netamount, pendingamount);
    // this.samplechart();
  }

  samplechart() {
    this.chartoptions = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Line 1',
          data: [1, 2, 3]
        }
      ]
    }
    this.chart = new Chart(this.chartoptions);
  }

  attChart(data) {
    var $this = this;
    var tooltipEnabled = true;
    this.attoptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: '#ffffff',
        options3d: {
          enabled: true,
          alpha: 55,
          beta: 0
        }
      },
      credits: {
        enabled: false
      },
      title: {
        text: null
      },
      accessibility: {
        point: {
          valueSuffix: "%"
        }
      },
      tooltip: {
        enabled: true,
        // pointFormat: "<b>{series.name}</b>: {point.y:.1f}"
        formatter: function() {
          console.log(this.point.name, this.point.y, this.series.name)
          var ret = '',
              multi,
              axis = this.point.y,
              numericSymbols = ['k', 'M', 'G', 'T', 'P', 'E'],
              i = numericSymbols.length;
          while (i-- && ret === '') {
              multi = Math.pow(1000, i + 1);
              if (axis >= multi && numericSymbols[i] !== null) {
                  ret = this.point.name + ':' + '$' + + Highcharts.numberFormat(this.point.y / multi, 2) + numericSymbols[i];
              }
          }
          console.log(ret);
          return ret;
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          depth: 45,
          size : 200,
          dataLabels: {
            enabled: true,
            // format: "{point.name}"
            useHTML: true,
            formatter: function() {

              var ret = '',
                  multi,
                  axis = this.point.y,
                  numericSymbols = ['k', 'M', 'G', 'T', 'P', 'E'],
                  i = numericSymbols.length;
              while (i-- && ret === '') {
                  multi = Math.pow(1000, i + 1);
                  if (axis >= multi && numericSymbols[i] !== null) {
                      ret = '<span style="color: #333;font-family: Arial !importent;">'+this.point.name + '</span>:' + '&nbsp;' + '<span style="color:#000000; font-size:15px;font-family: "Univers 67 Condensed Bold !importent;"">$' + Highcharts.numberFormat(this.point.y / multi, 2) + numericSymbols[i] + '</span>';
                  }
              }
              // console.log(ret);
              return ret;
            }
          },
          showInLegend: false,
          slicedOffset: 40
        }
      },
      series: 
      [
        {
          type: "pie",
          name: "Supplier Spend",
          data: data,
          point: {
            events: {
                click: function (event) {
                    // this.series.chart.update({
                    //   tooltip: {
                    //     enabled: tooltipEnabled,
                    //   }
                    // });
                    // tooltipEnabled = tooltipEnabled ? false : true;
                    // $this.updateTableData(this.name,event.point.color);
                },
                mouseOut: function (event) {
                  // $this.updateTableData(event.target.name,event.target.color);
                  // $this.setTranslation(this, false);
                },
                mouseOver: function(event) {
                  // console.log(event.target.name, event.target.color);
                  // $this.updateTableData(event.target.name,event.target.color);
                  // $this.setTranslation(this, true);
                }
            }
        }
        }
      ]
    }
    this.attchart = new Chart(this.attoptions);
  }

  paymentChart(data) {
      var $this = this;
      var tooltipEnabled = true;
      this.paymentchartoptions = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          backgroundColor: '#ffffff',
          options3d: {
            enabled: true,
            alpha: 55,
            beta: 0
          }
        },
        credits: {
          enabled: false
        },
        title: {
          text: null
        },
        accessibility: {
          point: {
            valueSuffix: "%"
          }
        },
        tooltip: {
          enabled: true,
          // pointFormat: "<b>{series.name}</b>: {point.y:.1f}"
          formatter: function() {
            console.log(this.point.name, this.point.y, this.series.name)
            var ret = '',
                multi,
                axis = this.point.y,
                numericSymbols = ['k', 'M', 'G', 'T', 'P', 'E'],
                i = numericSymbols.length;
            while (i-- && ret === '') {
                multi = Math.pow(1000, i + 1);
                if (axis >= multi && numericSymbols[i] !== null) {
                    ret = this.point.name + ':' + '$' + + Highcharts.numberFormat(this.point.y / multi, 2) + numericSymbols[i];
                }
            }
            console.log(ret);
            return ret;
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            depth: 45,
            size : 200,
            dataLabels: {
              enabled: true,
              // format: "{point.name}"
              useHTML: true,
              formatter: function() {
  
                var ret = '',
                    multi,
                    axis = this.point.y,
                    numericSymbols = ['k', 'M', 'G', 'T', 'P', 'E'],
                    i = numericSymbols.length;
                while (i-- && ret === '') {
                    multi = Math.pow(1000, i + 1);
                    if (axis >= multi && numericSymbols[i] !== null) {
                        ret = '<span style="color: #333;font-family: Arial !importent;">'+this.point.name + '</span>:' + '&nbsp;' + '<span style="color:#000000; font-size:15px;font-family: "Univers 67 Condensed Bold !importent;"">$' + Highcharts.numberFormat(this.point.y / multi, 2) + numericSymbols[i] + '</span>';
                    }
                }
                // console.log(ret);
                return ret;
              }
            },
            showInLegend: false,
            slicedOffset: 40
          }
        },
        series: 
        [
          {
            type: "pie",
            name: "Supplier Spend",
            data: data,
            point: {
              events: {
                  click: function (event) {
                      // this.series.chart.update({
                      //   tooltip: {
                      //     enabled: tooltipEnabled,
                      //   }
                      // });
                      // tooltipEnabled = tooltipEnabled ? false : true;
                      // $this.updateTableData(this.name,event.point.color);
                  },
                  mouseOut: function (event) {
                    // $this.updateTableData(event.target.name,event.target.color);
                    // $this.setTranslation(this, false);
                  },
                  mouseOver: function(event) {
                    // console.log(event.target.name, event.target.color);
                    // $this.updateTableData(event.target.name,event.target.color);
                    // $this.setTranslation(this, true);
                  }
              }
          }
          }
        ]
      }
      this.paymentchart = new Chart(this.paymentchartoptions);
    }

    napaChart(netamount, pendingamount) {
      this.napachartoptions = {
        chart: {
          backgroundColor: '#ffffff',
          type: 'line',
          // plotAreaWidth: 300,
          // plotAreaHeight: 300,
          style: {
              color: 'white',
  
          },
      },
      legend: {
          itemStyle: {
              color: 'black'
          },
          align: 'right',
  
          verticalAlign: 'top',
          floating: false,
          style: {
              color: '#fff'
          }
      },
  
      credits: {
          enabled: false
      },
      title: {
          text: null,
          style: {
              color: '#fff'
          }
      },
      tooltip: {
        enabled: true,
        valueSuffix: '',
      //   formatter: function () {
      //     // console.log(Highcharts, this);
      //     var ret = '',
      //         multi,
      //         axis = this.series.yAxis,
      //         numericSymbols = ['k', 'M', 'G', 'T', 'P', 'E'],
      //         i = numericSymbols.length;
      //     while (i-- && ret === '') {
      //         multi = Math.pow(1000, i + 1);
      //         if (axis.tickInterval >= multi && numericSymbols[i] !== null) {
      //             ret = this.series.name + ':' + '$' + + Highcharts.numberFormat(this.y / multi, 2) + numericSymbols[i];
      //         }
      //     }
      //     return ret;
      // }
      },
      plotOptions: {
           line: {
             marker:{
               enabled: false
             }
           },
        //   area: {
        //     marker:{
        //       enabled: false 
        //     },
        //     fillColor: {
        //         linearGradient: [0, 0, 0, 300],
        //         stops: [
        //             [0, '#ffe16a'],
        //             [1, '#fff0b8']
        //         ]
        //     }
        // }
      },
      xAxis: {
          // tickInterval: 1,
          // type: 'datetime',
          // categories: categories,
          labels: {
              enabled: true,
              family:'Univers 67 Condensed Bold',
              style: {
                  color: 'black'
              },
              format: '{value}',
          },
      },
      yAxis: {
          gridLineColor: 'transparent',
          labels: {
              enabled: true,
              // format: '{value}',
            //   formatter: function () {
            //     var exp, rounded,
            //     suffixes = ['K', 'M', 'G', 'T', 'P', 'E'];
            //   if (this.value == undefined) {
            //     return 0;
            //   }
          
            //   if (this.value < 1000) {
            //     return this.value;
            //   }
          
            //   exp = Math.floor(Math.log(this.value) / Math.log(1000));
          
            //   return (this.value / Math.pow(1000, exp)).toFixed(2) + suffixes[exp - 1]
            // },
              style: {
                  color: 'black'
              }
          },
  
          title: {
              text: null,
          },
      },
      series: [
        {
          name: 'Net Amount',
          data: netamount,
          color: '#1aa8a9'
  
      },
          {
              name: 'Pending Amount',
              data: pendingamount,
              color: '#333333'
          },
          
      ],
      }
      this.napachart = new Chart(this.napachartoptions);
    }

    tbaChart(netamount, pendingamount) {
      this.tbachartoptions = {
        chart: {
          backgroundColor: '#ffffff',
          type: 'line',
          // plotAreaWidth: 300,
          // plotAreaHeight: 300,
          style: {
              color: 'white',
  
          },
      },
      legend: {
          itemStyle: {
              color: 'black'
          },
          align: 'right',
  
          verticalAlign: 'top',
          floating: false,
          style: {
              color: '#fff'
          }
      },
  
      credits: {
          enabled: false
      },
      title: {
          text: null,
          style: {
              color: '#fff'
          }
      },
      tooltip: {
        enabled: true,
        valueSuffix: '',
      //   formatter: function () {
      //     // console.log(Highcharts, this);
      //     var ret = '',
      //         multi,
      //         axis = this.series.yAxis,
      //         numericSymbols = ['k', 'M', 'G', 'T', 'P', 'E'],
      //         i = numericSymbols.length;
      //     while (i-- && ret === '') {
      //         multi = Math.pow(1000, i + 1);
      //         if (axis.tickInterval >= multi && numericSymbols[i] !== null) {
      //             ret = this.series.name + ':' + '$' + + Highcharts.numberFormat(this.y / multi, 2) + numericSymbols[i];
      //         }
      //     }
      //     return ret;
      // }
      },
      plotOptions: {
           line: {
             marker:{
               enabled: false
             }
           },
        //   area: {
        //     marker:{
        //       enabled: false 
        //     },
        //     fillColor: {
        //         linearGradient: [0, 0, 0, 300],
        //         stops: [
        //             [0, '#ffe16a'],
        //             [1, '#fff0b8']
        //         ]
        //     }
        // }
      },
      xAxis: {
          // tickInterval: 1,
          // type: 'datetime',
          // categories: categories,
          labels: {
              enabled: true,
              family:'Univers 67 Condensed Bold',
              style: {
                  color: 'black'
              },
              format: '{value}',
          },
      },
      yAxis: {
          gridLineColor: 'transparent',
          labels: {
              enabled: true,
              // format: '{value}',
            //   formatter: function () {
            //     var exp, rounded,
            //     suffixes = ['K', 'M', 'G', 'T', 'P', 'E'];
            //   if (this.value == undefined) {
            //     return 0;
            //   }
          
            //   if (this.value < 1000) {
            //     return this.value;
            //   }
          
            //   exp = Math.floor(Math.log(this.value) / Math.log(1000));
          
            //   return (this.value / Math.pow(1000, exp)).toFixed(2) + suffixes[exp - 1]
            // },
              style: {
                  color: 'black'
              }
          },
  
          title: {
              text: null,
          },
      },
      series: [
        {
          name: 'Current Month',
          data: netamount,
          color: '#1aa8a9'
  
      },
          {
              name: 'Previous Month',
              data: pendingamount,
              color: '#333333'
          },
          
      ],
      }
      this.tbachart = new Chart(this.tbachartoptions);
    }

  setTranslation(p, slice){
    p.sliced = slice;
    if(p.sliced){
        p.graphic.animate(p.slicedTranslation);
    } else {
        p.graphic.animate({
            translateX: 0,
            translateY: 0
        });
    }

  }

}
