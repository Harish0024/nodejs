const { dir } = require('console');
var files=require('fs');
//fs is a buildin module of nodejs
var fdesc=0
//open(<filename>,<mode>,<callback>)
//mode r-read w-write a-append
files.open('Demo.txt','a',function(err,fd){            //Opens the file in write mode.open is bulid in fn
    if(err !=undefined){
    console.log(err.message);
    console.log(err.code);
    }else{
        console.log('File opened successfully.');
        console.log(fd);
        fdesc=fd;
    }

var str=new Buffer.from('Welcome to NodeJS ');
//no need of use buffer class in nodejs
console.log(fdesc);
//write(<fineno>,<dataTobe written>,<starting portion>,
//<size><encoding|null>,<callback>)

files.write(fdesc,str,0, str.length,null, function(err,written){
    console.log('Wrote' +written+'characters to the file');
})
files.close(fdesc, function(){
    console.log('File closed successfully.')
});
});