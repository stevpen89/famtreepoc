import React, { Component } from 'react'

export default class TreeCard extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div className="tree">
			<div className="tree-card">
				<div className="button-container">
					<div className="delete-container">
						<button>Delete Spouse</button><button>Delete Card</button>	
					</div>
					<div className="add-container">
						<button>Add Spouse</button><button onClick={this.props.addChild}>Add Child</button>	
					</div>
				</div>
				<div className="single-person">
					<div>ID:{this.props.person.id}</div>
					{this.props.person.name}: {this.props.person.born} - {this.props.person.died}
				</div>
				<div className="single-person">
					{this.props.person.spouse}: {this.props.person.sborn} - {this.props.person.sdied}
				</div>
			</div>
				<div className="generation">
					{this.props.person.children.length 
					?
					 this.props.person.children.map((person) => (
						<TreeCard  person={person} key={person.id}/> 
					 ))
					 : null}
				</div>
			</div>
		)   
	}
}

