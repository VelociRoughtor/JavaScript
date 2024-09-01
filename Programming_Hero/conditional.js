/*
    syntax
    
    if(condition1){

    }
    else if(condition2){
    
    }
    else{
    
    }

    //condition true hole oi block er statementgula execute hobe
*/

var birianiPrice = 300;

if(birianiPrice <= 300){
    console.log('budget e dhorche, khai ek plate');
}
else if(birianiPrice > 300 && birianiPrice <= 400){
    console.log("Khatay likhe rakhen mama, kalke diye diboni bakita");
}
else{
    console.log("Khabo na, taka nai");
}

/*
    if-else shorthand ternary operator
    ternary - three parts

    syntax:

    condition ? true_statement : false_statement
*/

(birianiPrice <= 300) ? console.log('budget e dhorche, khai ek plate') : console.log("Khabo na, taka nai");

