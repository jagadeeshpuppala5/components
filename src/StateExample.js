import React from 'react'

class StateExample extends React.Component{
	render(){
		return(
			<div>
				from state StateExample
				{
					this.props.employees.map((emp)=>(
						<div>
							<p>Name: {emp.name}, Age: {emp.age}</p>
						</div>
					))
				}
			</div>
		)
	}
}
export default StateExample
