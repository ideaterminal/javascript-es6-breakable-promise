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

var p1 = makeBreakablePromise(function(resolve, reject){
	setTimeout(function(){
		resolve("p1 resolved");
	}, 1000);
});

var p2 = makeBreakablePromise(function(resolve, reject){
	setTimeout(function(){
		resolve("p2 resolved");
	}, 2000);
});

p1.then(function(res){
	console.log(res)
}).catch(function(rej){
	console.log(rej);
})

p2.then(function(res){
	console.log(res)
}).catch(function(rej){
	console.log(rej);
})

p1.break('broken p1');
