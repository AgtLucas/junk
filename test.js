/*global describe, it */
'use strict';
var assert = require('assert');
var junk = require('./junk');
var junkFiles = [
	'.DS_Store',
	'.AppleDouble',
	'.LSOverride',
	'Icon',
	'._test',
	'.Spotlight-V100',
	'.Trashes',
	'__MACOSX',
	'test~',
	'Thumbs.db',
	'ehthumbs.db',
	'Desktop.ini'
];

describe('junk#is()', function () {
	it('should match junk files', function () {
		junkFiles.forEach(function (el) {
			assert(junk.is(el), el);
		});
	});
});

describe('junk#isnt()', function () {
	it('should not match non-junk files', function () {
		assert(junk.isnt('test'));
	});
});
