function makeBreakablePromise(callback){

	var _reject;
	var breakable = function(resolve, reject){
		_reject = reject;
		callback.call(this, resolve, reject);
	}

	var promise = new Promise(breakable);
	promise.break = function(message) {
		_reject(message);
	}

	return promise;

}