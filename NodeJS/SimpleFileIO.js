var files=require('fs');
files.writeFile('Demo1.txt',' NodeJS is a asynchronous .supports callbacks',
function(err){
    if(err!=undefined){
        console.log(err.message);
    }
    else{
        console.log('write'+data+'to the file');
    }
})
files.readFile('Demo1','utf-8',function(err,data){
    if(err!=undefined){
        console.log(err.message);
    }
    else{
        console.log(data);
    }
})