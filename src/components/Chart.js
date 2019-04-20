import React from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        position: 'right'
                    }]
                }
            }
        }
    }
    render() {

        return (
            <Line data={this.props.chartData} options={this.state.options} />
        )
    }
}
export default Chart;