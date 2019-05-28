import React from 'react';

class Calendar extends React.Component {
	// constructor(props){
	// 	super(props);
	// }

	render(){
		return (
			<div id='calendarContainer'>
			{this.props.calendar.length > 0 ?
				<div id='calendar'> 
					{this.props.calendar.map((day, i) => 
						day.month ? 
							<h3 key={i} className='month'>{day.month + ' ' + day.year}</h3> :
							day.legend ?
								<p key={i} className={'legend wd wd' + day.weekday}>{day.date}</p> : 
								<p key={i} className={'wd wd' + day.weekday + ' ' + day.holiday}>{day.date || day.date === 0 ? day.date + 1 : ' '}</p>
					)}
				</div> :
				<h3 id='noDates'><i>No dates to display</i></h3>
			}
			</div>
		)
	}
}

export default Calendar;