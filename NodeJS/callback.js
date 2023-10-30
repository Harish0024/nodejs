
//defenition of printResult
function printResult(result)
{
    console.log(result);
}

//defenition of calc fun
function calculate(val1,val2,printResult)
{
    var result=val1*val2;
    printResult(result);
}

//invoke calc fun
calculate(100,200,printResult);
var IMEINo=123456789;
//how to reuse the function in anothe program
//use module export to export the function

module.exports={calc:calculate,printResult,IMEI_NO:IMEINo};