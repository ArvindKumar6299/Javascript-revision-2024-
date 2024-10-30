const body = document.querySelector("body");
const button = document.getElementById("button");
//function to show time
showTime = ()=>{
    const currentTime = new Date();
    console.log(currentTime);

    const time = `${currentTime.getHours()}: ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`;
    console.log(time);

    // body.textContent = time;

    document.getElementById("time").innerText = time;
}

let interval = setInterval(showTime,1000); 


setTimeout(()=>{
    console.log("hello Dude!")
}, 5000);

// setInterval(()=>{

// })


button.addEventListener("click", ()=>{
    clearInterval(interval);
});