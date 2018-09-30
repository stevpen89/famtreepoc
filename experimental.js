let familyTree = {
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

// basically what we need to do is when we look at every single thing in the object and take certain steps based on what we find
// we need a function that maps through everything on it's level (really a for in loop), it checks for truthy on everything on its level and then if the thing is truthy,
// it calls itself again on that thing and continues to check and call itself all the way down into the object

const dive = (val) => {
	let names = []
	for (let item in val){
		if(val[item]){names.push(val[item])}
		else{console.log('end')}
	}
	console.log(names)
}

console.log(dive(familyTree))