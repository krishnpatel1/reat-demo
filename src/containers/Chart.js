import React, { Component } from 'react';
import {Chart} from 'react-google-charts';

class BarChart extends Component {
    render(){
        return(
            <div>
                
<Chart
  width={'500px'}
  height={'300px'}
  chartType="ComboChart"
  loader={<div>Loading Chart</div>}
  data={[
    [
      'Month',
      'Bolivia',
      'Ecuador',
    ],
    ['2004/05', 15, 38 ],
    ['2005/06', 15, 20],
    ['2006/07', 17, 67],
    ['2007/08', 19, 10],
    ['2008/09', 10, 61],
  ]}
  options={{
      colors: ['#b0120a', '#ffab91'],
    // title: 'Monthly Coffee Production by Country',
    vAxis: { title: 'Cups' },
    // hAxis: { title: 'Month' },
    vAxis: {
        maxValue:0,
        gridlines: {
            color: 'transparent'
        },
        vAxis: { ticks: [25,45,65,85] }
    },
    seriesType: 'bars',
    legend: { position: 'bottom' }
  }}
/>
    
            </div>
        )
    }
    
}

export default BarChart;