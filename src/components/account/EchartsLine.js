import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class EchartsLine extends Component {
  getOption = () => {
    return {
      tooltip: {
          trigger: 'axis',
          backgroundColor : '#eee5ce',
          textStyle: {
            color: '#a08a64'
          }
      },
      xAxis:  {
          boundaryGap: false,
          data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',]
      },
      yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine : {
              show:true,
              lineStyle: {
                  color: '#e5e5e5',
                  type: 'solid',
                  width: 1
              }
          },
      },
      lineStyle: {
        color: ['#cfbe90']
      },
      series: [
          {
              name:'收益',
              type:'line',
              symbol: 'circle',
              symbolSize: 7,
              itemStyle: {
                  normal: {
                      color: '#a08a64',
                  }
              },
              data:[{
                value: 90,
                symbol: 'emptyCircle',
              },{
                value: 20,
                symbol: 'emptyCircle',
              },{
                value: 60,
                symbol: 'emptyCircle',
              },{
                value: 100,
                symbol: 'emptyCircle',
              }, 13, 10,11, 201, 15, 13, 12, 13, 10],
          }
      ]
  };

  };
  render(){
    return (
      <ReactEcharts
        option={this.getOption()}
        style={{height: '350px', width: '100%', marginTop: '-10px'}}
        className='react_for_echarts' 
      />
    )
  }
}

export default EchartsLine;