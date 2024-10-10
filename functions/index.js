// Functions =>  a block of code that performs a particular task


function arvind(){
    const value = 97*76;
    console.log("result is: ",value);
}

arvind();


function  Data(a,b){//here a,b - are arguments - reference/ address is been passed
    const result =  a*b+b;
    console.log("a*b+b = ",result);
}

Data(53,21); //53,21 - are parameters which are real values being passed

//assignment
function multiply(num1,num2){//here num1, num2 are arguments which are ref/add which are been passed
    const result = num1*num2;
    // console.log("Result : ",result);
    return result;
    return num1*num2*num1;
}

const data = multiply(24,24);  // 24, 24 are parameters here - values which i am passing
console.log("result: ",data);

//unlimited arguments accept

function arvind(){
    console.log(arguments);

    let answer = 0;
    for(let i=0;i<=arguments.length;i++){
       answer = answer+arguments[i];
    }
    return answer;
}

const result1 = arvind(23,33,12,3,6);

console.log(result1);

function addSum(...numbers){
    let ans = 0;
    for(let i=0;i<numbers.length;i++){
        ans+=numbers[i];
    }
    return ans;
}

let calculation = addSum(23,434,12,8,9);

console.log(calculation);