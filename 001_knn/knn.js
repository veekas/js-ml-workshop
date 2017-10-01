'strict mode';

//Start off with what passes the first test.
class KNN {
	constructor(kSize) {
		this.kSize = kSize;
		this.points = [];
		// this.train = function () { };
	}

	train(pointsArr) {
		pointsArr.forEach(point => this.points.push(point));
	}

	_distance(vectorA, vectorB) {

		function squareAll(arr) {
			return arr.map(val => Math.pow(val, 2));
		}

		// get rid of this after using 'this'
		console.log(this);
		// console.log('vectorA', squareAll(vectorA), 'vectorB', squareAll(vectorB));

		let vectorSub = [];
		vectorSub.push(vectorA.forEach(function (index) {
			Math.sqrt(squareAll(vectorA)[index] + squareAll(vectorB)[index]);
		}));

		vectorSub = vectorA.forEach(index => vectorSub.push(Math.sqrt(squareAll(vectorA)[index] + squareAll(vectorB)[index])));

		console.log('vectorSub', vectorSub);

		vectorSub.reduce((sum, val) => { return sum + val; });

		console.log('vectorSub', vectorSub);

		return vectorSub;
	}

}



// console.log(this.points);

module.exports = KNN
