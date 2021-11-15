// function statement
function greet() {
    console.log('Hi!');
}

greet();

// functions are "first-class" - meaning we can pass them around like variables, for example.
function logGreeting(fn) {
    fn();
}

// so we can invoke the logGreeting function and pass it the greet function as a parameter.
// This will pass the greet function as a parameter to logGreeting - without brackets() after greet
// it passes the function without running it first and just passing the result. This means that when
// the fn() is invoked inside logGreeting above, it runs greet there instead.
logGreeting(greet);

// In JavaScript, functions are objects

// function expression - we can assign a function to a variable just as we would a string or int:
var a = "hello"
var b = 1
var greetMe = function () {
    console.log('Hi Steve');
}
// Notice this function is "anonymous" - we didn't give it a name like greetMe above.

// Which, presumably will then run when we invoke greetMe...
greetMe();

// BTW, brackets seem to cause invocation. If we just do:
greetMe;
// We return a definition.

// It's also still "first class" - meaning we can pass it to other functions, for example.
logGreeting(greetMe);

// use a function expression on the fly - here we define an expression inside an invocation block, AS a parameter.
logGreeting(function () {
    console.log("Hi Steve, I'm running on the fly!");
});

// If we're only going to use a function once, why not just define it on the fly...?
