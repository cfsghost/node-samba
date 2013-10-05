"use strict";

var Samba = require('../');

var samba = new Samba();
samba.init(function(err) {
	console.log(samba.config.global.workgroup);
	console.log(samba.config.global['server string']);
});
