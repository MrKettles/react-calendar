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
        cc: ''
      }
  }
  
  inputHandler(e){
    e.preventDefault();
    let name = e.target.id;
    let val = e.target.value;
    if(name === 'day' || name === 'month' && val < 10 && val.toString().length < 2){
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

  displayCalendar(date, days){
    this.setState({date: date, number: days}, () => { console.log(this.state.date)});
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
          date={this.state.date}
          number={this.state.number}
        />
      </div>
    )
  }
}

export default App;
