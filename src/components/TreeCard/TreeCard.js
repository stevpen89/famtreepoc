import React, { Component } from 'react'

export default class TreeCard extends Component {
	constructor(){
		super()
		this.state={
			name:"",
			spouse:"",
			spouseToggle:false,
		}
	}

	spouseToggle(){
		this.setState({spouseToggle:true})
	}

	nameHandler(val){
		this.setState({name:val})
	}

	spouseHandler(val){
		this.setState({spouse:val})
	}

	spouseDelete(){
		this.setState({spouseToggle:false,spouse:""})
	}

	render() {
		return (
			<div style={{height:"250px", width:"500px", border:"1px solid red"}}>
				<div style={{display:"flex"}}>
					<div style={{display:"flex", width:"50%"}}>
						<button style={{height:"25px"}}>Delete Person</button><div style={{height:"25px", margin:"5px 10px"}}>{this.state.name}</div>
					</div>
					<div style={{display:"flex", flexDirection:"row-reverse", width:"50%"}}>
						<button style={{height:"25px"}} onClick={()=>this.spouseToggle()}>Add Spouse</button><button style={{height:"25px"}}>Add Child</button>
					</div>
				</div>
				<div>
					<input placeholder="Your Name" onChange={(e)=>{this.nameHandler(e.target.value)}}></input>
				</div>
				{this.state.spouseToggle ? 
				<div style={{display:"flex", border:"1px solid blue"}}>
					<button style={{height:"25px"}} onClick={()=>this.spouseDelete()}>Delete Spouse</button>
					<div style={{height:"25px", margin:"5px 10px"}}>{this.state.spouse}</div>
					<input placeholder="Spouses Name" onChange={(e)=>{this.spouseHandler(e.target.value)}}></input>
				</div> 
				: null}
			</div>
		)
	}
}
