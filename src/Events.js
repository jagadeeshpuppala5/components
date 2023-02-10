import {Component} from 'react'

export class Events extends Component{
	state={
		username:"",
		password:""
	}
	handleChange=(j)=>{
		this.setState({
			[j.target.name]:j.target.value
		})
	}
	handleClick=()=>{
		console.log(this.state.username,this.state.password)
	}
	render(){
		return(
			<div>
				<input name="username" onChange={this.handleChange} placeholder="Enter username:"/>
				<input name="password" onChange={this.handleChange} type="password" placeholder="Enter password"/>
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
}












{/*
import {Component} from 'react'

export class Events extends Component{
	state={
			username:"",
			password:""
		}
		handleChange=(j)=>{
			this.setState({
				[j.target.name]:j.target.value
			})
		}
		handleClick=()=>{
			console.log(this.state.username,this.state.password)
		}
	render(){
		return(
			<div>
				<input name="username" onChange={this.handleChange}placeholder="Enter username"/>
				<input name="password" onChange={this.handlePassword}placeholder="Enter password"/>
				<button onClick={this.handleClick}>submit</button>
			</div>
		)
	} 
}
*/}