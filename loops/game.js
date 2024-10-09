// Guess the Input

let number = 50;

let guess = 0;

do{
   guess =  parseInt(prompt("Guess a number"));
   if(guess == number){
    alert("Winner")
    break;  //no breaking the loop

   }
}while(guess !=0);