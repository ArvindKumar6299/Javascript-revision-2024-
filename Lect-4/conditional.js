//conditionals

const  profit = 123;

// if (profit>=99) {
//     console.log("I am in winning zone!");
// } else {
//     console.log("You are in loss..")
// }


profit >= 229 ? console.log("i am true") : console.log("i am false");

const a = 8;
const b= 34;
const opt = "-";

switch(opt){
    case "+": console.log(a+b);
    break;
    case "-": console.log(a-b);
    break;
    case"*": console.log(a*b);
    break;
    default : console.log("Please provide valid Input");
}