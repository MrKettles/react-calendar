import React from 'react';

class DateForm extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div id='dateForm'>
				<form>
					<label htmlFor='date'>Start Date: </label>
					<input type='date' id='date' />
					<label htmlFor='number'>Number of Days: </label>
					<input type='number' id='number' />
					<label htmlFor='cc'>Country Code: </label>
					<input type='text' id='cc' />
				</form>
			</div>
		)
	}
}

export default DateForm;