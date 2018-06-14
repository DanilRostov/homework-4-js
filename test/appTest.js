const assert = require('chai').assert;
const app = require('../app');

const {
	largest,
	smallest,
	transform,
	sum,
	sumSmallVariant,
	countDown
} = app;

describe('App', function() {
	it('should return largest argument', function() {
		const result = largest(2, 0.1, -5, 100, 3);
		assert.equal(result, '100');
	});

	it('should return smallest argument', function() {
		const result = smallest(2, 0.1, -5, 100, 3);
		assert.equal(result, '-5');
	});

	it('should return array of functions', function() {
		const result = transform([10, 20, 30, 40, 50]);
		assert.equal(result[3](), '40');
		assert.equal(result[4](), '50');
	});

	it('should return sum of arguments', function() {
		const result = sum(1, 3, 5, 7);
		assert.equal(result, '16');
	});

	it('should return sum of arguments', function() {
		const result = sumSmallVariant(1, 3, 5, 7);
		assert.equal(result, '16');
	});

	it('should return bound function by custom bind method', function() {
		function addPropToNumber(number) { 
			return this.prop + number; 
		}
		const bound = addPropToNumber.myBind({ prop: 9 });
		const result = bound(1);
		assert.equal(result, '10');
	});
})	