var ft = require('../ftime');
var assert = require('assert');
describe('ftimeTest', function(){
	it('test no argument', function(){
		try{
			ft();
		}catch(e){
			assert.equal('timestamp required', e.message);
		}

	});

	it('test now', function(){
		var timestamp = Date.now();

		assert.equal('刚刚', ft(timestamp));
	});

	it('test mistakeData', function(){
		assert.equal('unknow', ft(1111));
	});

	it('test year', function(){
		var date = new Date('1993-7-6');
		var timestamp = date.getTime();

		assert.equal('1993/7/6', ft(timestamp));
	});



});