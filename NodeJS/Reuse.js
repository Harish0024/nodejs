//
//import'./callback.js';

//var <moduleRef> = require(<name of the module>);
//import the call back module and refer to its call
var call=require('./callback');//no need of .js
call.calc(50,200,call.printResult);
console.log(call.IMEI_NO);



