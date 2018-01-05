let mapReverse = require('map-reverse');
// import mapReverse from 'map-reverse';
const userNames = [
	'cwbuecheler',
	'bort',
	'captaincode',
	'hotpants6969',
	'kelley',
	'steve',
	'starlord'
];

//function to change names to uppercase
const userNamesUp = userNames.map(name => {
	return name.toUpperCase();
});

//loop to run through array and log them
for (let i = 0; i < userNamesUp.length; i++){
	console.log(userNamesUp [i]);
}

const userNamesUpRev = mapReverse(userNames, name => {
	return name.toUpperCase();
});

console.log('\n\nreverse the order \n\n');


for (let i = 0; i < userNamesUpRev.length; i++){
	console.log(userNamesUpRev[i]);
}