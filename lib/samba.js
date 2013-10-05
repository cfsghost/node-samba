"use strict";

var fs = require('fs');
var ini = require('ini');

var Samba = module.exports = function() {
	var self = this;

	self.configFile = '/etc/samba/smb.conf';
};

Samba.prototype.init = function(callback) {
	var self = this;

	fs.readFile(self.configFile, function(err, data) {
		self.config = ini.parse(data.toString());

		process.nextTick(function() {
			if (callback)
				callback(null);
		});
	});
};

Samba.prototype.applyConfig = function(callback) {
	var self = this;

	fs.writeFile(self.configFile, function(err) {
		if (callback)
			callback(err);
	});
};
