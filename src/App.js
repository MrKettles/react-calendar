import React from 'react';
import DateForm from './components/DateForm';
import Calendar from './components/Calendar';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }
  
  render(){
    return (
      <div className="App">
        <DateForm />
        <Calendar />
      </div>
    )
  }
}

export default App;
