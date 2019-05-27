import React from 'react';

class Calendar extends React.Component {
	constructor(props){
		super(props);
	}

	renderCalendar(){
		let theDate = new Date(this.props.date);
		console.log(this.props.date);
		console.log(theDate);
		return (
			<h3>CALENDAR TIME BABY</h3>
		)
	}

	render(){
		return (
			<div id='calendar'>
			{this.props.date !== '' ? 
				this.renderCalendar() :
				<h3><i>No dates to display</i></h3>
			}
			</div>
		)
	}
}

export default Calendar;