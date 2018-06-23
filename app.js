const largest = (...args) => Math.max.apply(Math, args);
const smallest = (...args) => Math.min.apply(Math, args);
const transform = (arr) => arr.map(i => f => i);
const sum = (...args) => args.length <= 0 ? 0 : args[args.length - 1] + sum(...args.slice(0, -1));
const sumSmallVariant = (...args) => args.reduce((sum, current) => sum + current);
const countDown = (sec) => {
	if(sec < 0) return false;
	setTimeout(function() {
		console.log(sec);
		countDown(sec - 1);
	}, 1000);
};

// countDown(3);

Function.prototype.myBind = function (context) {
	const that = this;
	const args = Array.prototype.slice.call(arguments, 1);
	return function() {
		return that.apply(context, args.concat(Array.prototype.slice.call(arguments)))
	}
}

module.exports =  {
	largest,
	smallest,
	transform,
	sum,
	sumSmallVariant,
	countDown
}	