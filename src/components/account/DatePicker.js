import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const customizeStyle = `
.DayPicker {
  width: 98%;
}
.DayPicker *{
  outline:none;
}
.DayPicker-Month {
  display: block;
  width:100%;
  margin:0;
}
.DayPicker-Caption,.DayPicker-Weekdays,.DayPicker-Body {
  display: block;
}
.DayPicker-WeekdaysRow, .DayPicker-Week {
  display: flex;
  justify-content: space-around;
}
.DayPicker-Weekdays {
  margin-bottom: 15px;
}
.DayPicker-Caption {
  position: absolute;
}
.DayPicker-NavButton {
  top:-31px;
}
.DayPicker-NavButton--prev {
  margin-right:72px;
}
.DayPicker-NavButton--next {
  right: 0;
}
.DayPicker-Caption > div {
  position:absolute;
  white-space:nowrap;
  color: #b8a88c;
  font-size:14px;
  text-align:right;
  top:-31px;
  left:328px;
}
.DayPicker-WeekdaysRow {
  background:#f5f2e9;
}
.DayPicker-Weekday {
  color: #b8a88c;
  font-weight: 800;
}
.DayPicker-Day {
  width:36px;
  height:36px;
  line-height:36px;
  padding:0;
  margin:2px;
}
.DayPicker-Day--waitDays {
  background: linear-gradient(to right, #ad966b, #c7ae79);
  color: white;

}
.DayPicker-Day--waitDays:hover {
  background: linear-gradient(to right, #92856d, #ad966b);
}
`;
// week-short
const WEEKDAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['01月','02月','03月','04月','05月','06月','07月','08月','09月','10月','11月','12月',];

// const modifiers = {
//   invest: [new Date(2019, 2, 19), new Date(2019, 2, 21), new Date(2019, 2, 20), new Date(2019, 2, 28)],
// };

class DatePicker extends Component {
  constructor(props){
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      wait_days: [1, 2, 5, 17, 20, 27],
      modifiers: {
        waitDays: [new Date(2019, 2, 8)]
      }
    };
  }
  componentDidMount(){
    const daysArray = [];
    this.state.wait_days.map(item => {
      return daysArray.push(new Date(2019, 2, item))
    })
    this.setState((state) => {
      return {
        modifiers: {
          waitDays: daysArray
        }
      }
    })
  }
  handleDayClick(day) {
    const currentDay = day.getDate();
    if(this.state.wait_days.indexOf(currentDay) > -1){
      console.log('有回款');
    }else {
      return null
    }
  }
  render(){
    return (
      <div>
        <style>{customizeStyle}</style>
        <DayPicker 
          showOutsideDays
          months={MONTHS}
          weekdaysShort={WEEKDAYS_SHORT}
          modifiers={this.state.modifiers} 
          onDayClick={this.handleDayClick}
        />
      </div>
    );
  }
}

export default DatePicker;
