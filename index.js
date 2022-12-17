//const { spy } = require("chai");

function receivesAFunction(spy){
return spy();
}
receivesAFunction(function(num1){num1*num1});

function returnsANamedFunction(){
    return receivesAFunction;
}
receivesAFunction();

function returnsAnAnonymousFunction(){
    return function(){};
}

