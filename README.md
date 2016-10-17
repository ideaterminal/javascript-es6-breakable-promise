# javascript-es6-breakable-promise
Javascript promise that can be rejected by anyone, anywhere. 

One example usage is when you make successive async calls but you only need result from the latest call and want to prevent previous calls from overwriting stuff when they return.

# Install
Just read the source code and copy/paste into your codebase. Seriously, it's only a few lines of code.

#Usage
```js
var p1 = makeBreakablePromise(function(resolve, reject){
	setTimeout(function(){
		resolve("p1 resolved");
	}, 1000);
});

p1.break('broken p1');
```
#Important
Make sure you keep a reference to the object returned by ```makeBreakablePromise``` since that's the breakable promise. Objects returned by ```then``` and ```catch``` don't have break function.
