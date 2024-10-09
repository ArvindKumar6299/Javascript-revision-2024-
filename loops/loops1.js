//for loop -> if you know exactly iterations (in ranges)

for(let i=0;i<5;i++){
    console.log("HIi dude"+i)
};

// while loop -> to full fill task
let start = 0;
let end = 50;

while (start !=end){
    start = start+5;
    console.log("steps taken"+start)
}

// Do while loops - firsts run and then checks the condition

do{
    start = start*5;
    console.log("steps taken"+start)
}while(start<end)