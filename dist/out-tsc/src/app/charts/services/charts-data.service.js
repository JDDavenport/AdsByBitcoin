"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var ChartsDataService = /** @class */ (function () {
    function ChartsDataService(http, baseHref) {
        this.http = http;
        this.baseHref = baseHref;
        this.ng2Data = undefined;
        this.ng2Nvd3Data = undefined;
        this.ng2tooltipOptions = {
            backgroundColor: '#fff',
            titleFontFamily: 'Lato',
            titleFontSize: 14,
            titleFontStyle: 'bold',
            titleFontColor: '#9012fe',
            titleSpacing: 10,
            titleMarginBottom: 7,
            bodyFontFamily: 'Lato',
            bodyFontSize: 14,
            bodyFontStyle: 'bold',
            bodyFontColor: '#9b9b9b',
            bodySpacing: 10,
            borderColor: '#9012fe',
            borderWidth: 1,
            caretSize: 0,
            xPadding: 15,
            yPadding: 15
        };
        this.ng2Options = {
            radarChartOptions: { responsive: true, tooltips: this.ng2tooltipOptions },
            doughnutChartOptions: { responsive: true, tooltips: this.ng2tooltipOptions, legend: false },
            lineChartOptions: { responsive: true, tooltips: this.ng2tooltipOptions },
            pieChartOptions: { responsive: true, tooltips: this.ng2tooltipOptions, legend: false },
            barChartOptions: {
                scaleShowVerticalLines: false,
                responsive: true,
                tooltips: this.ng2tooltipOptions,
                scales: {
                    yAxes: [{ ticks: { beginAtZero: true } }]
                }
            }
        };
        this.ng2Nvd3Options = {
            // ********************* LINE CHART *********************
            lineChart: {
                chart: {
                    type: 'lineChart',
                    height: 450,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 40,
                        left: 55
                    },
                    x: function (d) { return d.x; },
                    y: function (d) { return d.y; },
                    useInteractiveGuideline: true,
                    dispatch: {
                        stateChange: function (e) { console.log('stateChange'); },
                        changeState: function (e) { console.log('changeState'); },
                        tooltipShow: function (e) { console.log('tooltipShow'); },
                        tooltipHide: function (e) { console.log('tooltipHide'); }
                    },
                    xAxis: {
                        axisLabel: 'October 2017'
                    },
                    yAxis: {
                        axisLabel: 'Users',
                        tickFormat: function (d) { return d3.format('')(d); },
                        axisLabelDistance: -10
                    },
                    callback: function (chart) { console.log('!!! lineChart callback !!!'); }
                }
            },
            // ********************* BAR CHART *********************
            barChart: {
                chart: {
                    type: 'discreteBarChart',
                    height: 450,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 50,
                        left: 55
                    },
                    x: function (d) { return d.label; },
                    y: function (d) { return d.value; },
                    showValues: true,
                    valueFormat: function (d) { return d3.format('')(d); },
                    duration: 500,
                    xAxis: {
                        axisLabel: '2016'
                    },
                    yAxis: {
                        axisLabel: 'Thousand dollars',
                        axisLabelDistance: -10,
                        tickFormat: function (d) { return d3.format('')(d); }
                    }
                }
            },
            // ********************* MULTI BAR CHART *********************
            multiBarChart: {
                chart: {
                    type: 'multiBarChart',
                    height: 450,
                    margin: {
                        top: 100,
                        right: 20,
                        bottom: 45,
                        left: 45
                    },
                    clipEdge: true,
                    duration: 500,
                    stacked: true,
                    xAxis: {
                        axisLabel: 'October 2017',
                        showMaxMin: true,
                        tickFormat: function (d) { return d3.format('')(d); }
                    },
                    yAxis: {
                        axisLabel: 'New Users',
                        axisLabelDistance: -20,
                        tickFormat: function (d) { return d3.format('')(d); }
                    }
                }
            },
            // ********************* MULTI BAR HORIZONTAL CHART *********************
            multiBarHorizontalChart: {
                chart: {
                    type: 'multiBarHorizontalChart',
                    height: 450,
                    x: function (d) { return d.label; },
                    y: function (d) { return d.value; },
                    showControls: true,
                    showValues: true,
                    duration: 500,
                    xAxis: {
                        showMaxMin: false
                    },
                    yAxis: {
                        axisLabel: 'Products sold',
                        tickFormat: function (d) { return d3.format('')(d); }
                    }
                }
            },
            // ********************* LINE PLUS BAR CHART *********************
            linePlusBarWithFocusChart: {
                chart: {
                    type: 'linePlusBarChart',
                    height: 500,
                    margin: {
                        top: 30,
                        right: 50,
                        bottom: 50,
                        left: 50
                    },
                    bars: {
                        forceY: [0]
                    },
                    bars2: {
                        forceY: [0]
                    },
                    xAxis: {
                        axisLabel: 'Time',
                        tickFormat: function (d) { return d3.time.format('%x')(new Date(d)); },
                    },
                    x2Axis: {
                        tickFormat: function (d) { return d3.time.format('%x')(new Date(d)); },
                        showMaxMin: false
                    },
                    y1Axis: {
                        axisLabel: 'Items Sold',
                        tickFormat: function (d) { return '#' + d3.format('')(d); },
                        axisLabelDistance: 12
                    },
                    y2Axis: {
                        axisLabel: 'Earnings',
                        tickFormat: function (d) { return '$' + d3.format('f')(d); }
                    }
                    // y3Axis: {
                    //   tickFormat: d => d3.format(',f')(d)
                    // },
                    // y4Axis: {
                    //   tickFormat: d => '$' + d3.format(',.2f')(d)
                    // }
                }
            },
            // ********************* DONUT CHART *********************
            donutChart: {
                chart: {
                    type: 'pieChart',
                    height: 450,
                    donut: true,
                    x: function (d) { return d.key; },
                    y: function (d) { return d.y; },
                    showLabels: true,
                    // pie: { // You can set up the start and end angles for the donut chart
                    //   startAngle: d => d.startAngle / 2 - Math.PI / 2,
                    //   endAngle: d => d.endAngle / 2 - Math.PI / 2
                    // },
                    duration: 500,
                    legend: {
                        margin: {
                            top: 5,
                            right: 20,
                            bottom: 5,
                            left: 0
                        }
                    }
                }
            }
        };
    }
    ChartsDataService.prototype.getNg2ChartsData = function () {
        var _this = this;
        if (this.ng2Data) {
            return new Promise(function (resolve, reject) {
                resolve(_this.ng2Data);
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.http.get(_this.baseHref + '/assets/data/ng2_charts.json').subscribe(function (data) {
                    _this.ng2Data = data;
                    _this.ng2Data.radarChart.options = _this.ng2Options.radarChartOptions;
                    _this.ng2Data.doughnutChart.options = _this.ng2Options.doughnutChartOptions;
                    _this.ng2Data.lineChart.options = _this.ng2Options.lineChartOptions;
                    _this.ng2Data.pieChart.options = _this.ng2Options.pieChartOptions;
                    _this.ng2Data.barChart.options = _this.ng2Options.barChartOptions;
                    resolve(_this.ng2Data);
                }, function (err) { return reject(); });
            });
        }
    };
    ChartsDataService.prototype.getNg2Nvd3ChartsData = function () {
        var _this = this;
        if (this.ng2Nvd3Data) {
            return new Promise(function (resolve, reject) {
                resolve({ data: _this.ng2Nvd3Data, options: _this.ng2Nvd3Options });
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.http.get(_this.baseHref + '/assets/data/ng2_nvd3_charts.json').subscribe(function (data) {
                    _this.ng2Nvd3Data = data;
                    resolve({ data: _this.ng2Nvd3Data, options: _this.ng2Nvd3Options });
                }, function (err) { return reject(); });
            });
        }
    };
    ChartsDataService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject(common_1.APP_BASE_HREF)),
        __metadata("design:paramtypes", [http_1.HttpClient, String])
    ], ChartsDataService);
    return ChartsDataService;
}());
exports.ChartsDataService = ChartsDataService;
//# sourceMappingURL=charts-data.service.js.map