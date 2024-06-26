import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        'use strict';
        $(function () {
            initCounters();
            initCharts();
        });

        //Widgets count plugin
        function initCounters() {
            $('.count-to').countTo();
        }


        $('#tableExport').DataTable({
            dom: 'Bfrltip',
            buttons: [
                'copy', 'csv', 'excel', 'print', {
                  extend: 'pdfHtml5',
                  orientation: 'landscape',
                  pageSize: 'LEGAL'
                }
              ],

        });




        //Charts
        function initCharts() {
            //Chart Bar
            $('.chart.chart-bar').sparkline(undefined, {
                type: 'bar',
                barColor: '#fff',
                negBarColor: '#fff',
                barWidth: '4px',
                height: '45px'
            });

            //Chart Pie
            $('.chart.chart-pie').sparkline(undefined, {
                type: 'pie',
                height: '45px',
                sliceColors: ['rgba(255,255,255,0.70)', 'rgba(255,255,255,0.85)', 'rgba(255,255,255,0.95)', 'rgba(255,255,255,1)']
            });

            //Chart Line
            $('.chart.chart-line').sparkline(undefined, {
                type: 'line',
                width: '60px',
                height: '45px',
                lineColor: '#fff',
                lineWidth: 1.3,
                fillColor: 'rgba(0,0,0,0)',
                spotColor: 'rgba(255,255,255,0.40)',
                maxSpotColor: 'rgba(255,255,255,0.40)',
                minSpotColor: 'rgba(255,255,255,0.40)',
                spotRadius: 3,
                highlightSpotColor: '#fff'
            });
        }
    }

}
