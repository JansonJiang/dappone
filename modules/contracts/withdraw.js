var private = {}, self = null,
	library = null, modules = null;

function withdraw(cb, _library) {
	self = this;
	self.type = 6
	library = _library;
	cb(null, self);
}

withdraw.prototype.create = function (data, trs) {
	return trs;
}

withdraw.prototype.calculateFee = function (trs) {
	return 0;
}

withdraw.prototype.verify = function (trs, sender, cb, scope) {
	setImmediate(cb, null, trs);
}

withdraw.prototype.getBytes = function (trs) {
	return null;
}

withdraw.prototype.apply = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

withdraw.prototype.undo = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

withdraw.prototype.applyUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

withdraw.prototype.undoUnconfirmed = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

withdraw.prototype.ready = function (trs, sender, cb, scope) {
	setImmediate(cb);
}

withdraw.prototype.save = function (trs, cb) {
	setImmediate(cb);
}

withdraw.prototype.dbRead = function (row) {
	return null;
}

withdraw.prototype.normalize = function (asset, cb) {
	setImmediate(cb);
}

withdraw.prototype.onBind = function (_modules) {
	modules = _modules;
	modules.logic.transaction.attachAssetType(self.type, self);
}

module.exports = withdraw;
