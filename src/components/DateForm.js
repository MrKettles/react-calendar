import React from 'react';

class DateForm extends React.Component {
	render(){
		return (
			<div id='dateForm'>
				<form>
					<h1>Calendar Application</h1>
					<label htmlFor='date'>Start Date: </label>
					<input 
						required
						className='dateInput' 
						type='number' 
						id='day' 
						onInput={e => this.props.inputHandler(e)} 
						placeholder='DD' 
						title='Must be between 0 & 31' />
					<input 
						required
						className='dateInput' 
						type='number' 
						id='month' 
						onInput={e => this.props.inputHandler(e)} 
						placeholder='MM' />
					<input 
						required
						className='dateInput' 
						type='number' 
						id='year' 
						onInput={e => this.props.inputHandler(e)} 
						placeholder='YYYY' />
					<label htmlFor='number'>Number of Days: </label>
					<input 
						required
						type='number' 
						id='number' 
						onInput={e => this.props.inputHandler(e)} />
					<label htmlFor='cc'>Country Code: </label>
					<input 
						required
						type='text' 
						id='cc' 
						maxLength='4'
						placeholder='Example: US'
						onInput={e => this.props.inputHandler(e)} />
					<button type='submit' onClick={e => this.props.submitHandler(e)}>Submit</button>
				</form>
			</div>
		)
	}
}

export default DateForm;