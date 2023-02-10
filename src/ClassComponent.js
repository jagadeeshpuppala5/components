import React from 'react'
import StateExample from './StateExample'
import FunctionalComponent from './FunctionalComponent'

class ClassComponent extends React.Component{
	state={
		students:[
			{name:"jaga",age:23},
			{name:"ganesh",age:21},
			{name:"surya",age:22},
			{name:"ravi",age:21},
			{name:"hari",age:23},
			{name:"kalyan",age:32}
		]
	}
	render(){
		console.log(this.state)
		return(
			<div>
				<h1>this is class component</h1>
				<StateExample employees={this.state.students}/>
				<FunctionalComponent employees={this.state.employees}/>
			</div>
		);
	}
}
export default ClassComponent