import React from 'react';

class Calendar extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div id='calendar'>
				<h3><i>No dates to display</i></h3>
			</div>
		)
	}
}

export default Calendar;