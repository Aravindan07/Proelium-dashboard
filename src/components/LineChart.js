import React from 'react';
import { Line } from 'react-chartjs-2';

export default function LineChart() {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [
            {
                label: 'Hours',
                lineTension: 0,
                data: ['6.4', '6.2', '6.8', '6.4', '6.2', '6.8', '6.4', '6.2', '6.8'],
                borderColor: ['rgba(255,0,0,1)'],
                backgroundColor: ['rgba(255,206,86,0)'],
                pointBackgroundColor: 'rgba(255,206,86,0)',
                pointBorderColor: 'rgba(255,206,86,0)',
            },
        ],
    };

    const options = {
        title: {
            display: true,
            text: 'Litre/Hour',
            position: 'left',
        },
        legend: {
            display: true,
            position: 'bottom',
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 5.8,
                        max: 7,
                        stepSize: 0.2,
                    },
                    gridLines: {
                        drawBorder: false,
                    },
                },
            ],
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                },
            ],
        },
    };

    const legend = {
        display: true,
        height: '180px',
        position: 'bottom',
    };

    return (
        <div>
            <Line data={data} legend={legend} options={options} />
        </div>
    );
}
