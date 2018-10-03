import React, { Component } from 'react'
import TreeCard from '../TreeCard/TreeCard'

export default class TreeHolder extends Component {
	constructor(){
		super()
		this.state={
			count:1,
			familyTree:{
				id:1,
				name:'Your Name Here',
				born:1980,
				died:null,
				spouse:'Insert Spouse Here',
				sborn:1980,
				sdied:null,
				children:[{
					id:2,
					name:'Your Name Here',
					born:1980,
					died:null,
					spouse:'Insert Spouse Here',
					sborn:1980,
					sdied:null,
					children:[]
				},{
					id:3,
					name:'Your Name Here',
					born:1980,
					died:null,
					spouse:'Insert Spouse Here',
					sborn:1980,
					sdied:null,
					children:[]
				},{
					id:4,
					name:'Your Name Here',
					born:1980,
					died:null,
					spouse:'Insert Spouse Here',
					sborn:1980,
					sdied:null,
					children:[{
						id:5,
						name:'Your Name Here',
						born:1980,
						died:null,
						spouse:'Insert Spouse Here',
						sborn:1980,
						sdied:null,
						children:[]
					},{
						id:6,
						name:'Your Name Here',
						born:1980,
						died:null,
						spouse:'Insert Spouse Here',
						sborn:1980,
						sdied:null,
						children:[]
					},{
						id:7,
						name:'Your Name Here',
						born:1980,
						died:null,
						spouse:'Insert Spouse Here',
						sborn:1980,
						sdied:null,
						children:[]
					}]
				}]
			}
		}
	this.addChild = this.addChild.bind(this)
	}

	seeker(arr,findId){
		return arr.map((obj)=>{
			if(obj.id === findId){console.log(`got ya b! ${obj.id}`); return this}
			else{obj.children.length > 0 ? this.seeker(obj.children,findId):null}
		})
	}

	personDelete(){

	}

	addChild(identifier){
		let treeCopy = Object.assign({},this.state.familyTree);
		let countCopy = this.state.count.valueOf();
		this.setState({count:countCopy});
		let gotcha = this.seeker(treeCopy,identifier);
		console.log(gotcha)

		// find the identifier in the arrays of objects. Use that to point us to the right scope.
		// then use 'this' to indicate the scope level.
		// push in a person template object into the children array at 'this' scope.
	}

	nameChild(){
		
	}

	addSpouse(){

	}

	nameSpouse(){

	}

	deleteSpouse(){

	}


	render() {
		let {familyTree} = this.state
		return (
			<div>
				<TreeCard person={familyTree} addChild={this.addChild}/>
			</div>
		)
	}
}
