
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
}

console.log(this.points);

module.exports = KNN
