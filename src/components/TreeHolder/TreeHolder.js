import React, { Component } from 'react'
import TreeCard from '../TreeCard/TreeCard'

export default class TreeHolder extends Component {
	constructor(){
		super()
		this.state={
			familyTree:{
				name:'Bob',
				spouse:'',
				children:[
					{
						name:'Karen',
						spouse:'',
						children:[]
					},
					{
						name:'Mike',
						spouse:'',
						children:[]
					}
				]
			}
		}
	}

	treeMaker(){
		const {familyTree} = this.state
		return <div><h1>{familyTree.name}</h1><h1>{familyTree.children[0].name}</h1><h1>{familyTree.children[1].name}</h1></div>
	}

	render() {
		return (
			<div>
				<div>{this.treeMaker()}</div>
			</div>
		)
	}
}
