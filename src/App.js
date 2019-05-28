import React from 'react';
import DateForm from './components/DateForm';
import Calendar from './components/Calendar';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        day: 0,
        month: 0,
        year: 0,
        date: '',
        number: 0,
        cc: '',
        calendar: []
      }
  }
  
  inputHandler(e){
    e.preventDefault();
    let name = e.target.id;
    let val = e.target.value;
    if((name === 'day' || name === 'month') && val < 10 && val.toString().length < 2){
      val = '0' + val;
    }
    if(name === 'year' && val < 1000 && val.toString().length < 4){
      val = '0'.repeat(4 - val.toString().length) + val;
    }
    this.setState({[name]: val});
  }

  submitHandler(e){
    e.preventDefault();
    if(this.validateState()){
      this.setDate();
    } else {
      alert('Please fill out all fields with valid values.');
    }
  }

  validateState(){
    return (
      this.state.day > 0 && this.state.day <= 31 &&
      this.state.month > 0 && this.state.month <= 12 &&
      this.state.year >= 0 &&
      this.state.number > 0 &&
      this.state.cc !== ''
    )
  }

  setDate(){
    this.setState({date: `${this.state.year}-${this.state.month}-${this.state.day}T00:00:00`}, () => {
      this.displayCalendar(this.state.date, this.state.number);
    });
  }

  createCalendar(){
    let d = new Date(this.state.date);
    let wday = d.getDay();
    let mday = d.getDate() - 1;
    let month = d.getMonth();
    let year = d.getFullYear();
    let span = this.state.number;

    let days = [];
 
    for(let i = 0; i < 7; i++){
      days.push({weekday: i, date: this.parseWeekday(i), legend: true});
    }

    days.push({month: this.parseMonth(month), year: year})

    let wdi = 0;
      while(wdi < wday){ 
        days.push({weekday: 'X', date: ''});
        wdi++;
      }

    for(let i = 0; i < span; i++){
      days.push({weekday: wday, date: mday, holiday: this.isHoliday(wday, mday, month)});
      wday = (wday + 1) % 7;
      let mlength = this.monthLength(month, year);
      mday = (mday + 1) % mlength;
      if(mday === 0 && days.length > 1){
        month = (month + 1) % 12;
        wdi = 0;
        if(month === 0 && days.length > 1){
          year++;
        }
        days.push({month: this.parseMonth(month), year: year});
        while(wdi < wday){ 
          days.push({weekday: 'X', date: ''});
          wdi++;
        }
      }
    }

    return days;
  }

  parseMonth(monthNum){
    let months = [
      'January', 
      'February', 
      'March', 
      'April', 
      'May', 
      'June', 
      'July', 
      'August', 
      'September', 
      'October', 
      'November', 
      'December'
    ]

    return months[monthNum];
  }

  parseWeekday(weekdayNum){
    let weekdays = [
      'Su',
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
      'Sa'
    ]

    return weekdays[weekdayNum];
  }

  isHoliday(weekday, day, month){
    let holidays = {
      0: { 0: true },
      1: {
        1: true,
        13: true
      },
      2: { 16: true },
      3: {
        0: true,
        21: true
      },
      4: {},
      5: {},
      6: { 3: true },
      7: {},
      8: {},
      9: { 30: true },
      10: { 10: true },
      11: {
        24: true,
        30: true
      }
    }
    if(
      (day > 14 && day < 22 && weekday === 1 && month === 0) ||
      (day > 14 && day < 22 && weekday === 1 && month === 1) ||
      (day > 7 && day < 15 && weekday === 0 && month === 4) ||
      (day > 23 && weekday === 1 && month === 4) ||
      (day > 14 && day < 22 && weekday === 0 && month === 5) ||
      (day < 7 && weekday === 1 && month === 8) ||
      (day > 20 && day < 28 && weekday === 4 && month === 10)
    ) { return 'holiday'; }
    if(holidays[month][day]){return 'holiday'}
    else {return ''};  
  }

  monthLength(month, year){
    if(month === 3 || 
    month === 5 || 
    month === 8 || 
    month === 10){
      return 30;
    } else if (month === 1){
      if((year % 4) === 0){
        return 29;
      } else {
        return 28;
      }
    } else {
      return 31;
    }
  }

  displayCalendar(date, days){
    this.setState({date: date, number: days}, () => {
      this.setState({calendar: this.createCalendar()});
    });
  }

  render(){
    return (
      <div className="App">
        <DateForm 
          inputHandler={e => this.inputHandler(e)} 
          submitHandler={e => this.submitHandler(e)} 
          displayCalendar={(date, days) => this.displayCalendar()}
        />
        <Calendar 
          calendar={this.state.calendar}
        />
      </div>
    )
  }
}

export default App;
